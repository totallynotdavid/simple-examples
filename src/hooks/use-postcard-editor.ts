import { useState, useCallback } from "react";
import { DEFAULT_CONFIG, DEFAULT_CONTENT } from "@/data/default-content";
import { PostcardConfig, PostcardContent, PostcardStyle } from "@/types/config";

export function usePostcardEditor() {
  const [config, setConfig] = useState<PostcardConfig>(DEFAULT_CONFIG);
  const [content, setContent] = useState<PostcardContent>(DEFAULT_CONTENT);

  const updateStyle = useCallback(
    (key: keyof PostcardStyle, value: string | number) => {
      setConfig((prev) => ({
        ...prev,
        style: {
          ...prev.style,
          [key]: value,
        },
      }));
    },
    [],
  );

  const updateLayout = useCallback((layout: PostcardConfig["layout"]) => {
    setConfig((prev) => ({ ...prev, layout }));
  }, []);

  return {
    config,
    content,
    setContent,
    updateStyle,
    updateLayout,
  };
}
