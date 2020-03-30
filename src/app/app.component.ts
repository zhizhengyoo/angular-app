import {Component} from '@angular/core';
import {MENU_LIST} from './core/auth-menu.model';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'my-app';
  public menuList = MENU_LIST;

}
