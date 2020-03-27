import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FeatureToggleModule, FEATURE_TOGGLE_CONFIG_TOKEN, FeatureToggleConfig, FeatureToggleService } from 'sdk';

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
        envKey: '71c85bfada09695dd5bfbd2669fa18678954f1dbf5b341b0',
      })
    })
  ],
  providers: [FeatureToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
