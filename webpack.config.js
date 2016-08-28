import webpack from 'webpack';
import path from 'path'

let conf = {
    entry: {
        main: path.join(__dirname, './demo/index.js')
    },
    output: {
        path: path.join(__dirname, './build'),
        fileName: '[name].bundle.js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?compact=false'],
                exclude: /node_modules/
            }
        ]
    }
};

export default conf;
