<template>
  <div class="component">
    <h3>You may edit the user here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "UserEdit",
  props: {
    userAge: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editAge() {
      this.userAge = 18;
      // Commenting this out because we're not using the eventBus to emit events, not the components.
      // this.$emit("ageWasEdited", this.userAge);
      // Uses the eventBus Vue instance we created in main.js to emit the event "ageWasEdited" in the bus and passes
      // our this.userAge data with the event.
      // This allows the parent component, User, to listen for this event and pass it to any child component, in this case
      // we're passing it to the UserDetail component; remember we cannot pass events directly between sibling components.
      // eventBus.$emit("ageWasEdited", this.userAge);
      eventBus.changeAge(this.userAge);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
