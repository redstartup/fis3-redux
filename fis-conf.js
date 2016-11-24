/** 
 *author:wanghongxin
 *qq:2262118088
 *description:redux scaffold
 */

fis
  .config.set('project.watch.usePolling',true)
  .set('settings.postprocessor.rjy-postcss',{
      addPlugins: function () {
        var pl = require('autoprefixer');
        pl({ browsers: ['> 3% in CN'] });
        
        var plugins = [pl];
        return plugins;
      }
    })
  .set('project.files', '/src/index.html')
  .set('project.ignore', [
    '/output/**',
    '/bin/**',
    '/dist/**',
    '.git/**',
    '.svn/**',
    'Vagrantfile',
    '.vagrantfile/**',
    '**.sh',
    'package.json',
    '.env',
    '.env.example',
    'artisan',
    'composer.json',
    'gulpfile.js',
    'Gruntfile.js',
    'fis-conf.js',
    '.gitignore',
    '.gitattribute',
    '**.xml',
    '**.yml',
    '**.md',
    'npm-debug.log',
  ])
  .match('/**/*.{js,es,es6,jsx,ts,tsx}', {
    preprocessor: [
      fis.plugin('js-require-file'),
      fis.plugin('js-require-css')
    ]
  })
  // .match('/src/*.{css,less,sass,scss}', {
  //   postprocessor: fis.plugin('rjy-postcss')
  // })
  .match('/**/*.less', {
    // postprocessor: fis.plugin('less-autoprefix', {}),
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
    })
  })
  .match('/**/*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {
    })
  })
  .match('/**/*.{css,less,sass,scss}', {
    postprocessor: fis.plugin('rjy-postcss')
  })
  .hook('commonjs', {
    baseUrl: './src/modules',
    extList: ['.js', '.jsx']
  })
  .match('{/**/*.js,/**/*.jsx}', {
    parser: fis.plugin('babel-5.x', {
      sourceMaps: true,
      optional: ["es7.decorators", "es7.classProperties"]
    }),
    rExt: '.js'
  })
  .match('/src/modules/components/**.jsx', {
    useSameNameRequire: true
  })
  .hook('node_modules')
  .match('/{node_modules,src/modules}/**.{js,jsx}', {
    isMod: true
  })
  .match('/src/(*.html)',{
    release:'/view/$1'
  })
  .match('::package', {
    postpackager: fis.plugin('loader', {
      useInlineMap: true
    })
  })
  .match('/src/(static/**)',{
    release:'/$1'
  })

  .media('fedev')
  .match('/**/*.{less,sass,scss,css}', {
    optimizer: fis.plugin('clean-css', {
      'keepBreaks': true,
    })
  })
  .match('/node_modules/**.js', {
    packTo: '/static/vendor.js'
  })
  .match('/src/(**)',{
    release:'/static/$1'
  })

  .media('build')
  .match('{/**/*.js,/**/*.jsx}', {
    parser: fis.plugin('babel-5.x', {
      sourceMaps: false,
      optional: ["es7.decorators", "es7.classProperties"]
    }),
    rExt: '.js',
  })
  .match('/src/(modules/**)',{
    release:'$1',
  })
  .match('/**/*.{js,jsx,ts}', {
    optimizer: fis.plugin('uglify-js')
  })
  .match('/**/*.{less,sass,css,scss}', {
    optimizer: fis.plugin('clean-css', {
      'keepBreaks': false,
    })
  })
  .match('::packager', {
    packager: fis.plugin('deps-pack', {
      '/node_modules/vendor.js': [
        '/src/modules/index.jsx:deps',
        '!/src/modules/**'
      ],
      '/static/pkg/index.js': [
        '/src/modules/index.jsx',
        '/src/modules/index.jsx:deps'
      ],
      '/static/pkg/modules.css': [
        '/src/modules/index.jsx:deps'
      ],
    }),
    spriter: fis.plugin('csssprites', {
      layout: 'matrix',
      margin: '15'
    })
  })
  .match('/**/*.{js,css,jsx,less,sass,scss}', {
    useHash: true,
  })