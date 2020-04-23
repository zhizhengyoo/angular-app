import {Component} from '@angular/core';
import {MENU_LIST} from './core/auth-menu.model';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';
  public menuList = MENU_LIST;
  public selectedMenuIndex: number;
  private _subscriptions: Subscription[] = [];

  constructor(private _router: Router) {
    this._subscriptions.push(
      _router.events.pipe(filter((events) => events instanceof NavigationEnd))
      .subscribe((data: NavigationEnd) => {
        const { url } = data;
        if (url) {
          this.selectedMenuIndex = this.menuList.findIndex((data) => data && url.indexOf(data.path) === 0)
        } else {
          this.selectedMenuIndex = 0;
        }
      })
    )
  }

  public hasChildren(menu: { children: string | any[]; }): boolean {
    return Boolean(menu && menu.children && menu.children.length);
  }
}
