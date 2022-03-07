<template>
  <main>
    <h1>Controle Financeiro</h1>
    <FormEntry @sendEntry="getEntry" />
    <p>{{ allEntry }}</p>
  </main>
</template>

<script>
import FormEntry from "./FormEntry.vue";
export default {
  name: "Home",
  components: {
    FormEntry,
  },
  data() {
    return {
      incomeValue: null,
      expenseValue: null,
      allEntry: [],
      total: null,
    };
  },
  methods: {
    getEntry(event) {
      this.allEntry.push(event);
    },
  },
};
</script>

<style></style>
