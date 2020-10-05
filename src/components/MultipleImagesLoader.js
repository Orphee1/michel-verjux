import React from "react";
import ContentLoader from "react-content-loader";

export default function MultipleImagesLoader() {
  return (
    <ContentLoader
      speed={3}
      interval={0.15}
      gradientRatio={2}
      //       height="100%"
      width="100%"
      viewBox="0 0 500 400"
      backgroundColor="white"
      foregroundColor="rgba(2, 50, 84, 0.5)"
    >
      <rect x="10" y="0" rx="0" ry="0" width="150" height="160" />
      <rect x="180" y="0" rx="0" ry="0" width="150" height="160" />
      <rect x="345" y="0" rx="0" ry="0" width="150" height="160" />
      <rect x="10" y="195" rx="0" ry="0" width="150" height="160" />
      <rect x="180" y="195" rx="0" ry="0" width="150" height="160" />
      <rect x="345" y="195" rx="0" ry="0" width="150" height="160" />
    </ContentLoader>
  );
}
