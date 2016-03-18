var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pull-Cat',
  section: 'apis',
  tab: 'apis-pull-stream',
  path: '/apis/pull-stream/pull-cat.html',
  content: md.doc(__dirname+'/pull-cat.md')
})