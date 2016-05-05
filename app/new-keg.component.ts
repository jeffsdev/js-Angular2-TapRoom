import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form" >
    <h2>New Keg</h2>
    <input placeholder="Beer Name" #newName >
    <input placeholder="Beer Brewery" #newBrand>
    <input min="0" step="0.25" type="number" placeholder="Price per Pint" #newPrice>
    <input min="0" type="number" placeholder="Alcohol By Volume %" #newAlcoholContent>

    <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)">Add Keg</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement) {

    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userPrice.value, userAlcoholContent.value]);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcoholContent.value = "";
  }
}

// var expensive = false;
// if(userPrice.value >= 4) {
//   expensive = true;
//   console.log(expensive);
// }
