
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { FeatureToggleService } from '../services/feature-toggle.service';

@Injectable({ providedIn: 'root' })
export class FeatureToggleCanLoad implements CanLoad {
  constructor(private featureToggleService: FeatureToggleService) {
  }

  canLoad(route: Route): boolean {
    return this.featureToggleService.isEnabled(route.data.feature);
  }
}
