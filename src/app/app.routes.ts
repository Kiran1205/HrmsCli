import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Form16Component } from './form16/form16.component';
import { DdousersComponent } from './ddousers/ddousers.component';
import { ProvisionalsComponent } from './provisionals/provisionals.component';
import { ItconfigurationsComponent } from './itconfigurations/itconfigurations.component';
import { TaxcomputeComponent } from './taxcompute/taxcompute.component';
import { DocumentsComponent } from './documents/documents.component';
import { HrmsinfoComponent } from './hrmsinfo/hrmsinfo.component';


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
      path :'ddouser',
      component:DdousersComponent
    },
    {
      path:'provisionals',
      component:ProvisionalsComponent
    },
    {
      path:'form16',
      component: Form16Component
    },
    {
      path:'itconfig',
      component:ItconfigurationsComponent
    },
    {
      path:'taxcompute',
      component:TaxcomputeComponent
    },
    {
      path:'documents',
      component:DocumentsComponent
    },
    {
      path:'hrms',
      component :HrmsinfoComponent
    }
];
