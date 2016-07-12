System.register(['angular2/core', './edit-keg-details.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, edit_keg_details_component_1;
    var KegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edit_keg_details_component_1_1) {
                edit_keg_details_component_1 = edit_keg_details_component_1_1;
            }],
        execute: function() {
            KegComponent = (function () {
                function KegComponent() {
                    this.show = false;
                    this.onKegSelect = new core_1.EventEmitter();
                }
                KegComponent.prototype.buyPint = function (clickedKeg) {
                    if (clickedKeg.pints <= 0) {
                        clickedKeg.pints === 0;
                    }
                    else {
                        clickedKeg.pints -= 1;
                    }
                };
                KegComponent.prototype.editInfo = function (clickedKeg) {
                    this.show = !this.show;
                    console.log(this.selectedKeg);
                    this.selectedKeg = clickedKeg;
                };
                KegComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-display',
                        inputs: ['keg', 'priceyPintClass', 'lowKegClass'],
                        outputs: ['onKegSelect'],
                        directives: [edit_keg_details_component_1.EditKegDetailsComponent],
                        template: "\n    <div class=\"kegContainer\">\n      <span class=\"keg-id\">{{ (keg.id + 1) }}</span>\n      <div class=\"keg-info\">\n        <div class=\"keg-meta\">\n          <h2 class=\"beer-name\">{{ keg.name }}</h2>\n          <h3 class=\"brewery-name\">{{ keg.brand }}</h3>\n          <p class=\"alchohol-content\">{{ \"ABV \" + keg.alcoholContent + \"%\" }}</p>\n        </div>\n\n          <p class=\"pintInfo {{ lowKegClass }} \">{{ \"Pints: \" + keg.pints  }} <span class=\"pint-price {{ priceyPintClass }} \">{{ \"$\" + keg.price }}</span></p>\n          <button class=\"buy-btn\" (click)=\"buyPint(keg) \">Buy a Pint!</button>\n\n          <button class=\"edit-btn\"(click)=\"editInfo(keg)\">\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            \t width=\"100%\" height=\"100%\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n            <path d=\"M462,280.72v-49.44l-46.414-16.48c-3.903-15.098-9.922-29.343-17.675-42.447l0.063-0.064l21.168-44.473l-34.96-34.96\n            \tl-44.471,21.167l-0.064,0.064c-13.104-7.753-27.352-13.772-42.447-17.673L280.72,50h-49.44L214.8,96.415\n            \tc-15.096,3.9-29.343,9.919-42.447,17.675l-0.064-0.066l-44.473-21.167l-34.96,34.96l21.167,44.473l0.066,0.064\n            \tc-7.755,13.104-13.774,27.352-17.675,42.447L50,231.28v49.44l46.415,16.48c3.9,15.096,9.921,29.343,17.675,42.447l-0.066,0.064\n            \tl-21.167,44.471l34.96,34.96l44.473-21.168l0.064-0.063c13.104,7.753,27.352,13.771,42.447,17.675L231.28,462h49.44l16.48-46.414\n            \tc15.096-3.903,29.343-9.922,42.447-17.675l0.064,0.063l44.471,21.168l34.96-34.96l-21.168-44.471l-0.063-0.064\n            \tc7.753-13.104,13.771-27.352,17.675-42.447L462,280.72z M256,338.4c-45.509,0-82.4-36.892-82.4-82.4c0-45.509,36.891-82.4,82.4-82.4\n            \tc45.509,0,82.4,36.891,82.4,82.4C338.4,301.509,301.509,338.4,256,338.4z\"/>\n            </svg>\n          </button>\n\n        <edit-keg-details *ngIf=\"show\" [keg]=\"selectedKeg\"></edit-keg-details>\n      </div>\n    </div>\n     "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegComponent);
                return KegComponent;
            }());
            exports_1("KegComponent", KegComponent);
        }
    }
});
//# sourceMappingURL=keg.component.js.map