var thermostat = new Thermostat();

$(function () {

  $('#temperature').html(thermostat.temperature);
  $('#power-saving').html(thermostat.powerSavingStatus());
  $('#energy-usage').html(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());


  $("#up").click(function () {
    thermostat.up();
    updateTemp();
  });

  $("#down").click(function () {
    thermostat.down();
    updateTemp();
  });

  $("#reset").click(function () {
    thermostat.reset();
    updateTemp();
  });

  $("#toggle-power-saving").click(function () {
    thermostat.togglePowerSaving();
    $('#power-saving').html(thermostat.powerSavingStatus());
  });

  var updateTemp = () => {
    $('#temperature').html(thermostat.temperature);
    $('#energy-usage').html(thermostat.energyUsage());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
