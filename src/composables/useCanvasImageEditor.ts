import { onMounted, ref, type Ref } from "vue";
import useImageControls from "./useImageControls";

const myCanvas: Ref<HTMLCanvasElement | null> = ref(null);
const loading = ref(false);

const useImageCanvasEditor = () => {
  const {
    imageUrl,
    bgLayerOpacity,
    mixBlendValue,
    bgLayerColor,
    fromGradient,
    viaGradient,
    toGradient,
    selectedGradientDirection,
  } = useImageControls();

  onMounted(() => {
    if (imageUrl.value) {
      drawImage();
    }
  });

  function drawImage() {
    return new Promise<void>((resolve) => {
      const canvas = myCanvas.value;

      if (!canvas) {
        console.error("Canvas is not available");
        return resolve();
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return resolve();
      }

      const image = new Image();
      image.src = imageUrl.value;

      image.onload = () => {
        // IMAGE NATURAL WIDTH AND HEIGHT FOR BETTER QUALITY
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        // CLEAR THE CANVAS BEFORE DRAWING
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // DRAW THE IMAGE
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(image, 0, 0);

        ctx.globalCompositeOperation =
          mixBlendValue.value as GlobalCompositeOperation;

        // IF GRADIENT IS CHOSEN
        if (selectedGradientDirection.value) {
          let gradient: CanvasGradient | undefined;

          switch (selectedGradientDirection.value) {
            case "bg-gradient-to-t":
              gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
              break;
            case "bg-gradient-to-tr":
              gradient = ctx.createLinearGradient(
                0,
                canvas.height,
                canvas.width,
                0,
              );
              break;
            case "bg-gradient-to-r":
              gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
              break;
            case "bg-gradient-to-br":
              gradient = ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height,
              );
              break;
            case "bg-gradient-to-b":
              gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
              break;
            case "bg-gradient-to-bl":
              gradient = ctx.createLinearGradient(
                canvas.width,
                0,
                0,
                canvas.height,
              );
              break;
            case "bg-gradient-to-l":
              gradient = ctx.createLinearGradient(canvas.width, 0, 0, 0);
              break;
            case "bg-gradient-to-tl":
              gradient = ctx.createLinearGradient(
                canvas.width,
                canvas.height,
                0,
                0,
              );
              break;
          }

          if (gradient) {
            if (fromGradient.value)
              gradient.addColorStop(0, fromGradient.value);
            if (viaGradient.value)
              gradient.addColorStop(0.5, viaGradient.value);
            if (toGradient.value) gradient.addColorStop(1, toGradient.value);

            // GRADIENT FILL STYLE AND DRAW OVER THE IMAGE
            ctx.globalAlpha = bgLayerOpacity.value / 100;
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        } else {
          // IF NO GRADIENT IS SELECTED
          ctx.globalAlpha = bgLayerOpacity.value / 100;
          ctx.fillStyle = bgLayerColor.value;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        resolve();
      };

      image.onerror = () => {
        console.error("Failed to load image");
        resolve();
      };
    });
  }

  async function downloadImage() {
    const canvas = myCanvas.value;

    if (!canvas) {
      console.error("Canvas is not available");
      return;
    }

    loading.value = true;

    // Wait for the image to be drawn before downloading
    await drawImage();

    loading.value = false;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "image-blender.png"; //
    link.click(); // DOWNLOAD TRIGGER
  }

  // WATCH CHANGES FOR REDRAW IMAGE
  // watch(
  //   [
  //     imageUrl,
  //     bgLayerOpacity,
  //     mixBlendValue,
  //     bgLayerColor,
  //     fromGradient,
  //     viaGradient,
  //     toGradient,
  //     selectedGradientDirection,
  //   ],
  //   () => {
  //     if (myCanvas.value) {
  //       drawImage();
  //     }
  //   }
  // );

  return {
    myCanvas,
    drawImage,
    downloadImage,
    loading,
  };
};

export default useImageCanvasEditor;
