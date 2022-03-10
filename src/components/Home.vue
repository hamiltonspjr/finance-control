<template>
  <main>
    <h1>Controle Financeiro</h1>
    <section>
      <DataCards name="Renda" :value="incomeValue" />
      <DataCards name="Despesa" :value="expenseValue" />
      <DataCards name="Total" :value="total" />
    </section>
    <FormEntry @sendEntry="getEntry" />
    <FormFilters @filter="filterEntries" />
    <ItemsTable
      @removeEntry="removeItem"
      :list="filteredEntries.length > 0 ? filteredEntries : allEntry"
    >
    </ItemsTable>
  </main>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import DataCards from "./DataCards.vue";
import ItemsTable from "./ItemsTable.vue";
import FormFilters from "./FormFilters.vue";

export default {
  name: "Home",
  components: {
    FormEntry,
    DataCards,
    ItemsTable,
    FormFilters,
  },
  data() {
    return {
      allEntry: [],
      filteredEntries: [],
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
    removeItem(event) {
      const confirm = window.confirm("Deseja realmente excluir?");
      if (confirm) {
        this.allEntry.splice(event, 1);
        window.localStorage.setItem("list", JSON.stringify(this.allEntry));
      }
    },
    filterEntries(event) {
      if (event.length > 1) {
        const oneFilter = this.allEntry.filter(
          (item) => item[event[0].name] === event[0].value
        );

        const lastFilter = oneFilter.filter(
          (item) => item[event[1].name] === event[1].value
        );
        this.filteredEntries = lastFilter;
      } else {
        const filter = this.allEntry.filter(
          (item) => item[event.name] === event.value
        );
        this.filteredEntries = filter;
        console.log(this.filteredEntries);
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
  created() {
    this.checkLocalStorage();
  },
};
</script>

<style></style>
