import loupeIndex from "./index.vue";
import loupeItem from "./item.vue";
const components = [loupeIndex, loupeItem];
export default {
  install(app, options) {
    components.forEach((item) => {
      app.component(item.name, item);
    });
  },
};
