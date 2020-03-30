import { InjectionToken } from '@angular/core';
import { FeatureToggleConfig } from './feature-toggle-config.model';

export interface ConfigProvider {
  provide: InjectionToken<string>;
  useFactory(): FeatureToggleConfig;
}
