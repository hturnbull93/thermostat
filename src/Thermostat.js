class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.powerSaving = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.PS_ON_MAX_TEMP = 25;
    this.PS_OFF_MAX_TEMP = 32;
    this.LOW_USAGE_TEMP = 18;
    this.HIGH_USAGE_TEMP = 25;
  }
  up() {
    if(this.powerSaving && this.temperature < this.PS_ON_MAX_TEMP){
      this.temperature++;
    } else if(!this.powerSaving && this.temperature < this.PS_OFF_MAX_TEMP) {
      this.temperature++;
    };
  };

  down() {
    if(this.temperature > this.MINIMUM_TEMPERATURE){
      this.temperature--;
    }
  };

  togglePowerSaving() {
    this.powerSaving = !this.powerSaving;
  };

  reset() {
    this.temperature = this.DEFAULT_TEMP;
  };

  energyUsage() {
    switch (true) {
      case this.temperature < this.LOW_USAGE_TEMP:
        return "low-usage"
      case this.temperature >= this.HIGH_USAGE_TEMP:
        return "high-usage"
      default:
        return "medium-usage"
    }
  }

  powerSavingStatus() {
    if (this.powerSaving) {
      return "On"
    } else {
      return "Off"
    }
  }
};

