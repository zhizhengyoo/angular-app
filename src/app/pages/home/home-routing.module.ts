import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';


const routes: Routes = [{
  path: '',
  component: HomeContentComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
