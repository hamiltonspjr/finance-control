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
  background: linear-gradient(
    105.87deg,
    rgba(73, 170, 38, 0.6) 3.04%,
    rgba(255, 255, 255, 0) 96.05%
  );
  box-shadow: 0 8px 32px 0 rgb(73, 170, 38, 0.2);
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgb(73, 170, 38, 0.5);
}
.bg-red {
  background: linear-gradient(
    105.87deg,
    rgba(233, 41, 41, 0.6) 3.04%,
    rgba(255, 255, 255, 0) 96.05%
  );
  box-shadow: 0 8px 32px 0 rgb(233, 41, 41, 0.2);
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgb(233, 41, 41, 0.5);
}
.card-item__title,
.card-item__value {
  color: #000b0d;
}
.card-item__title {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.card-item__value {
  font-size: 1.6rem;
}
</style>
