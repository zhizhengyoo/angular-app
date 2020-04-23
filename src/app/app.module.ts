import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AngularComponent} from './pages/tech-study/angular/angular.component';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';
import { JournalComponent } from './pages/journal/journal.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JournalComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    // RouterModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
