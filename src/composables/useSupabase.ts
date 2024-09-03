import type { Session } from '@supabase/supabase-js';
import { ref } from "vue";
import supabase from "../lib/supabaseClient";
import useImageCanvasEditor from "./useCanvasImageEditor";

const { myCanvas, downloadImage } = useImageCanvasEditor();

const session = ref<Session | null>(null)

const useSupabase = () => {
  const downloadCount = ref(0);

  // Fetch current download count
  const fetchDownloadCount = async () => {
    const { data, error } = await supabase
      .from("downloads")
      .select("download_count")
      .eq("id", 1)
      .single();

    if (data && data.download_count !== undefined) {
      downloadCount.value = data.download_count;
    } else if (error) {
      console.error("Error fetching count:", error);
    } else {
      console.warn("No data found");
    }
  };

  const incrementDownloadCount = async () => {
    downloadImage();

    // INCREMENT COUNT
    const { data, error } = await supabase
      .from("downloads")
      .select("download_count")
      .eq("id", 1)
      .single();

    if (data && data.download_count !== undefined) {
      const newCount = data.download_count + 1;

      // UPDATE COUNT
      const { error: updateError } = await supabase
        .from("downloads")
        .update({ download_count: newCount })
        .eq("id", 1);

      if (updateError) {
        console.error("Error updating count:", updateError);
      }
    } else {
      console.error("Error fetching data:", error);
    }
  };

  // GOOGLE SIGN IN
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error: ", error.message);
    } else {
      console.log("Sign-in successful:", data);
      if (data && (data as any).session) {
        session.value = (data as any).session; // Update session with the new session data
      } else {
        console.error("Session data not found in response.");
      }
    }
  }

  // SIGN OUT
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      session.value = null; 
      console.log("Signed out successfully");
    }
  };

  return {
    downloadCount,
    session,
    signInWithGoogle,
    signOut,
    fetchDownloadCount,
    incrementDownloadCount,
  };
};

export default useSupabase;
