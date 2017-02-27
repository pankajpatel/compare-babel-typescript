'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
  function Car(manufacturer) {
    _classCallCheck(this, Car);

    this.manufacturer = manufacturer;
  }

  _createClass(Car, [{
    key: 'drive',
    value: function drive() {
      console.log(this.toString() + ': drive');
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.manufacturer;
    }
  }, {
    key: 'stop',
    value: function stop() {
      console.log(this.toString() + ': stop');
    }
  }]);

  return Car;
}();

var Audi = function (_Car) {
  _inherits(Audi, _Car);

  function Audi() {
    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Audi);

    var _this = _possibleConstructorReturn(this, (Audi.__proto__ || Object.getPrototypeOf(Audi)).call(this, 'Audi'));

    _this.model = model;
    return _this;
  }

  _createClass(Audi, [{
    key: 'toString',
    value: function toString() {
      return this.manufacturer + ' ' + this.model;
    }
  }]);

  return Audi;
}(Car);

var c = new Car('BMW');
c.drive();
c.stop();

var a = new Audi('A8');
a.drive();
a.stop();