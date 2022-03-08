<template>
  <main>
    <h1>Controle Financeiro</h1>
    <section>
      <DataCards name="Renda" :value="incomeValue" />
      <DataCards name="Despesa" :value="expenseValue" />
      <DataCards name="Total" :value="total" />
    </section>
    <FormEntry @sendEntry="getEntry" />
    <ItemsTable :list="allEntry"> </ItemsTable>
  </main>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import DataCards from "./DataCards.vue";
import ItemsTable from "./ItemsTable.vue";
export default {
  name: "Home",
  components: {
    FormEntry,
    DataCards,
    ItemsTable,
  },
  data() {
    return {
      allEntry: [],
    };
  },
  methods: {
    getEntry(event) {
      this.allEntry.push(event);
      window.localStorage.setItem("list", JSON.stringify(this.allEntry));
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
    checkLocalStorage() {
      if (window.localStorage.list) {
        this.allEntry = JSON.parse(window.localStorage.list);
      }
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
  watch: {
    allEntry() {
      window.localStorage.setItem("list", JSON.stringify(this.allEntry));
    },
  },
  created() {
    this.checkLocalStorage();
  },
};
</script>

<style></style>
