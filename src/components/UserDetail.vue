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
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
