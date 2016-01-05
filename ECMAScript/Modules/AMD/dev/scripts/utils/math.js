console.log('utils/math:LOAD')

define(function factory() {

  console.log('utils/math:EXECUTE')

  return {
    add: function add(m, n) {
      return m + n
    }
  }

})
