import swiperIndex from "./index.vue";
import swiperItem from "./item.vue";
let components = [swiperIndex, swiperItem];
export default {
  install(app, options) {
    components.forEach((item) => {
      app.component(item.name, item);
    });
  },
};
