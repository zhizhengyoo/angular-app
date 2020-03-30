import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeContentComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    HomeComponent,
  ]
//   bootstrap: [AppComponent]
})
export class HomeModule {
}
