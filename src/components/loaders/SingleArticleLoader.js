import React from "react";
import ContentLoader from "react-content-loader";

function ArticleLoaderSmallScreen() {
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
      <rect x="0" y="0" rx="2" ry="2" width="100" height="5" />
      <rect x="0" y="7" rx="2" ry="2" width="100" height="5" />

      <rect x="0" y="17" rx="2" ry="2" width="40" height="3" />
      <rect x="0" y="22" rx="2" ry="2" width="40" height="3" />
      <rect x="0" y="27" rx="2" ry="2" width="40" height="3" />

      <rect x="0" y="40" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="44" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="48" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="52" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="56" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="60" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="64" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="68" rx="2" ry="2" width="100" height="2" />

      <rect x="0" y="80" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="84" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="88" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="92" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="96" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="100" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="104" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="108" rx="2" ry="2" width="100" height="2" />
    </ContentLoader>
  );
}

function ArticleLoaderBigScreen() {
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
      <rect x="0" y="0" rx="2" ry="2" width="100" height="5" />
      <rect x="0" y="7" rx="2" ry="2" width="100" height="5" />

      <rect x="0" y="17" rx="2" ry="2" width="40" height="3" />
      <rect x="0" y="22" rx="2" ry="2" width="40" height="3" />
      <rect x="0" y="27" rx="2" ry="2" width="40" height="3" />

      <rect x="0" y="40" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="44" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="48" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="52" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="56" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="60" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="64" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="68" rx="2" ry="2" width="100" height="2" />

      <rect x="0" y="80" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="84" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="88" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="92" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="96" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="100" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="104" rx="2" ry="2" width="100" height="2" />
      <rect x="0" y="108" rx="2" ry="2" width="100" height="2" />
    </ContentLoader>
  );
}

export { ArticleLoaderSmallScreen, ArticleLoaderBigScreen };
