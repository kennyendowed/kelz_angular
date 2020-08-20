import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/_layout/navbar/navbar.component';
import { AppHeaderComponent } from './components/_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './components/_layout/site-header/site-header.component';
import { SiteFooterComponent } from './components/_layout/site-footer/site-footer.component';
import { AppFooterComponent } from './components/_layout/app-footer/app-footer.component';
import { AppLayoutComponent } from './components/_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './components/_layout/site-layout/site-layout.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/_layout/sidebar/sidebar.component';
import { TopbarComponent } from './components/_layout/topbar/topbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppHeaderComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    AppFooterComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
