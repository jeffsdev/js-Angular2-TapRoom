
import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Pint Me</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>

  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Workhorse IPA", "Laurelwood", 5, 7.5, 0),
      new Keg("Mirror Pond", "Deschutes", 4, 6, 1),
      new Keg("Crush Cucumber Sour", "10 Barrel", 6.5, 5, 2),
      new Keg("Workhorse IPA", "Laurelwood", 5, 7.5, 3),
      new Keg("Mirror Pond", "Deschutes", 4, 6, 4),
      new Keg("Crush Cucumber Sour", "10 Barrel", 6.5, 5, 5),
      new Keg("Workhorse IPA", "Laurelwood", 5, 7.5, 6),
      new Keg("Mirror Pond", "Deschutes", 4, 6, 7),
      new Keg("Crush Cucumber Sour", "10 Barrel", 6.5, 5, 8),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
