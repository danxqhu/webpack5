// 完整引入
// import 'core-js';
// 按需加载
// 但是如果js文件里使用了很多新语法api，全都手动引入不方便
// import 'core-js/es/promise';

import count from './js/count';
import sum from './js/sum';

import { mul } from './js/math';
// 想要webpack打包资源，必须引入该资源
import './css/iconfont.css';
import './css/index.css';
import './less/index.less';
import './sass/test1.sass';
import './sass/test2.scss';
import './stylus/index.styl';

// console.log(mul(3, 3));
let result = count(2, 1);
console.log(result);
// console.log(result);
console.log(sum(1, 2, 3, 4, 5));

document.getElementById('btn').onclick = function () {
  // eslint不能识别动态导入需要，需要额外追加配置
  // /* webpackChunkName: "math" */ webpack魔法命名
  import(/* webpackChunkName: "math" */ './js/math')
    .then(({ mul }) => {
      console.log('模块加载成功', mul(2, 1));
    })
    .catch();
};

if (module.hot) {
  // 判断是否支持热模块替换功能
  module.hot.accept('./js/count');
  module.hot.accept('./js/sum');
}

new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

const arr = [1, 2, 3, 4];
console.log(arr.includes(1));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
