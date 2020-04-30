/*判断值的类型只能通过获取值的内部class来进行判断，但是在es5中
只有Object.prototype.toString能够访问到，所以需要通过call方法把
this的指向转换到需要检测的值上，来判断值的类型
 */
const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}
function getTag1(value) {
  if (value == null) {
    console.log(value === undefined ? '[object Undefined]' : '[object Null]'); 
  }
  console.log(toString.call(value)); 
}

getTag1(getTag)
getTag1(11221)

export default getTag
