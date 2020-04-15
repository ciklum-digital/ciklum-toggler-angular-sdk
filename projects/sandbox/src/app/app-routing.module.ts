import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then(m => m.DashboardModule), },
  { path: 'detail', loadChildren: () => import('./modules/hero-detail/hero-detail.module')
      .then(m => m.HeroDetailModule), },
  { path: 'heroes', loadChildren: () => import('./modules/heroes/heroes.module')
      .then(m => m.HeroesModule), },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
