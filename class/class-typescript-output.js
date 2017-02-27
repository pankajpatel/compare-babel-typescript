var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(manufacturer) {
        this.manufacturer = manufacturer;
    }
    Car.prototype.drive = function () {
        console.log(this.toString() + ': drive');
    };
    Car.prototype.toString = function () {
        return this.manufacturer;
    };
    Car.prototype.stop = function () {
        console.log(this.toString() + ': stop');
    };
    return Car;
}());
var Audi = (function (_super) {
    __extends(Audi, _super);
    function Audi(model) {
        if (model === void 0) { model = ''; }
        var _this = _super.call(this, 'Audi') || this;
        _this.model = model;
        return _this;
    }
    Audi.prototype.toString = function () {
        return this.manufacturer + ' ' + this.model;
    };
    return Audi;
}(Car));
var c = new Car('BMW');
c.drive();
c.stop();
var a = new Audi('A8');
a.drive();
a.stop();
