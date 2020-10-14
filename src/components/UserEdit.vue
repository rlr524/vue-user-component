<template>
  <div class="component">
    <h3>You may edit the user here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
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
      this.$emit("ageWasEdited", this.userAge);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
