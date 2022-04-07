import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#6fceb7",
        secondary: "#e76754"
      },
      dark: {
        primary: "#6fceb7",
        secondary: "#e76754"
      }
    }
  }
});
