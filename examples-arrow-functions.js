var names = ['Trumbell', 'Chicago', 'Milford', 'Hamden'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('arr_with', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to (arr) ' + name)
//     });
//   }
// };
// person.greet();
//
// var person = {
//   name: 'Andrew',
//   greet: function () {
//     var that = this;
//     names.forEach(function (name) {
//       console.log(that.name + ' says hi to (fun) ' + name)
//     });
//   }
// };
// person.greet();

var addStatement = (a, b) => {return a+b;}
console.log('Statement');
console.log(1,3);
console.log(9,0);

var addExpression = (a, b) => a+b;
console.log('Expression');
console.log(1,3);
console.log(9,0);
