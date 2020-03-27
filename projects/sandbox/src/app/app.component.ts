import { Component, OnInit } from '@angular/core';
import { FeatureToggleService } from 'sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly featureToggleName = 'FF_FT_32_POPUP_BUTTON';
  title = 'sandbox';
  constructor(private featureToggleService: FeatureToggleService) {

  }
  ngOnInit(): void {
    this.featureToggleService.isEnabled(this.featureToggleName)
      .subscribe((isEnabled) => {
        console.log('feature is enabled>>>', isEnabled);
      });
  }
}
