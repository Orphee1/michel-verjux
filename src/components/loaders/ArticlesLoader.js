import React from "react";
import ContentLoader from "react-content-loader";

export default function ArticlesLoader() {
  return (
    <ContentLoader
      speed={3}
      interval={0.15}
      gradientRatio={2}
      width="100%"
      viewBox="0 0 100 105"
      backgroundColor="white"
      backgroundColor="rgba(40, 44, 53, 0.5)"
    >
      <rect x="3" y="1" rx="0" ry="0" width="95" height="4" />
      <rect x="3" y="6" rx="0" ry="0" width="65" height="4" />

      <rect x="3" y="13" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="16" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="19" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="22" rx="1" ry="1" width="95" height="1" />

      <rect x="3" y="36" rx="0" ry="0" width="95" height="4" />
      <rect x="3" y="41" rx="0" ry="0" width="65" height="4" />

      <rect x="3" y="48" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="51" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="54" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="57" rx="1" ry="1" width="95" height="1" />

      <rect x="3" y="70" rx="0" ry="0" width="95" height="4" />
      <rect x="3" y="75" rx="0" ry="0" width="65" height="4" />

      <rect x="3" y="82" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="85" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="88" rx="1" ry="1" width="95" height="1" />
      <rect x="3" y="91" rx="1" ry="1" width="95" height="1" />
    </ContentLoader>
  );
}
