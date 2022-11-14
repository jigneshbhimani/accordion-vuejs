<template>
  <div class="container">
    <h1>Accordion</h1>
    <div v-for="user in users" :key="user.id">
      <BaseAccordian>
        <template v-slot:title>
          <h5>{{ user.id }}. {{ user.name }}</h5>
        </template>
        <template v-slot:content>
          <div class="wrapper">
            <div class="card">
              <div class="card-body">
                <table class="table">
                  <tbody>
                    <tr><td><b>Username:</b> {{ user.username }}</td></tr>
                    <tr><td><b>Email:</b> {{ user.email }}</td></tr>
                    <tr><td><b>Phone:</b> {{ user.phone }}</td></tr>
                    <tr><td><b>Street:</b> {{ user.address.street }}</td></tr>
                    <tr><td><b>Suite:</b> {{ user.address.suite }}</td></tr>
                    <tr><td><b>City:</b> {{ user.address.city }}</td></tr>
                    <tr><td><b>Zipcode:</b> {{ user.address.zipcode }}</td></tr>
                    <tr><td><b>Website:</b> {{ user.website }}</td></tr>
                    <tr><td><b>Company Name:</b> {{ user.company.name }}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </BaseAccordian>
    </div>
  </div>
</template>

<script>
import BaseAccordian from "./BaseAccordion.vue";
import axios from "axios";

export default {
  components: {
    BaseAccordian,
  },
  data() {
    return {
      users: null,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
        console.log(this.users);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
.container {
  text-align: center;
}
.wrapper {
  display: inline-block;
}
.card {
  margin: 10px;
}
</style>
