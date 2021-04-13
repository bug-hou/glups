import startIndex from "./index.vue";
const components = [startIndex];
export default {
  install(app, options) {
    console.log(options);
    components.forEach((item) => {
      app.component(item.name, item);
    });
  },
};
