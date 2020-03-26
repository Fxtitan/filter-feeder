/******************
 * YOUR CODE HERE *
 ******************/
const isOdd = (num) => {
return num % 2 !== 0;
}

const onlyOdds = (nums) => {
  return nums.filter(isOdd); 
}

const isEven = (num) => {
  return num % 2 === 0; 
}

const onlyEvens = (nums) => {
return nums.filter(isEven); 
}

const isShort = (str) => {
  return str.length < 7;
}

const shortNamesOnly = (strings) => {
  return strings.filter(isShort);
}

const isDName = (name) => {
  return name.charAt(0) === 'D';
}

const dNames = (names) => {
  return names.filter(isDName);
}

const isTriStateArea = (shutDown) => {
  return shutDown.endsWith('NY') ||  shutDown.endsWith('NJ') || shutDown.endsWith('CT')
}//why cant I put && but i can put or??

const triStateAreaOnly = (infected) => {
  return infected.filter(isTriStateArea)
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof isOdd === 'undefined') {
  isOdd = undefined;
}

if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof isEven === 'undefined') {
  isEven = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof isShort === 'undefined') {
  isShort = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof isDName === 'undefined') {
  isDName = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}

if (typeof containsLowercase === 'undefined') {
  containsLowercase = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof isTriStateArea === 'undefined') {
  isTriStateArea = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}


module.exports = {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
}
