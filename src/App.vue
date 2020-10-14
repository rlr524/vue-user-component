<template>
  <div id="app" class="container">
    <app-user></app-user>
  </div>
</template>

<script>
import User from "@/components/User.vue";

export default {
  name: "App",
  components: {
    appUser: User
  }
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
.container {
  padding: 0;
}
</style>
