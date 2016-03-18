var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'SSBify',
  section: 'apis',
  tab: 'apis-community',
  path: '/apis/community/ssbify.html',
  content: md.doc(__dirname+'/ssbify.md')
})