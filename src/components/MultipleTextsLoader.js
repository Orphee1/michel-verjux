import React from "react";
import ContentLoader from "react-content-loader";

export default function MultipleTextsLoader() {
  return (
    <ContentLoader
      speed={2}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      viewBox="0 0 100 105"
      backgroundColor="white"
      foregroundColor="#023254"
    >
      <rect x="5" y="0" rx="0" ry="0" width="100%" height="34" />
      <rect x="5" y="35" rx="0" ry="0" width="100%" height="34" />
      <rect x="5" y="70" rx="0" ry="0" width="100%" height="34" />
    </ContentLoader>
  );
}
