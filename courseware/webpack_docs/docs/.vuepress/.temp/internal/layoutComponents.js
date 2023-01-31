import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/demo_code/Webpack5/webpack5/courseware/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/demo_code/Webpack5/webpack5/courseware/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
