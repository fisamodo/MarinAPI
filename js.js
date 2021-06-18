var input = document.querySelector('.input_text');
var input1 = document.querySelector('.input_desc');

var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=361a26434899ac82d3afdd691b3f702f')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+input1.value;
  temp.innerHTML = "Current temperature in Zagreb is - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})