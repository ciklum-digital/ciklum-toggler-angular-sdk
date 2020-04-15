import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '~shared/services/in-memory-data.service';
import { MessagesComponent } from '~shared/modules/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FeatureToggleModule,
  FEATURE_TOGGLE_CONFIG_TOKEN,
  FeatureToggleConfig,
} from '@ciklum-toggler/angular-sdk';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    FeatureToggleModule.forRoot({
      provide: FEATURE_TOGGLE_CONFIG_TOKEN,
      useFactory: (): FeatureToggleConfig => ({
        toggleUrl: 'http://svc.feature-toggle.pp.ciklum.com/api/external-systems-access',
        envKey: '571ec3631d118b639965c152d5bfda4983c4cbeb260aec3a',
      })
    })
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
