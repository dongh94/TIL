```
.
├── build/                      # webpack config files
│   ├── build.js
│   ├── check-versions.js
│   ├── utils.js
│   ├── vue-loader.config.js
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── config/
│   ├── index.js                # main project config
│   ├── dev.env.js
│   └── prod.env.js
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
└── static/                     # pure static assets (directly copied)

```
