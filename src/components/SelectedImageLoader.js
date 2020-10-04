import React from "react";
import ContentLoader from "react-content-loader";

export default function SelectedImageLoader() {
  return (
    <ContentLoader
      speed={2}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      //       height="100%"
      viewBox="0 0 100 60"
      backgroundColor="white"
      foregroundColor="#023254"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
}
