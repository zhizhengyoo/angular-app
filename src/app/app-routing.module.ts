import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JournalComponent } from './pages/journal/journal.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'journal',
  component: JournalComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
