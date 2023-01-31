import count from './js/count';
import sum from './js/sum';
// 想要webpack打包资源，必须引入该资源
import './css/iconfont.css';
import './css/index.css';
import './less/index.less';
import './sass/test1.sass';
import './sass/test2.scss';
import './stylus/index.styl';

var result = count(2, 1);
console.log(result);
console.log(sum(1, 2, 3, 4));
