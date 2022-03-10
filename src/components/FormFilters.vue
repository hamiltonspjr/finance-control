<template>
  <section>
    <h2>Filtrar por:</h2>
    <form>
      <label for="date">Data</label>
      <input type="date" name="date" id="date" v-model="date" />
      <label for="category">Categoria</label>
      <select name="category" id="category" v-model="category">
        <option disabled value="">Selecione uma categoria</option>
        <option value="income">Renda</option>
        <option value="expense">Despesa</option>
      </select>
      <button @click.prevent="handleFilter">Filtrar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "FormFilters",
  data() {
    return {
      date: null,
      category: null,
    };
  },
  methods: {
    handleFilter() {
      let data = null;
      if (!this.date && !this.category) {
        alert("Preencha pelo menos um dos campos!");
      } else if (this.date && !this.category) {
        data = {
          name: "date",
          value: this.date,
        };
      } else if (!this.date && this.category) {
        data = {
          name: "category",
          value: this.category,
        };
      } else {
        data = [
          {
            name: "date",
            value: this.date,
          },
          {
            name: "category",
            value: this.category,
          },
        ];
      }
      this.$emit("filter", data);
      this.resetData();
    },
    resetData() {
      this.date = null;
      this.category = null;
    },
  },
};
</script>

<style></style>
