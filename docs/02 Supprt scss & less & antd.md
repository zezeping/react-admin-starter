### Scss

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

### Less
```
npm install less less-loader -D
```

> config/webpack.config.js
```bash
// 1. 
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// 2. module.rules, 放在sassModuleRegex下面（不可放到最后！！！）
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
      modules: {
        mode: 'icss',
      },
    },
    'less-loader'
  ),
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
      modules: {
        mode: 'local',
        getLocalIdent: getCSSModuleLocalIdent,
      },
    },
    'less-loader'
  ),
}, 


// 3. function getStyleLoaders
if (preProcessor) {
      let preProcessorOptions = null
      if (preProcessor === 'sass-loader') {
        preProcessorOptions = {
          additionalData: '@import "@/assets/stylesheets/globalInjectedData.scss";'
        }
      } else if (preProcessor === 'less-loader') { // begin ++++
        preProcessorOptions = {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@primary-color': '#f00',
            },
          }
        }
      } // end
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