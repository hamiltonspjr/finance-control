<template>
  <div>
    <h1>{{ name }}</h1>
    <span>{{ valueBRL }}</span>
  </div>
</template>

<script>
import { valueFormatBrl } from "../helpers.js";
export default {
  name: "DataCards",
  props: ["name", "value"],
  computed: {
    valueBRL() {
      let valueFormatted = valueFormatBrl(this.value);
      return valueFormatted;
    },
  },
};
</script>

<style></style>
