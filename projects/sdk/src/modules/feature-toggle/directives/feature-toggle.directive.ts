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
  selector: '[featureToggle]'
})
export class FeatureToggleDirective implements OnInit {

  @Input('featureToggle') public featureName: string;
  constructor(
    private featureToggleService: FeatureToggleService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetection: ChangeDetectorRef,
  ) {}

  public ngOnInit() {
    if (!this.featureName) {
      throw new Error('Attribute `featureToggle` should not be null or empty');
    }
    this.shouldRender();
  }

  private shouldRender() {
    if (this.featureToggleService.isEnabled(this.featureName)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    this.changeDetection.detectChanges();
  }

}
