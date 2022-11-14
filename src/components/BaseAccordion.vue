<template>
  <div class="wrapper">
    <div class="accordion" @click="toggleItem">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </div>
    <div v-show="show" class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleItem() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 300px;
  padding: 10px;
}
.accordion {
  display: flex;
  cursor: pointer;
  margin: 0;
}
.title {
  margin: 0;
  color: darkgreen;
}
.content {
  text-align: center;
  width: 100%;
  padding: 10px;
}
</style>
