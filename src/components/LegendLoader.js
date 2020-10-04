import React from "react";
import ContentLoader from "react-content-loader";

export default function LegendLoader() {
  return (
    <ContentLoader
      speed={2}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      //       height="100%"
      viewBox="0 0 160 100"
      backgroundColor="white"
      foregroundColor="#023254"
    >
      <rect x="15" y="0" rx="4" ry="4" width="200" height="25" />
      <rect x="15" y="30" rx="2" ry="2" width="40" height="15" />
      <rect x="75" y="30" rx="16" ry="16" width="55" height="22" />
      <rect x="15" y="60" rx="3" ry="3" width="215" height="15" />
      <rect x="15" y="90" rx="3" ry="3" width="50" height="15" />
    </ContentLoader>
  );
}
