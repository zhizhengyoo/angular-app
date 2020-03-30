import { Component, OnInit } from '@angular/core';
import { MENU_LIST } from 'src/app/core/auth-menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menuList = MENU_LIST;
  
  constructor() { }

  ngOnInit(): void {
  }

  
  public hasChildren(menu: { children: string | any[]; }): boolean {
    return Boolean(menu && menu.children && menu.children.length);
  }

}
