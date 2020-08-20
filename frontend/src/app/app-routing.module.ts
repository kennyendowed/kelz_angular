import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './components/_layout/app-layout/app-layout.component';


import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [

    //Site routes goes here
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'}
          // { path: 'about', component: AboutComponent },
          // { path: 'test/:id', component: AboutComponent }
        ]
    },

    // App routes goes here here
    {
        path: '',
        component: AppLayoutComponent,
        children: [
          // { path: 'dashboard', component: DashboardComponent },
          // { path: 'profile', component: ProfileComponent }
        ]
    },

    //no layout routes
    // { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
