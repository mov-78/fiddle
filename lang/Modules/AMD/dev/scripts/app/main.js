console.log('main:LOAD')

define(['utils/math', 'utils/log'], function factory(math, log) {

  console.log('main:EXECUTE')

  log(math.add(3, 4))

})
