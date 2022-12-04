import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P404Component } from './core/pages/p404/p404.component';
import { LoginFormComponent } from './auth/pages/login-form/login-form.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./youtube/pages/main-page/main-page.module').then((m) => m.MainPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'video/:id',
    loadChildren: () =>
      import('./youtube/pages/detailed-info-page/detailed-info-page.module').then((m) => m.DetailedInfoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'customVideo/:id',
    loadChildren: () =>
      import('./youtube/pages/custom-detailed-info/custom-detailed-info-page.module').then(
        (m) => m.CustomDetailedInfoModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./shared/components/create-card/create-card.module').then((m) => m.CreateCardModule),
    canActivate: [AuthGuard],
  },

  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
