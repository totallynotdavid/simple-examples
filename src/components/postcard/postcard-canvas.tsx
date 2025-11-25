import { CSSProperties } from "react";
import { PostcardConfig, PostcardContent } from "@/types/config";
import { TextureOverlay } from "./texture-overlay";

import { ClassicLayout } from "./layouts/classic-layout";
import { OrganicLayout } from "./layouts/organic-layout";
import { SwissLayout } from "./layouts/swiss-layout";
import { EtherealLayout } from "./layouts/ethereal-layout";

const LAYOUT_COMPONENTS = {
  classic: ClassicLayout,
  organic: OrganicLayout,
  swiss: SwissLayout,
  ethereal: EtherealLayout,
};

interface PostcardCanvasProps {
  config: PostcardConfig;
  content: PostcardContent;
}

export function PostcardCanvas({ config, content }: PostcardCanvasProps) {
  const LayoutComponent = LAYOUT_COMPONENTS[config.layout];

  const dynamicStyles = {
    "--p-bg": config.style.backgroundColor,
    "--p-ink": config.style.textColor,
    "--p-accent": config.style.accentColor,
    "--p-font-head":
      config.style.fontHeading === "serif" ? "serif" : "sans-serif",
    "--p-font-body": config.style.fontBody === "serif" ? "serif" : "sans-serif",
    "--p-padding": `${config.style.padding}rem`,
    "--p-gap": `${config.style.gap}rem`,
  } as CSSProperties;

  return (
    <div className="relative flex items-center justify-center bg-gray-100 p-8 rounded-xl shadow-inner overflow-hidden min-h-[500px]">
      <div
        style={{
          width: config.dimensions.width,
          height: config.dimensions.height,
          ...dynamicStyles,
        }}
        className="bg-white shadow-2xl transition-all duration-300 relative transition-preview isolate"
      >
        <LayoutComponent content={content} />

        {/* texture overlay (applies to all layouts) */}
        <TextureOverlay opacity={config.style.textureOpacity} />
      </div>
    </div>
  );
}
