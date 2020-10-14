<template>
  <div class="component">
    <!-- We're passing props into the UserDetail component from here. So we tell
    app-user-detail what prop name we want to use and then we identify it with :
    (v-bind) using kebab-case for the prop name here in the template and camelCase for
    the name in the js in the userDetail component (a Vue convention, it will work
    with both camel or both kebab). We assign the name of the data element here also
    in our component element declaration. -->
    <h1>The User Component</h1>
    <p>I'm an awesome user</p>
    <button @click="changeName">Change my Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :user-name="name"
          @nameWasReset="name = $event"
          :user-age="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :user-age="age"
          @ageWasEdited="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "@/components/UserDetail.vue";
import UserEdit from "@/components/UserEdit.vue";

export default {
  name: "User",
  data: function() {
    return {
      name: "Madison",
      age: 17,
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  methods: {
    changeName() {
      this.name = "Madison Hu";
    },
  },
};
</script>

<style>
.component {
  background-color: lightblue;
}
</style>
