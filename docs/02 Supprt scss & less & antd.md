```bash
npm install sass -D
```
* 配置@指向到src目录
> config/webpack.config.js 
```javascript
module.exports = {
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    }
  }
}
```

* 配置scss加载全局变量
> function getStyleLoaders
```javascript
if (preProcessor) {
  // begin +++
  let preProcessorOptions = null
  if (preProcessor === 'sass-loader') {
    preProcessorOptions = {
      additionalData: '@import "@/assets/stylesheets/globalInjectedData.scss";'
    }
  }
  // end
  loaders.push(
    {
      loader: require.resolve('resolve-url-loader'),
      options: {
        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        root: paths.appSrc,
      },
    },
    {
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: true,
        ...preProcessorOptions // +++
      },
    }
  );
}
```