import menu from "./index.vue";
import menuItem from "./item.vue";
import resubmenu from "./resubmenu.vue";
import submenu from "./submenu.vue";
export default {
  install(app, options) {
    app.component(menu.name, menu);
    app.component(menuItem.name, menuItem);
    app.component(resubmenu.name, resubmenu);
    app.component(submenu.name, submenu);
  },
};
