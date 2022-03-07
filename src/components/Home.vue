<template>
  <main>
    <h1>Controle Financeiro</h1>
    <FormEntry @sendEntry="getEntry" />
    <p>{{ allEntry }}</p>
    <p>{{ incomeValue }}</p>
    <p>{{ expenseValue }}</p>
    <p>{{ total }}</p>
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
      allEntry: [],
    };
  },
  methods: {
    getEntry(event) {
      this.allEntry.push(event);
    },
    calculateValue(array, category) {
      let value = 0;
      const data = array
        .filter((item) => item.category === category)
        .map((item) => {
          return item.value;
        });
      data.forEach((item) => {
        value += item;
      });
      return value;
    },
  },
  computed: {
    incomeValue() {
      let value = this.calculateValue(this.allEntry, "income");
      return value;
    },
    expenseValue() {
      let value = this.calculateValue(this.allEntry, "expense");
      return value;
    },
    total() {
      return this.incomeValue - this.expenseValue;
    },
  },
};
</script>

<style></style>
