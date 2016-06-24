module.exports = function factory(content, timestamp) {

  console.log('---------------- loader:baz -----------------')
  console.log('content:', content)
  console.log('timestamp:', timestamp)
  console.log('---------------------------------------------')

  return content.replace(/'[^']*'/, '\'' + timestamp + '\'')

}
