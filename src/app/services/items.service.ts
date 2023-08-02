import { Injectable } from '@angular/core';
import { Iitems } from '../interfaces/iitems';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Iitems[] = [
    {id: 1, type: "books"},
    {id: 2, type: "notebooks"},
    {id: 3, type: "pens"},
    {id: 4, type: "folders"},
  ]
  constructor() { }

  getItems(){
    return this.items;
  }
}