/**
 * Adds the key-value `pair` to `map`.
 *未找到方法，可能已放弃
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1])
  return map
}
function addMapEntry1(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  console.log(Object.set);
  map.set(pair[0], pair[1])
  console.log(map); 
}

addMapEntry1({add:1},[{a:0},{b:2}])
export default addMapEntry
