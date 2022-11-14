<template>
  <div class="container">
    <h1>Accordion</h1>
    <div v-for="item in data" :key="item.id">
      <BaseAccordian>
        <template v-slot:title>
          <h5>{{ item.Year }}</h5>
        </template>
        <template v-slot:content>
          <div class="wrapper">
            <div class="card">
              <div class="card-body">
                <tr>
                  <td><b>Country Name:</b> {{ item.Nation }}</td>
                </tr>
                <tr>
                  <td><b>Population:</b> {{ item.Population }}</td>
                </tr>
                <tr>
                  <td><b>Source Name:</b> Census Bureau</td>
                </tr>
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
      data: null,
    };
  },
  mounted() {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        this.data = response.data.data;
        console.log(this.data);
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
