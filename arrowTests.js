var names = ['bob','jill','bill'];
//these 2 are the same thing

// names.forEach(function(names){
//     console.log(names);
// });

// names.forEach((name) => {
//     console.log(name);
// });
//below is the ame as above without the braces
//right of arrow represents a return value
// names.forEach((name) => console.log(name));


// var returnMe = (name) => name + ' woo!';
// console.log(returnMe('nameHere'));

// //anonymous functions take on their own this binding while
// //arrow functions take on their parents this binding
// var person = {
//     name: 'bill',
//     greet: function(name) {
//         //this is undefined and doesnt refer to names
//         console.log(this.name)
//     }
// }
// //below actually works because this refers to the method above
// var person = {
//     name: 'bill',
//     greet: function(){
//         names.forEach((names) => {
//             console.log(this.name + ' this will work')
//         });
//     } 
// }
function addFunction(a,b){

 }
 var addFunction = (a,b) => console.log(a + b);
addFunction(3,4);