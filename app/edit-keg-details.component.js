System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var EditKegDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditKegDetailsComponent = (function () {
                function EditKegDetailsComponent() {
                }
                EditKegDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-keg-details',
                        inputs: ['keg'],
                        template: "\n  <div class=\"edit-keg-form\">\n    <h2>Edit Keg</h2>\n    <label>Name:</label>\n    <input [(ngModel)]=\"keg.name\" placeholder=\"Keg Name\">\n    <label>Brewery:</label>\n    <input [(ngModel)]=\"keg.brand\" placeholder=\"Keg Brand\">\n    <label>Price ( $/pint ):</label>\n    <input [(ngModel)]=\"keg.price\" type=\"number\" placeholder=\"Price per pint\" min=\"0\" step=\"0.25\">\n    <label>ABV%:</label>\n    <input [(ngModel)]=\"keg.alcoholContent\" type=\"number\" placeholder=\"Alcohol Content\" step=\"0.1\" min=\"0\">\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditKegDetailsComponent);
                return EditKegDetailsComponent;
            }());
            exports_1("EditKegDetailsComponent", EditKegDetailsComponent);
        }
    }
});
//# sourceMappingURL=edit-keg-details.component.js.map