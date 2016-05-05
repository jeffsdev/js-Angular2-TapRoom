
import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>

  `
})
export class AppComponent {
  public kegs: Keg[];
  /*For Kegs[]: Name, Brewery, Price, ABV%, ID*/
  constructor(){
    this.kegs = [
      new Keg("Mirror Pond", "Deschutes", 4, 6, 0),
      new Keg("Dragonstooth Stout", "Elysian", 7, 8.1, 1),
      new Keg("Opacus Oatmeal Stout", "Stormbreaker", 7.5, 5, 2),
      new Keg("Mirror Pond", "Deschutes", 4, 6, 3),
      new Keg("Black-Briar Mead", "Black-Briar Meadery", 10, 12.5, 4),
      new Keg("Skooma", "Elsweyr", 5, 11, 5),
      new Keg("Nightowl", "Elysian", 5, 6.7, 6),
      new Keg("Workhorse IPA", "Laurelwood", 5.5, 7.5, 7),
      new Keg("Organic Survival 7-Grain Stout", "Hopworks", 6.5, 5, 8),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
