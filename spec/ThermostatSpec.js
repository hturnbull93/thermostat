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

  it('powersaving mode should be on by default', () => {
    expect(thermostat.powerSaving).toEqual(true);
  });

  xit('temperature should not go above 25 degrees when power saving mode is on', () => {
    thermostat.powersaving
    for (let index = 0; index < 6; index++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25);
  });
}) 