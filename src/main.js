import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import dataV from "@jiaminghi/data-view";
import highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";

import "./rem";
highcharts3d(highcharts);
Vue.config.productionTip = false;
Vue.use(dataV);
Vue.use(ElementUI, { size: "medium", zIndex: 3000 });
new Vue({
  render: (h) => h(App),
}).$mount("#app");
