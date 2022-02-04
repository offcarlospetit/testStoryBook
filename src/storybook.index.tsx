import React from 'react';
import StorybookUIRoot from '../storybook';
import ThemeManager from './components/themeProviderApp/ThemeProviderApp';
import MetricsContext from './components/metricsProvider/MetricsProvider';

export default function Root() {
  return (
      <ThemeManager>
        <MetricsContext>
          <StorybookUIRoot />
        </MetricsContext>
      </ThemeManager>
  );
}
