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
    TopbarComponent
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
