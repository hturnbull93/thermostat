class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }
  up() {
    if(this.powerSaving && this.temperature <= 24){
      this.temperature++;
    } else if(!this.powerSaving && this.temperature <= 31) {
      this.temperature++;
    };
  };

  down() {
    if(this.temperature > 10){
      this.temperature--;
    }
  };

  togglePowerSaving() {
    this.powerSaving = !this.powerSaving;
  };

  reset() {
    this.temperature = 20;
  };

  energyUsage() {
    if(this.temperature <18){
      return "low-usage"
    } else if(this.temperature > 24) {
      return "high-usage"
    } else {
      return "medium-usage"
    }
  }
};

