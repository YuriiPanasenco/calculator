const path = require("path");


module.exports = (env)=> {
    return {
        target: "node",
        mode: env.NODE_ENV, // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
        entry: {
            index: "./src/index.ts"
        },
        output: {
            path: path.resolve(__dirname + "/dist/"),
            filename: "[name].js",
            publicPath: "dist/", // string    // the url to the output directory resolved relative to the HTML page
            libraryTarget: "umd" // universal module definition    // the type of the exported library
            /* Advanced output configuration (click to show) */
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        module: {
            // configuration regarding modules
            rules: [
                { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },
            ]
        },
        plugins: [],
        devtool:'none'
    };
}
