import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {

  constructor(
    private cacheService: CacheService,
  ) {
  }

  public isEnabled(featureName: string): Observable<boolean> {
    return this.cacheService.getFeature(featureName);
  }
}
