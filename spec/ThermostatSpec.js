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
  
}) 