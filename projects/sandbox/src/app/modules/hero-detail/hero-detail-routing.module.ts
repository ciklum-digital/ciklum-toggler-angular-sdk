import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { FeatureToggleGuard } from '@ciklum-toggler/angular-sdk';

const routes: Routes = [
  { path: ':id', component: HeroDetailComponent,
    data: {
      feature: 'FF_SHOW_DETAILS'
    },
    canActivate: [FeatureToggleGuard]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HeroDetailRoutingModule {}
