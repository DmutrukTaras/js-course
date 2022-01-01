/* jshint esnext: true */

var getContext = () => {
  console.log(this === window); // => true
  return this;
};
console.log(getContext() === window); // => true