console.log('Json and Ajax working');

//Test jquery
$(document).ready(function(){
  $('body').click(function(){
    $(this).css('color','blue');
  });


//Javascript data array of objects
// var jsData = [
//   {
//     name : 'Peter',
//     age  :  50
//   },
//   {
//     name : 'John',
//     age  :  25
//   }
// ];
//
// console.log(jsData);

//Displaying js objects in browser
// var i;
// for(i = 0; i < jsData.length; i++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsData[i].name + ' is ' + jsData[i].age + ' years old</h1>';
// }
//
// var jsonData = [
//   {
//     "name" : "Lucy",
//     age  :  12
//   },
//   {
//     "name" : "Mark",
//     age  :  77
//   }
// ];
//
// console.log(jsonData);

//Displaying json objects in browser
// var j;
// for(j = 0; j < jsonData.length; j++){
// document.getElementById('result').innerHTML +=
// '<h1>' + jsonData[j].name + ' is ' + jsonData[j].age + ' years old </h1>';
// }
//
// //Retrieving json data from external file.
//
// var person = JSON.parse(myData);
// console.log(person);
//
// var k;
// for(k = 0; k < person.length; k++){
// document.getElementById('result').innerHTML +=
// '<h1>' + person[k].name + ' is ' + person[k].age + ' years old </h1>';
// }


//Ajax method

$.ajax({
  url: 'https://my.api.mockaroo.com/plant.json?key=4503c8e0',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i = 0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="container m-2 mx-2 card col col-sm-6 col-md-3 col-lg-3">' +
  '<img src="' + data[i].image + '" class="plant_img" alt="plant">' +
  '<div class="card-body">' +
    '<h5 class="card-title">Mockaroo APIs</h5>' +
    '<p class="card-text">' + data[i].id + '</p>' +
    '<p class="card-text">' + data[i].plant_name + '</p>' +
    '<p class="card-text">' + data[i].scientific_name + '</p>' +
    '<p class="card-text">' + data[i].plant_family + '</p>' +
  '</div>'
'</div>'
    }
  }, //Success ends
  error: function(){
    console.log('error');
  }
}); // Ajax ending





}); // Document .ready
