import React from "react";
import ContentLoader from "react-content-loader";

export default function HomeImagesLoader() {
  return [
    <ContentLoader
      key={1}
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      viewBox="0 0 100 60"
      backgroundColor="white"
      foregroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>,
    <ContentLoader
      key={2}
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      viewBox="0 0 100 60"
      backgroundColor="white"
      foregroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>,
    <ContentLoader
      key={3}
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      viewBox="0 0 100 60"
      backgroundColor="white"
      foregroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>,
    <ContentLoader
      key={4}
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      viewBox="0 0 100 60"
      backgroundColor="white"
      foregroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>,
  ];
}
