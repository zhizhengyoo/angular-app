import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home.component';
import { JournalComponent } from '../journal/journal.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '', component: HomeContentComponent,
  }, {
    path: 'journal',
    component: JournalComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
