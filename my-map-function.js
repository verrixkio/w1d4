// The function will return a new array based on the results of the callback function
var words = ["ground", "control", "to", "major", "tom"];

function myMap(list, cb) {
  var results = [];
  for (var i = 0; i < list.length; i++) {
  var result = cb(list[i]);
  results.push(result);
    } 
  console.log(results);
  }


myMap(words, function (word) {
  return word.length;
});

myMap(words, function(word) {
  return word.toUpperCase();
});

myMap(words, function(word) {
  return word.split('').reverse().join('');
});

var list = [10, 20, 30, 40, 50, 60, 70, 80, 90];
/*
var results = list.map(function(num) {
  return num * 2;
});
*/
//create a new array
//loop over a list
//for each element of the list, run a function on it
//Take the return value of that function,
//and put it in a new array
//return the new array after the loop is done


// function myMap(list, cb) {
// var results = [];
// for (var i = 0; i < list.length; i++) {
// var result = cb(list[i], i, list);
// console.log(cb(list[i], i, list));
// results.push(result);
//   } 
// return results;
// }
// var results = myMap(list, function callback1(num) {
// return num * 2;
// });
// console.log(results);
// console.log(list);