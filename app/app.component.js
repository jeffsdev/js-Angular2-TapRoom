System.register(['angular2/core', './keg-list.component', './keg.model'], function(exports_1, context_1) {
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
    var core_1, keg_list_component_1, keg_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_list_component_1_1) {
                keg_list_component_1 = keg_list_component_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                /*For Kegs[]: Name, Brewery, Price, ABV%, ID*/
                function AppComponent() {
                    this.kegs = [
                        new keg_model_1.Keg("Mirror Pond", "Deschutes", 4, 6, 0),
                        new keg_model_1.Keg("Dragonstooth Stout", "Elysian", 7, 8.1, 1),
                        new keg_model_1.Keg("Opacus Oatmeal Stout", "Stormbreaker", 7.5, 5, 2),
                        new keg_model_1.Keg("Mirror Pond", "Deschutes", 4, 6, 3),
                        new keg_model_1.Keg("Black-Briar Mead", "Black-Briar Meadery", 10, 12.5, 4),
                        new keg_model_1.Keg("Skooma", "Elsweyr", 5, 11, 5),
                        new keg_model_1.Keg("Nightowl", "Elysian", 5, 6.7, 6),
                        new keg_model_1.Keg("Workhorse IPA", "Laurelwood", 5.5, 7.5, 7),
                        new keg_model_1.Keg("Organic Survival 7-Grain Stout", "Hopworks", 6.5, 5, 8),
                    ];
                }
                AppComponent.prototype.kegWasSelected = function (clickedKeg) {
                    console.log('parent', clickedKeg);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [keg_list_component_1.KegListComponent],
                        template: "\n    <div class=\"container\">\n      <keg-list\n        [kegList]=\"kegs\"\n        (onKegSelect)=\"kegWasSelected($event)\">\n      </keg-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map