const SIZE = 256;
const MAX_BYTES = 180_000;

export function readFileAsLogo(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Choose an image file."));
      return;
    }
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not read the image."));
          return;
        }
        const scale = Math.max(SIZE / image.width, SIZE / image.height);
        const width = image.width * scale;
        const height = image.height * scale;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, SIZE, SIZE);
        ctx.drawImage(image, (SIZE - width) / 2, (SIZE - height) / 2, width, height);
        let quality = 0.86;
        let data = canvas.toDataURL("image/jpeg", quality);
        while (data.length > MAX_BYTES && quality > 0.5) {
          quality -= 0.1;
          data = canvas.toDataURL("image/jpeg", quality);
        }
        resolve(data);
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read the image."));
    };
    image.src = url;
  });
}
