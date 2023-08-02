import { Component } from '@angular/core';
import { ItemsService } from './services/items.service';
import { Iitems } from './interfaces/iitems';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Store';
  items: Iitems[];

  constructor(private itemServices: ItemsService){  //method
    this.items = itemServices.getItems();
  }
}
