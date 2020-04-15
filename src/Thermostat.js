class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }
  up() {
    this.temperature++;
  };
  down() {
    if(this.temperature > 10){
      this.temperature--;
    }
  };

}

