import React from 'react';
import ThemedImage from '@docusaurus/theme-classic/lib/theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const ThemedImg = ({ name, alt }: { name: string; alt?: string }) => (
  <ThemedImage
    alt={alt ?? name.replace('_', ' ')}
    sources={{
      light: useBaseUrl(`/img/${name}_light.png`),
      dark: useBaseUrl(`/img/${name}_dark.png`),
    }}
  />
);
