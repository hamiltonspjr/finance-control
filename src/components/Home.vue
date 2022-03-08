<template>
  <main>
    <h1>Controle Financeiro</h1>
    <section>
      <DataCards name="Renda" :value="incomeValue" />
      <DataCards name="Despesa" :value="expenseValue" />
      <DataCards name="Total" :value="total" />
    </section>
    <FormEntry @sendEntry="getEntry" />
    <p>{{ allEntry }}</p>
  </main>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import DataCards from "./DataCards.vue";
export default {
  name: "Home",
  components: {
    FormEntry,
    DataCards,
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
