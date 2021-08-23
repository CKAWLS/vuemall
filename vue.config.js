const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir) //path.join()设置绝对路径
}
//配置路径别名
//使用sample
//在html代码中 ：要在路径前添加波浪线 否则会报错 在script代码中：不用添加波浪线 直接使用
module.exports={
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('@/assets'))
      .set('common', resolve('@/common'))
      .set('components', resolve('@/components'))
      .set('network', resolve('@/network'))
  }
}
