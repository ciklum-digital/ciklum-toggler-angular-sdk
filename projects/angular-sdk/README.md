# @ciklum-toggler/angular-sdk

@ciklum-toggler/angular-sdk is easy way to integrate your angular application with ciklum toggler feature flags provider 

## Getting started

* Run `npm i -S @ciklum-toggler/angular-sdk` or `yarn add @ciklum-toggler/angular-sdk` to install module as dependency
* Import components from module to your app.module (root)
```
import {
     FeatureToggleModule,
     FEATURE_TOGGLE_CONFIG_TOKEN,
     FeatureToggleConfig,
   } from '@ciklum-toggler/angular-sdk';
```
* Configure module settings
    * add module to imports in the @NgModule
    * add value for `toggleUrl` -  path to your instance of **Ciklum Toggler** and api endpoint mostly it's `/api/external-systems-access`
    * add value for `envKey` - sdk token for your environment
```
imports: [
    ...
    FeatureToggleModule.forRoot({
      provide: FEATURE_TOGGLE_CONFIG_TOKEN,
      useFactory: (): FeatureToggleConfig => ({
        toggleUrl: '${path-to-your-instance}/api/external-systems-access',
        envKey: 'unique-env-sdk-key',
      })
    })
    ...
  ],
```

## Usage
### Directives
*Example*

```

<h2 *featureToggle="featureToggleName">FF is enabled</h2>
<h2 *featureToggleWhenDisabled="featureToggleName">FF when disabled</h2>

```

### Service

*Example*

Inject service to providers in your module.

```
@NgModule({
  declarations: [
  ...
  providers: [FeatureToggleService],
  ...
})
```
Import service where you are going to use it

```
import { FeatureToggleService } from '@ciklum-toggler/angular-sdk';

```

Usage service in your code

```
export class MyComponent implements OnInit {
  public readonly featureToggleName = 'FEATURE_NAME';
  constructor(private featureToggleService: FeatureToggleService) {

  }
  ngOnInit(): void {
    this.featureToggleService.isEnabled(this.featureToggleName)
      .subscribe((isEnabled) => {
        ...your implementation here...
      });
  }
}

```

### CanActivateGuard

* provide data with feature name to you route
* add FeatureGuard to you route

```
const moduleRoutes: Routes = [
    {
        path: RUTER_PATH,
        component: 'MyComponent',
        data: {
            feature: string, //-ff name
        },
        canActivate: [FeatureGuard]
    }
]
```

### CanLoadGuard

* provide data with feature name to you route
* add FeatureLoadGuard to you route

```
const moduleRoutes: Routes = [
    {
        path: RUTER_PATH,
        component: 'MyComponent',
        data: {
            feature: string, //-ff name
        },
        canLoad: [FeatureLoadGuard]
    }
]
```

## API

* Directives
    * featureToggle - render layout when feature is enabled
    * featureToggleWhenDisabled - render layout when feature is disabled
* Service
    * FeatureToggleService.isEnabled - check if feature is enabled and return Observable<boolean>, unsubscription isn't needed
* Guards
    * CanActivateGuard - `FeatureGuard`
    * CanLoadGuard - `FeatureLoadGuard`
