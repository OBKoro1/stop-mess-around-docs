import {path} from '@vuepress/shared-utils';

module.exports = (options, context) => ({
  define () {
    const { title, width, body, footer } = options || {}
    return {
      WIDTH: width || '260px',
      TITLE: title || '公告',
      BODY: body || [],
      FOOTER: footer || []
    }
  },
  name: 'my-popover-plugin',
  globalUIComponents: 'Popver',
  enhanceAppFiles:[
    path.resolve(__dirname, './enhanceAppFile.js')
  ]
})
