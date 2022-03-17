<template>
  <div class="card-item" :class="negativeValue ? 'bg-red' : 'bg-green'">
    <h1 class="card-item__title">{{ name }}</h1>
    <span class="card-item__value">{{ valueBRL }}</span>
  </div>
</template>

<script>
import { valueFormatBrl } from "../helpers.js";
export default {
  name: "DataCards",
  props: ["name", "value", "negativeValue"],
  computed: {
    valueBRL() {
      let valueFormatted = valueFormatBrl(this.value);
      return valueFormatted;
    },
  },
};
</script>

<style scoped>
.card-item {
  flex: 1;
  padding: 2rem 3rem;
  border-radius: 0.4rem;
}
.bg-green {
  background-color: #49aa26;
}
.bg-red {
  background-color: #e92929;
}
.card-item__title,
.card-item__value {
  color: #fff;
}
.card-item__title {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.card-item__value {
  font-size: 1.6rem;
}
</style>
