<template>
  <div>
    <h1>{{ name }}</h1>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "DataCards",
  props: ["name", "value"],
};
</script>

<style></style>
