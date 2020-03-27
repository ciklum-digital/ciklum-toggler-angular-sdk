import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { FeatureToggleService } from '../services/feature-toggle.service';

@Injectable({ providedIn: 'root' })
export class FeatureToggleGuard implements CanActivate {
  constructor(private featureToggleService: FeatureToggleService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.featureToggleService.isEnabled(route.data.feature);
  }
}
