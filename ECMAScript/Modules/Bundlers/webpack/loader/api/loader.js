module.exports = function factory(content) {

  // 资源所在目录
  console.log('context:', this.context)

  // 解析后的完整请求
  console.log('request:', this.request)

  // 当前加载器的 query 参数
  console.log('query:', this.query)

  // 请求中涉及到的所有加载器的列表；在 pitching 阶段可写
  console.log('loaders:', this.loaders)
  // 当前加载器在 this.loaders 中的位置索引
  console.log('loaderIndex:', this.loaderIndex)

  // 请求的资源部分（包含 query 参数）
  console.log('resource:', this.resource)
  // 请求资源的路径
  console.log('resourcePath:', this.resourcePath)
  // 请求的资源部分的 query 参数
  console.log('resourceQuery:', this.resourceQuery)

  // 用于在 pitching 阶段及 normal 阶段之间共享数据
  console.log('data:', this.data)

  // 编译器配置
  console.log('options:', this.options)

  // config.debug
  console.log('debug:', this.debug)
  // config.target{web, webworker,node,async-node,node-webkit,atom}
  console.log('target:', this.target)


  //
  // resolve & resolveSync
  //

  // resolve(context:String, request:String, callback:Function)
  this.resolve(
    this.context,
    './fixture?from=resolve',
    function callback(error, result) {
      if (error) {
        console.log('this.resolve() failed: ', error)
      } else {
        console.log('this.resolve() succeed:', result)
      }
    }
  )

  // resolveSync(context:String, request:String)
  console.log(
    'this.resolveSync():',
    this.resolveSync(
      this.context,
      './fixture?from=resolveSync'
    )
  )

  return content

}
