var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}
function appendKitten(name) {
  var array2 = [...kittens, name];
  return array2;
}
function prependKitten(name) {
  var array2 = [name, ...kittens];
  return array2;
}
