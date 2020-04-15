var thermostat = new Thermostat();
const TOKEN = '&APPID=eb6ae52da19175e8885ca553f8c4f3e7';
const APIURL = 'http://api.openweathermap.org/data/2.5/forecast?q='
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
  
  $("#select-city").submit(function(event) {
    event.preventDefault();
    var city = $("#current-city").val();
    displayWeather(city);
  });

  var updateTemp = () => {
    $('#temperature').html(thermostat.temperature);
    $('#energy-usage').html(thermostat.energyUsage());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  var displayWeather = (city) => {
    $.get(APIURL + city + TOKEN, function(result) {
      $('#weather-report').html(result.list[0].weather[0].description)
    });
  };
});
