<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many details</p>
    <p>User Name: {{ userName }}</p>
    <p>User Age: {{ userAge }}</p>
    <p>Backwards User Name: {{ switchName() }}</p>
    <button @click="resetName">Reset my Name</button>
  </div>
</template>

<script>
/** Note the camelCase of the prop name here and best practice of identifying the prop value's type as well as if it is required */
import { eventBus } from "../main";
export default {
  name: "UserDetail",
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
  methods: {
    /** We can pass the userName prop into a method as well */
    switchName() {
      return this.userName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.userName = "Madison";
      this.$emit("nameWasReset", this.userName);
    },
  },
  // Will listen to events created on the eventBus Vue instance we created in main.js. We do this with the created() lifecycle
  // method and pass in our event (emitted from UserEdit) as well as a callback to the event data
  // Now we are passing this "edit age" event using the eventBus vs directly in our components
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
