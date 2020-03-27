import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FeatureToggleModel } from '../models/feature-toggle.model';
import { FEATURE_TOGGLE_CONFIG_TOKEN } from '../feature-toggle-config.token';
import { FeatureToggleConfig } from '../models/feature-toggle-config.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureHttpService {
  private readonly toggleUrl: string;
  constructor(private httpClient: HttpClient,
              @Inject(FEATURE_TOGGLE_CONFIG_TOKEN) featureToggleConfig: FeatureToggleConfig,
              ) {
    this.toggleUrl = featureToggleConfig.toggleUrl;
  }

  public getConfig(): Observable<FeatureToggleModel> {
    return this.httpClient.get<FeatureToggleModel>(this.toggleUrl);
  }
}
