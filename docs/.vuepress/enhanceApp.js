// 由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。enhanceApp.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：
// 增强应用程序 自动运行
export default ({ router }) => {
    router.beforeEach((to, from, next) => {
      if (typeof _hmt !== "undefined") {
        if (to.path) {
          // 第二个参数pageURL 
          _hmt.push(["_trackPageview", to.fullPath]);
        }
      }
      
      next();
    });
  };