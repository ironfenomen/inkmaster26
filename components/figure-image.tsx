import type { CSSProperties } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  variant?: "portrait" | "square" | "wide";
};

const variantStyle: Record<NonNullable<Props["variant"]>, CSSProperties> = {
  portrait: { aspectRatio: "4/5", width: "100%", maxWidth: 440, minHeight: 280 },
  square: { aspectRatio: "1", width: "100%", maxWidth: 360 },
  wide: { aspectRatio: "16/10", width: "100%", maxWidth: 720, minHeight: 220 },
};

export function FigureImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 760px) 100vw, 440px",
  priority,
  variant = "portrait",
}: Props) {
  return (
    <div
      className={`media-frame ${className}`.trim()}
      style={variantStyle[variant]}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="media-img"
        priority={priority}
      />
      <div className="media-vignette" aria-hidden />
      <div className="media-shine" aria-hidden />
    </div>
  );
}
