import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { MainShellComponent } from './main-shell/main-shell.component';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./create/create.module').then((m) => m.CreateModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainShellRoutingModule {}
