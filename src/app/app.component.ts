import { Component } from '@angular/core';
import { MENU_LIST } from './core/auth-menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public menuList = MENU_LIST;

  public hasChildren(menu: { children: string | any[]; }): boolean {
    return Boolean(menu && menu.children && menu.children.length);
  }
}
