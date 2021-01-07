import React from "react";
import ContentLoader from "react-content-loader";

export default function BiblioLoader() {
  return (
    <ContentLoader
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      //       height="100%"
      viewBox="0 0 100 100"
      backgroundColor="white"
      foregroundColor="rgba(2, 50, 84, 0.5)"
    >
      <rect x="0" y="0" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="0" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="6" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="6" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="12" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="12" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="18" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="18" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="24" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="24" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="30" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="30" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="36" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="36" rx="2" ry="2" width="90" height="2" />

      <rect x="0" y="42" rx="5" ry="5" width="2" height="2" />
      <rect x="6" y="42" rx="2" ry="2" width="90" height="2" />
    </ContentLoader>
  );
}
