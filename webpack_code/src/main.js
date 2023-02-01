import count from './js/count';
import sum from './js/sum';
// 想要webpack打包资源，必须引入该资源
import './css/iconfont.css';
import './css/index.css';
import './less/index.less';
import './sass/test1.sass';
import './sass/test2.scss';
import './stylus/index.styl';

let result = count(2, 1);
console.log(result);
// console.log(result);
console.log(sum(1, 2, 3, 4, 5));

if (module.hot) {
  // 判断是否支持热模块替换功能
  module.hot.accept('./js/count');
  module.hot.accept('./js/sum');
}
