import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../interfaces/NavigationItemInterface';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.css']
})
export class NavigationItemsComponent implements OnInit {

  public itemList: NavigationItem[];

  constructor() {
    this.itemList = [];
  }

  ngOnInit(): void {
    this.itemList.push({
      text: 'Get Started',
      cssClass: 'standard',
      onClick: () => { }
    });

    this.itemList.push({
      text: 'Login',
      cssClass: 'default',
      onClick: () => { }
    });

    this.itemList.push({
      text: 'Pricing',
      cssClass: 'normal addMargin',
      onClick: () => { }
    });

    this.itemList.push({
      text: 'Solutions',
      cssClass: 'normal',
      onClick: () => { }
    });

    this.itemList.push({
      text: 'Products',
      cssClass: 'normal',
      onClick: () => { }
    });
  }

}
