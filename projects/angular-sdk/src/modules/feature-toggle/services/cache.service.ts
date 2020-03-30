import { Inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';

import { FeatureHttpService } from './feature-http.service';
import { FeatureToggleModel } from '../models/feature-toggle.model';
import { FEATURE_TOGGLE_CONFIG_TOKEN } from '../feature-toggle-config.token';
import { FeatureToggleConfig } from '../models/feature-toggle-config.model';


interface FeatureResponse {
  data: FeatureToggleModel;
}

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
    this.cacheUpdate();
  }
  public getFeature(featureName: string): Observable<boolean> {
    if (this.featureToggleDataConfig) {
      return of(this.featureToggleDataConfig[featureName] as boolean);
    }
    return this.initCache().pipe(map((featureToggleDataConfig) => {
      return featureToggleDataConfig.data[featureName] as boolean;
    }));
  }
  private cacheUpdate() {
    const period = this.featureToggleConfig.cachePeriod;
    if (period) {
      timer(0, period)
        .subscribe(() => {
          this.initCache().subscribe();
        });
    }
  }
  private initCache(): Observable<any> {
    return this.httpFeature.getConfig().pipe(
      tap((config: FeatureResponse) => {
        this.featureToggleDataConfig = config.data;
      })
    );
  }
}
