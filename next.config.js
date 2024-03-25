const { webpack, NormalModuleReplacementPlugin } = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
            
        }

        // config.plugins.push(
        //     new webpack.NormalModuleReplacementPlugin(
        //         /next\/image/,
        //         require.resolve(path.join(__dirname, 'mocks', 'next', 'image'))
        //     )
        // );

        
        

        // Enable source maps in development mode only
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'eval-source-map';
        }

        // Disable source maps in production mode
        if (process.env.NODE_ENV === 'production') {
            config.devtool = false;
            config.productionBrowserSourceMaps = false;
        }
        
        return config
    }
}

module.exports = nextConfig
