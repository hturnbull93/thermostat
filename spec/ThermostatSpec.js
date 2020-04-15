describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it(" temperature should be twenty by default", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it(' up will increase the temperature by one', () => {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  
  it(' up will decrease the temperature by one', () => {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it(' temperature cannot be decreased below 10', () => {
    for (let index = 0; index < 12; index++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('power saving mode should be on by default', () => {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('temperature should not go above 25 degrees when power saving mode is on', () => {
    thermostat.powersaving
    for (let index = 0; index < 6; index++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25);
  });

  it('temperature should not go above 32 degress when power saving mode is off', () => {
    thermostat.togglePowerSaving();
    for (let index = 0; index < 13; index++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(32);
  });

  it('should be able to reset the temperature to 20', () => {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  });

  it('should be able to tell me if the energy usage is low', () => {
    for (let index = 0; index < 3; index++) {
      thermostat.down();
    };
    expect(thermostat.energyUsage()).toEqual("low-usage")
  });
  
  it('should be able to tell me if the energy usage is mid-level', () => {
    expect(thermostat.energyUsage()).toEqual("medium-usage")
  });

  it('should be able to tell me if the energy usage is high', () => {
    for (let index = 0; index < 5; index++) {
      thermostat.up();
    };
    expect(thermostat.energyUsage()).toEqual("high-usage")
  });

}) 