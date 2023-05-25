function convertercelsius() {
  var celsiusin = document.getElementById("celsius");
  var fahrenheitin = document.getElementById("fahrenheit");
  var kelvinin = document.getElementById("kelvin");

  var celsius = parseFloat(celsiusin.value)

  var fahrenheit = celsiusfah(celsius);
  fahrenheitin.value = fahrenheit.toFixed(2)

  var kelvin = celsiuskel(celsius);
  kelvinin.value = kelvin.toFixed(2)
}

function converterfahrenheit() {
  var celsiusin = document.getElementById("celsius");
  var fahrenheitin = document.getElementById("fahrenheit");
  var kelvinin = document.getElementById("kelvin");

  var fahrenheit = parseFloat(fahrenheitin.value)

  var celsius = fahrenheitcel(fahrenheit);
  celsiusin.value = celsius.toFixed(2)

  var kelvin = fahrenheitkel(fahrenheit);
  kelvinin.value = kelvin.toFixed(2)
}

function converterkelvin() {
  var celsiusin = document.getElementById("celsius");
  var fahrenheitin = document.getElementById("fahrenheit");
  var kelvinin = document.getElementById("kelvin");

  var kelvin = parseFloat(kelvinin.value)

  var celsius = kelvincel(kelvin); 
  celsiusin.value = celsius.toFixed(2)

  var fahrenheit = kelvinfah(kelvin);
  fahrenheitin.value = fahrenheit.toFixed(2)
}

function celsiusfah(celsius) {
  var fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function celsiuskel(celsius) {
  var kelvin = celsius + 273.15;
  return kelvin;
}

function fahrenheitcel(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

function fahrenheitkel(fahrenheit) {
  var kelvin = (fahrenheit + 459.67) * 5 / 9;
  return kelvin;
}

function kelvincel(kelvin) {
  var celsius = kelvin - 273.15;
  return celsius;
}

function kelvinfah(kelvin) {
  var fahrenheit = (kelvin * 9 / 5) - 459.67;
  return fahrenheit;
}

function restart() {
  location.reload();
}

function corbodycel() {
  input = document.getElementById("celsius");
  var valor = input.value;
  
  var blue = valor <= 0 ? 255 : 255 - ((valor - 1) * (255 / 39));

  var red = valor >= 40 ? 255 : (valor - 1) * (255 / 40); 

  var cor = `rgb(${red}, 0, ${blue})`;

  document.body.style.backgroundColor = cor;
}

function corbodyfah() {
  input = document.getElementById("fahrenheit");
  var valor = input.value;

  var blue = valor <= 32 ? 255 : 255 - ((valor - 32) * (255 / 72));

  var red = valor >= 104 ? 255 : (valor - 32) * (255 / 72); 

  var cor = `rgb(${red}, 0, ${blue})`;

  document.body.style.backgroundColor = cor;
}

function corbodykel() {
  input = document.getElementById("kelvin");
  var valor = input.value;

  var blue = valor <= 273 ? 255 : 255 - ((valor - 273) * (255 / 40));

  var red = valor >= 313 ? 255 : (valor - 273) * (255 / 40); 

  var cor = `rgb(${red}, 0, ${blue})`;

  document.body.style.backgroundColor = cor;
}
