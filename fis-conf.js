/** 
 *author:wanghongxin
 *qq:2262118088
 *description:redux scaffold
 */

fis
.config.set('project.watch.usePolling', true)
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
.match('*.{js,es,es6,jsx,ts,tsx}', {
  preprocessor: [
    fis.plugin('js-require-file'),
    fis.plugin('js-require-css')
  ]
})
.match('**/*.less', {
    postprocessor: fis.plugin('less-autoprefix',{}),
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
    })
})
.match('**/*.scss', {
    rExt: '.css', 
    parser: fis.plugin('node-sass', {
    })
})
.match('*.{less,sass,css}', {
    optimizer: fis.plugin('clean-css', {
        'keepBreaks': true,
    })
})
.hook('commonjs', {
  baseUrl: './src/modules',
  extList: ['.js', '.jsx']
})
.match('{/src/modules/**.js,*.jsx}', {
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
.match('::package', {
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
})

.media('fedev')
.match('/node_modules/**.js', {
  packTo: '/src/vendor.js'
})

.media('build')
.match('*.{js,jsx,ts}', {
  optimizer: fis.plugin('uglify-js')
})
.match('*.{less,sass,css}', {
    optimizer: fis.plugin('clean-css', {
        'keepBreaks': false,
    })
})
.match('::packager', {
  packager: fis.plugin('deps-pack', {
  'pkg/vendor.js': [
      '/src/modules/index.jsx:deps',
      '!/src/modules/**'
    ],
  'pkg/index.js': [
      '/src/modules/index.jsx',
      '/src/modules/index.jsx:deps'
    ],
  'pkg/modules.css':[
      '/src/modules/index.jsx:deps'
    ],
  }),
  spriter: fis.plugin('csssprites', {
      layout: 'matrix',
      margin: '15'
  })
})
.match('**.{js,css,jsx,less}',{
  useHash:true,
})