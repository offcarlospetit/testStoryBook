/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import type { MetricsTool } from '../components/metricsProvider/MetricsProvider';

export const metricsToolMock: MetricsTool = {
  logEvent: (name: string, params?: { [key: string]: any }) =>
    Promise.resolve(),
};
