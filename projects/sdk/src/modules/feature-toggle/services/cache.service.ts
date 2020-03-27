import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { timer } from 'rxjs';

import { FeatureHttpService } from './feature-http.service';
import { FeatureToggleModel } from '../models/feature-toggle.model';
import { FEATURE_TOGGLE_CONFIG_TOKEN } from '../feature-toggle-config.token';
import { FeatureToggleConfig } from '../models/feature-toggle-config.model';

@Injectable({
  providedIn: 'root',
})
export class CacheService {

  private featureToggleDataConfig: FeatureToggleModel;
  private featureToggleConfig: FeatureToggleConfig;

  constructor(
    private httpFeature: FeatureHttpService,
    @Inject(FEATURE_TOGGLE_CONFIG_TOKEN) featureToggleConfig: FeatureToggleConfig,
  ) {
    this.featureToggleConfig = featureToggleConfig;
    this.initCache();
    this.cacheUpdate();
  }
  public getFeature(featureName: string): boolean {
    return this.featureToggleDataConfig[featureName] as boolean;
  }
  private cacheUpdate() {
    const period = this.featureToggleConfig.cachePeriod;
    if (period) {
      timer(0, period)
        .subscribe(() => {
          this.initCache();
        });
    }
  }
  private initCache() {
    this.httpFeature.getConfig().pipe(
      tap((config: FeatureToggleModel) => {
        this.featureToggleDataConfig = config;
      })
    );
  }
}
