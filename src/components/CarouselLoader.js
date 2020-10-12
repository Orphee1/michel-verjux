import React from 'react';

import ContentLoader from "react-content-loader";

export default function CarouselLoader() {
        return (
                <ContentLoader
                speed={3}
                interval={0.15}
                gradientRatio={2}
                width="100%"
                //       height="100%"
                viewBox="0 0 100 104"
                backgroundColor="white"
                foregroundColor="rgba(2, 50, 84, 0.5)"
                
                >
  <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />

                </ContentLoader>
        );
}
