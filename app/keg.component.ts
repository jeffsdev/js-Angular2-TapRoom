import { Component,EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';


@Component({
    selector: 'keg-display',
    inputs: ['keg', 'priceyPintClass', 'lowKegClass'],
    outputs: ['onKegSelect'],
    directives: [EditKegDetailsComponent],
    template: `
    <div class="kegContainer {{ priceyPintClass }} ">
      <span class="keg-id">{{ (keg.id + 1) }}</span>
      <div class="keg-info">
        <div class="keg-meta">
          <h2 class="beer-name">{{ keg.name + " " + "$" + keg.price}}</h2>
          <h3 class="brewery-name">{{ keg.brand }}</h3>
          <p class="alchohol-content">{{ "ABV " + keg.alcoholContent + "%" }}</p>
        </div>

          <p class="pintInfo {{ lowKegClass }} ">{{ "Pints: " + keg.pints  }}</p>
          <button class="buy-btn" (click)="buyPint(keg) ">Buy a pint!</button>

          <button class="edit-btn"(click)="editInfo(keg)">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 width="100%" height="100%" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
            <path d="M462,280.72v-49.44l-46.414-16.48c-3.903-15.098-9.922-29.343-17.675-42.447l0.063-0.064l21.168-44.473l-34.96-34.96
            	l-44.471,21.167l-0.064,0.064c-13.104-7.753-27.352-13.772-42.447-17.673L280.72,50h-49.44L214.8,96.415
            	c-15.096,3.9-29.343,9.919-42.447,17.675l-0.064-0.066l-44.473-21.167l-34.96,34.96l21.167,44.473l0.066,0.064
            	c-7.755,13.104-13.774,27.352-17.675,42.447L50,231.28v49.44l46.415,16.48c3.9,15.096,9.921,29.343,17.675,42.447l-0.066,0.064
            	l-21.167,44.471l34.96,34.96l44.473-21.168l0.064-0.063c13.104,7.753,27.352,13.771,42.447,17.675L231.28,462h49.44l16.48-46.414
            	c15.096-3.903,29.343-9.922,42.447-17.675l0.064,0.063l44.471,21.168l34.96-34.96l-21.168-44.471l-0.063-0.064
            	c7.753-13.104,13.771-27.352,17.675-42.447L462,280.72z M256,338.4c-45.509,0-82.4-36.892-82.4-82.4c0-45.509,36.891-82.4,82.4-82.4
            	c45.509,0,82.4,36.891,82.4,82.4C338.4,301.509,301.509,338.4,256,338.4z"/>
            </svg>
          </button>

        <edit-keg-details *ngIf="show" [keg]="selectedKeg"></edit-keg-details>
      </div>
    </div>
     `
})
export class KegComponent {
  public show: boolean = false;
  public keg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  buyPint(clickedKeg: Keg): void{
    if(clickedKeg.pints <= 0) {
      clickedKeg.pints === 0;
    } else {
      clickedKeg.pints -= 1;
  }
}
  editInfo(clickedKeg: Keg) :void {
    this.show = !this.show;
    console.log(this.selectedKeg);
    this.selectedKeg = clickedKeg;
    // this.onKegSelect.emit(clickedKeg);
  }

}

// if clickedKeg.pints <= 120 {
//
// }
