(function(){
  loadOptions();
  submitHandler();
})();

function submitHandler(){
  $("#submitButton").on("click", function(){
      var return_to = getQueryParam('return_to', 'pebblejs://close#');
      document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigureData()));
  });
}

function loadOptions() {
  
  var $backgroundColorPicker = $("#backgroundColorPicker");
  var $tickColorPicker = $("#tickColorPicker");
  var $hourColorPicker = $("#hourColorPicker");
  var $minuteColorPicker = $("#minuteColorPicker");
  var $dotColorPicker = $("#dotColorPicker");
  var $dateColorPicker = $("#dateColorPicker");
  var $bluetoothVibesCheckbox = $("#bluetoothVibesCheckbox");

  if (localStorage.backgroundColor) {
    $backgroundColorPicker[0].value = localStorage.backgroundColor;
    $tickColorPicker[0].value = localStorage.tickColor;
    $hourColorPicker[0].value = localStorage.hourColor;
    $minuteColorPicker[0].value = localStorage.minuteColor;
    $dotColorPicker[0].value = localStorage.dotColor;
    $dateColorPicker[0].value = localStorage.dateColor;
    $bluetoothVibesCheckbox[0].checked = localStorage.bluetoothVibes === "true";
  }
}

function getAndStoreConfigureData(){

  var $backgroundColorPicker = $("#backgroundColorPicker");
  var $tickColorPicker = $("#tickColorPicker");
  var $hourColorPicker = $("#hourColorPicker");
  var $minuteColorPicker = $("#minuteColorPicker");
  var $dotColorPicker = $("#dotColorPicker");
  var $dateColorPicker = $("#dateColorPicker");
  var $bluetoothVibesCheckbox = $("#bluetoothVibesCheckbox");

  var options = {
    backgroundColor: $backgroundColorPicker.val(),
    tickColor: $tickColorPicker.val(),
    hourColor: $hourColorPicker.val(),
    minuteColor: $minuteColorPicker.val(),
    dotColor: $dotColorPicker.val(),
    dateColor: $dateColorPicker.val(),
    bluetoothVibes: $bluetoothVibesCheckbox[0].checked,
  }

  localStorage.backgroundColor = options.backgroundColor;
  localStorage.tickColor = options.tickColor;
  localStorage.hourColor = options.hourColor;
  localStorage.minuteColor = options.minuteColor;
  localStorage.dotColor = options.dotColor;
  localStorage.dateColor = options.dateColor;
  localStorage.bluetoothVibes = options.bluetoothVibes;

  console.log("Got options " + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}