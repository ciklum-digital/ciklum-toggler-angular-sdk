import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeatureToggleDirective } from './directives/feature-toggle.directive';
import { FeatureToggleWhenDisabledDirective } from './directives/feature-toggle-when-disabled.directive';
import { ConfigProvider } from './models/config-provider.model';
import { FeatureToggleService } from './services/feature-toggle.service';
import { CacheService } from './services/cache.service';
import { FeatureHttpService } from './services/feature-http.service';

@NgModule({
  declarations: [
    FeatureToggleDirective,
    FeatureToggleWhenDisabledDirective,
  ],
  exports: [
    FeatureToggleDirective,
    FeatureToggleWhenDisabledDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    CacheService,
    FeatureHttpService,
  ],
})
export class FeatureToggleModule {
  static forRoot(configProvider: ConfigProvider): ModuleWithProviders {
    return {
      ngModule: FeatureToggleModule,
      providers: [
        configProvider,
        FeatureToggleService,
      ],
    };
  }
}
