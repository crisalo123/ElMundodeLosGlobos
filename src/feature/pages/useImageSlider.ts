import { useEffect, useState } from "react";

export function useImageSlider(images: string[], intervalTime = 3000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return index;
}
