import { resolve, extname } from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const include = resolve(__dirname, 'src/scripts');
const nameFile = 'fdz-typechecker';
const nameLib = nameFile.replace('fdz-', '').split('').map((substr, idx) => {
  return (idx === 0) ? substr[0].toUpperCase() : substr;
}).join('');
console.log(nameLib)
let cssMainFile;

const isProduction = process.env.NODE_ENV === 'production';

const outputFilename = (prefix, ext) => `${prefix}.${(isProduction) ? 'min.' : ''}${ext}`;
const resolvePreProcessorName = path =>
  (path && extname(path).replace('.', '').trim());

const handlePreProcessorName = (ext) => {
  if(ext === 'scss') return ext.replace('c', 'a');
  if(ext === 'styl') return ext.concat('us');
  return ext;
};

const preProcessorName = resolvePreProcessorName(cssMainFile);

const config = {
  devtool: "source-map",
  devServer: {

  },
  entry: {
    [nameFile]: ['./index.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: nameLib,
    filename: outputFilename(`${nameFile}.umd`, 'js')
  },
  module: {
    rules: [
      {
        include,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  plugins: []
};

if(cssMainFile) {
  config.entry[name].push(cssMainFile);

  config.module.rules.push({
    test: new RegExp(`\.${preProcessorName}$`),
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: `${handlePreProcessorName(preProcessorName)}-loader`
        }
      ]
    })
  });

  config.plugins.push(
    new ExtractTextPlugin({
      filename: (getPath) => getPath(outputFilename('style/[name]', 'css'))
    })
  )
}

export default config;
