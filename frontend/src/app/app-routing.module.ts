import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './components/_layout/app-layout/app-layout.component';


import { HomeComponent } from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component';
import {SigninComponent} from './components/signin/signin.component';

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
    { path: 'login', component: SigninComponent},
    { path: 'register', component: SignupComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
