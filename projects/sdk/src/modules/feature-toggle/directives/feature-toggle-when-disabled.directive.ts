import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { FeatureToggleService } from '../services/feature-toggle.service';

@Directive({
  selector: '[featureToggleWhenDisabled]'
})
export class FeatureToggleWhenDisabledDirective implements OnInit {
  @Input('featureToggleWhenDisabled') public featureName: string;
  constructor(
    private featureToggleService: FeatureToggleService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetection: ChangeDetectorRef,
  ) {}

  public ngOnInit() {
    if (!this.featureName) {
      throw new Error('Attribute `featureToggleWhenDisabled` should not be null or empty');
    }
    this.shouldRender();
  }

  private shouldRender() {
    if (this.featureToggleService.isEnabled(this.featureName)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    this.changeDetection.detectChanges();
  }
}
