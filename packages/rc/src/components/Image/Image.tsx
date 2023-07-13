import cn from "classnames";
import React, { DetailedHTMLProps, ImgHTMLAttributes, memo, useEffect, useRef } from "react";
import s from "./Image.module.scss";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Image = memo(({ className, ...props }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = wrapperRef.current;
    const image = imgRef.current;

    if (!container || !image) {
      return;
    }

    const handleError = () => {
      if (container.contains(image)) {
        container.removeChild(image);
      }
    };

    image.addEventListener("error", handleError);

    return () => {
      image.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={cn(s.image, className)}>
      <img loading="lazy" {...props} ref={imgRef} />
    </div>
  );
});
