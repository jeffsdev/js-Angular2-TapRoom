System.register(['angular2/core', './keg.model', './keg.component', './new-keg.component', './edit-keg-details.component', './empty.pipe'], function(exports_1, context_1) {
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
    var core_1, keg_model_1, keg_component_1, new_keg_component_1, edit_keg_details_component_1, empty_pipe_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            },
            function (keg_component_1_1) {
                keg_component_1 = keg_component_1_1;
            },
            function (new_keg_component_1_1) {
                new_keg_component_1 = new_keg_component_1_1;
            },
            function (edit_keg_details_component_1_1) {
                edit_keg_details_component_1 = edit_keg_details_component_1_1;
            },
            function (empty_pipe_1_1) {
                empty_pipe_1 = empty_pipe_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                    this.filterEmpty = "all";
                    this.onKegSelect = new core_1.EventEmitter();
                }
                KegListComponent.prototype.createKeg = function (_a) {
                    var name = _a[0], brand = _a[1], price = _a[2], alcoholContent = _a[3];
                    var newKeg = new keg_model_1.Keg(name, brand, price, alcoholContent, this.kegList.length);
                    this.kegList.push(newKeg);
                };
                KegListComponent.prototype.onChange = function (filterOption) {
                    this.filterEmpty = filterOption;
                };
                KegListComponent.prototype.isExpensive = function (currentKeg) {
                    if (currentKeg.price > 5) {
                        return "expensivePint";
                    }
                };
                KegListComponent.prototype.isLow = function (currentKeg) {
                    if (currentKeg.pints <= 25) {
                        return "kegIsLow";
                    }
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        outputs: ['onKegSelect'],
                        pipes: [empty_pipe_1.EmptyPipe],
                        directives: [keg_component_1.KegComponent, new_keg_component_1.NewKegComponent, edit_keg_details_component_1.EditKegDetailsComponent],
                        template: "\n  <header>\n    <h1>Pint Me!</h1>\n    <a href=\"https://github.com/jeffsdev/js-Angular2-TapRoom\" target=\"_blank\">View Documentation on GitHub</a>\n    <div class=\"filter\">\n      <span>Filter Kegs:</span>\n      <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n        <option value=\"all\">Kegs with Pints</option>\n        <option value=\"low\">Almost empty kegs</option>\n        <option value=\"empty\">Empty Kegs</option>\n      </select>\n    </div>\n    <new-keg (onSubmitNewKeg)=\"createKeg($event)\"></new-keg>\n  </header>\n  <div class=\"keg-array\">\n    <keg-display *ngFor=\"#currentKeg of kegList | empty:filterEmpty\"\n      [keg]=\"currentKeg\" [priceyPintClass]=\"isExpensive(currentKeg)\" [lowKegClass]=\"isLow(currentKeg)\" >\n    </keg-display>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
        }
    }
});
//# sourceMappingURL=keg-list.component.js.map