import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { FeatureToggleModule, FeatureToggleService } from '@ciklum-toggler/angular-sdk';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FeatureToggleModule,
  ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers: [
    FeatureToggleService
  ]
})
export class DashboardModule {

}
