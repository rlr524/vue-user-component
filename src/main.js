import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// This is a Vue instance that creates an event bus usable for passing events from a central location vs from each child component.
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    },
  },
});

// Remember we need to pass our main Vue instance last.
new Vue({
  render: h => h(App),
}).$mount("#app");
