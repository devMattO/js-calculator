/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function(){
  var total = 0;
  var memory = 0;

  function validate(x){
    if (typeof x !== 'number') {
      throw Error('Error');
    }
  }

  function _load(x){
    validate(x);
    total = x;
      return total;
  }

  function _getTotal(){
    return total;
  }

  function _add(x){
    validate(x);
    total += x;
    return total;
  }

  function _subtract(x){
    validate(x);
    total -= x;
    return total;
  }

  function _multiply(x){
    validate(x);
    total *= x;
    return total;
  }

  function _divide(x){
    validate(x);
    total /= x;
    return total;
  }

  function _recallMemory(){
    return memory;
  }

  function _saveMemory(){
    memory = total;
  }

  function _clearMemory(){
    memory = 0;
  }

  return {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
  };
};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

