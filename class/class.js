class Car {
  constructor(manufacturer){
    this.manufacturer = manufacturer;
  }
  drive(){
    console.log(this.toString() + ': drive');
  }
  toString(){
    return this.manufacturer;
  }
  stop(){
    console.log(this.toString() + ': stop')
  }
}

class Audi extends Car {
  constructor(model = ''){
    super('Audi');
    this.model = model;
  }
  toString(){
    return this.manufacturer+ ' ' + this.model;
  }
}

let c = new Car('BMW');
c.drive();
c.stop();

let a = new Audi('A8');
a.drive();
a.stop();