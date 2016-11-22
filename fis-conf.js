/** 
 *author:wanghongxin
 *qq:2262118088
 *description:redux scaffold
 */

fis
.config.set('project.watch.usePolling', true)
.set('project.files', '/src/index.html')

.media('fedev')
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
.hook('node_modules')
.match('/{node_modules,src/modules}/**.{js,jsx}', {
  isMod: true
})
.match('/node_modules/**.js', {
  packTo: '/src/vender.js'
})
.match('::package', {
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
})

.media('build')
.hook('commonjs', {
  baseUrl: './src/modules',
  extList: ['.js', '.jsx']
})
.match('{/src/modules/**.js,*.jsx}', {
  parser: fis.plugin('babel-5.x', {
      optional: ["es7.decorators", "es7.classProperties"]
  }),
  rExt: '.js'
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
.match('*.{js,jsx}', {
  optimizer: fis.plugin('uglify-js')
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
    ]
  })
});
