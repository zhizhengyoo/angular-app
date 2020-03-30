import {Component, OnInit} from '@angular/core';
import {MENU_LIST} from 'src/app/core/auth-menu.model';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  public menuList = MENU_LIST;

  constructor() {
  }

  ngOnInit(): void {
  }

}
