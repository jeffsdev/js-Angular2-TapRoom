import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="edit-keg-form">
    <h2>Edit Keg</h2>
    <label>Name:</label>
    <input [(ngModel)]="keg.name" placeholder="Keg Name">
    <label>Brewery:</label>
    <input [(ngModel)]="keg.brand" placeholder="Keg Brand">
    <label>Price ( $/pint ):</label>
    <input [(ngModel)]="keg.price" type="number" placeholder="Price per pint" min="0" step="0.25">
    <label>ABV%:</label>
    <input [(ngModel)]="keg.alcoholContent" type="number" placeholder="Alcohol Content" step="0.1" min="0">
    <label>Pints Remaining:</label>
    <input [(ngModel)]="keg.pints" type="number" placeholder="Pints in keg" min="1" max="120" step="1">
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
