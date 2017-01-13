module.exports = {
    // tells webpack where to start processing code
    entry: './app/app.jsx',
    output: {
        // __dirname is a part of node.js
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        //where does this need to happen?
        //once again leads to the REACT testing folder
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            CityWeather: 'app/components/CityWeather.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
        },
        // find files with no extension , js, and jsx 
        extensions: ['','.js','.jsx']
    },
    // since webpack doesn't know what to do with our jsx files'
    // below is adding our babel loader into our modules
    module: {
        loaders: [
            {
                // get our files
                loader: 'babel-loader',
                query: {
                    //what does babel do with these files?
                    //this tells the babel loader to run the files through react and es2015 before loading
                    presets: ['react','es2015']
                },
                // below tells which files (.jsx) to apply compiling to
                test: /\.jsx?$/,
                // now we specify which files we don't want to include'
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}