System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Keg;
    return {
        setters:[],
        execute: function() {
            Keg = (function () {
                function Keg(name, brand, price, alcoholContent, id) {
                    this.name = name;
                    this.brand = brand;
                    this.price = price;
                    this.alcoholContent = alcoholContent;
                    this.id = id;
                    this.pints = 40;
                }
                return Keg;
            }());
            exports_1("Keg", Keg);
        }
    }
});
//# sourceMappingURL=keg.model.js.map