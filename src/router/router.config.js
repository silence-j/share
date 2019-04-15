/**
 * 路由守卫拦截
*/
import router from './index';
import store from '../store';
import { routersConfig, routersMatchConfig } from './router.match';

router.beforeEach(({ matched, meta, path }, from, next) => {
  if (routersConfig[path]) {
    store.commit('setActive', routersConfig[path]);
  }
  Object.keys(routersMatchConfig).forEach((key) => {
    if (path.includes(key)) {
      store.commit('setActive', routersMatchConfig[key]);
    }
  });
  next();
});
