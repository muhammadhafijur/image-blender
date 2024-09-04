import Prism from "prismjs";
import { nextTick, ref, watch, type Ref } from "vue";
import demoImg from "../images/demo.png";

const imageUrl: Ref<string> = ref(demoImg);

const showPreview: Ref<boolean> = ref(true);
const viewCode: Ref<string | null> = ref(null);
const aspectRatio: Ref<string> = ref("square");
const bgLayerOpacity: Ref<number> = ref(40);
const bgLayerColor: Ref<string> = ref("#00C16A");
const mixBlendValue: Ref<string> = ref("normal");
const sliderBackground: Ref<string> = ref("");

const selectedGradientDirection: Ref<string> = ref("");
const fromGradient: Ref<string> = ref("#FFA500");
const viaGradient: Ref<string> = ref("#6366f1");
const toGradient: Ref<string> = ref("#ef4444");
const showGradientDropdown: Ref<boolean> = ref(false);

const DARK_MODE_KEY = 'darkMode';
const isDarkMode: Ref<boolean> = ref(false)


const useImageControls = () => {


  const handleViewCode = async () => {
    const codeBlock = `
  <div class="relative h-full w-full aspect-[${aspectRatio.value}] test">
    <div class="absolute h-full w-full ${
      selectedGradientDirection.value
        ? `${selectedGradientDirection.value} from-[${fromGradient.value}] via-[${viaGradient.value}] to-[${toGradient.value}]`
        : `bg-[${bgLayerColor.value}]`
    } opacity-[${bgLayerOpacity.value}%] mix-blend-${mixBlendValue.value}"></div>
    <img src="${imageUrl.value}" alt="" class="h-[300px] w-full object-cover" />
  </div>
`;

    viewCode.value = codeBlock;
    // Re apply syntax highlighting after updating content
    await nextTick(); // In case anyone wants to know https://vuejs.org/api/general.html#nexttick 
    Prism.highlightAll();
  };

  watch(
    [
      bgLayerOpacity,
      bgLayerColor,
      mixBlendValue,
      selectedGradientDirection,
      showGradientDropdown,
      fromGradient,
      viaGradient,
      toGradient,
      imageUrl,
      aspectRatio,
    ],
    handleViewCode,
    { immediate: true }
  );

  return {
    isDarkMode,
    imageUrl,
    aspectRatio,
    showPreview,
    viewCode,
    handleViewCode,
    bgLayerOpacity,
    bgLayerColor,
    mixBlendValue,
    sliderBackground,
    selectedGradientDirection,
    showGradientDropdown,
    fromGradient,
    viaGradient,
    toGradient,
    DARK_MODE_KEY
  };
};

export default useImageControls;
