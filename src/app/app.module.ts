import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularComponent} from './pages/tech-study/angular/angular.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
