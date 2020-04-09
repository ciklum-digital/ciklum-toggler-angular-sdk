import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  FeatureToggleModule,
  FEATURE_TOGGLE_CONFIG_TOKEN,
  FeatureToggleConfig,
  FeatureToggleService,
} from '@ciklum-toggler/angular-sdk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatureToggleModule.forRoot({
      provide: FEATURE_TOGGLE_CONFIG_TOKEN,
      useFactory: (): FeatureToggleConfig => ({
        toggleUrl: 'http://svc.feature-toggle.pp.ciklum.com/api/external-systems-access',
        envKey: '43fa7131747d84bec609d2c90f024878cbc7356f6b9c13fa',
      })
    })
  ],
  providers: [FeatureToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
