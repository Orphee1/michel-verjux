import React from "react";
import ContentLoader from "react-content-loader";

function ImageLoaderSmallScreen() {
  return (
    <ContentLoader
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      //       height={180}
      viewBox="0 0 100 150"
      backgroundColor="white"
      foregroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100" height="110" />
      <rect x="0" y="115" rx="2" ry="2" width="40" height="2" />
      <rect x="0" y="119" rx="2" ry="2" width="40" height="2" />
      <rect x="0" y="123" rx="2" ry="2" width="40" height="2" />
    </ContentLoader>
  );
}

function ImageLoaderBigScreen() {
  return (
    <ContentLoader
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      //       height={180}
      viewBox="0 0 100 60"
      backgroundColor="white"
      foregroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="70" height="55" />
      <rect x="75" y="40" rx="2" ry="2" width="30" height="1" />
      <rect x="75" y="43" rx="2" ry="2" width="30" height="1" />
      <rect x="75" y="46" rx="2" ry="2" width="30" height="1" />
    </ContentLoader>
  );
}

export { ImageLoaderSmallScreen, ImageLoaderBigScreen };
