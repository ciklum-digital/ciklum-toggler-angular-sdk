import { Component, OnInit } from '@angular/core';

import { Hero } from '~shared/models/hero';
import { HeroService } from '~shared/services/hero.service';
import { FeatureToggleService } from '@ciklum-toggler/angular-sdk';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  public topSearchFeature = 'FF_TOP_SEARCH';
  public moreTopHeroes = 'FF_MORE_TOP_HEROES';

  constructor(private heroService: HeroService,
              private featureService: FeatureToggleService) { }

  public ngOnInit() {
    this.getHeroes();
  }

  private getHeroes(): void {
    const resource$ = forkJoin([
      this.heroService.getHeroes(),
      this.featureService.isEnabled(this.moreTopHeroes)
    ]);
    resource$
      .subscribe(([heroes, isEnabled]) => {
        let heroCount = 0;
        if (isEnabled) {
          heroCount = 8;
        } else {
          heroCount = 4;
        }
        if (heroes.length > heroCount) {
          this.heroes = heroes.slice(0, heroCount);
        } else {
          this.heroes = heroes;
        }
      });
  }
}
