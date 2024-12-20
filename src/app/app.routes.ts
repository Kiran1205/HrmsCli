import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Form16Component } from './form16/form16.component';


export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component: DashboardComponent
    },
    {
      path:'form16',
      component: Form16Component
  }
];
