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
  // '/node_modules/**',
  '.git/**',
  '.svn/**',
  'Vagrantfile',
  '.vagrantfile/**',
  '*.sh',
  'fis-conf.js',
  'package.json',
  '.env',
  '.env.example',
  'artisan',
  'composer.json',
  'gulpfile.js',
  '.gitignore',
  '*.xml',
  '*.yml',
  '**/*.md',
  // '**/*.css'
  //'/test/**',
])

.media('fedev')
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
.match('::package', {
  postpackager: fis.plugin('loader', {
    useInlineMap: true
  })
})

.media('build')
.match('*.{js,jsx}', {
  optimizer: fis.plugin('uglify-js')
})
.match('::package', {
  packager: fis.plugin('deps-pack', {
    'pkg/index.js': [
      'modules/index.jsx',
      'modules/index.jsx:deps',
    ]
  })
})
