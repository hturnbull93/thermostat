describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it(" temperature should be twenty by default", function() {
    expect(thermostat.temperature).toEqual(20);
  });
  
})