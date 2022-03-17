<template>
  <main class="main">
    <h1>Controle Financeiro</h1>
    <div class="cards-container">
      <DataCards name="Renda" :value="incomeValue" :negativeValue="false" />
      <DataCards name="Despesa" :value="expenseValue" :negativeValue="true" />
      <DataCards
        name="Total"
        :value="total"
        :negativeValue="total > 0 ? false : true"
      />
    </div>
    <div class="forms-container">
      <FormEntry @sendEntry="getEntry" />
      <FormFilters @filter="filterEntries" />
    </div>
    <div class="table-container">
      <ItemsTable
        @removeEntry="removeItem"
        :list="
          filteredEntries && filteredEntries.length > 0
            ? filteredEntries
            : allEntry
        "
      >
      </ItemsTable>
    </div>
  </main>
</template>

<script>
import FormEntry from "./FormEntry.vue";
import DataCards from "./DataCards.vue";
import ItemsTable from "./ItemsTable.vue";
import FormFilters from "./FormFilters.vue";
import { filterData } from "../helpers.js";

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
      filteredEntries: null,
      filterActive: false,
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
        if (this.filterActive) {
          const newDataFilter = filterData(this.filteredEntries, event);
          this.filteredEntries = newDataFilter;
        }
        const newAllEntry = filterData(this.allEntry, event);
        this.allEntry = newAllEntry;
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
        this.filterActive = true;
      } else {
        const filter = this.allEntry.filter(
          (item) => item[event.name] === event.value
        );
        this.filteredEntries = filter;
        this.filterActive = true;
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

<style>
.main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main h1 {
  color: #363f5f;
  font-size: 3rem;
  margin-bottom: 6rem;
}
.cards-container,
.forms-container,
.table-container {
  width: 100%;
}
.cards-container {
  display: flex;
  gap: 2rem;
}
@media screen and (max-width: 768px) {
  .cards-container {
    flex-direction: column;
  }
}
</style>
