<template>
  <div class="form-container">
    <h2 class="form-container__title">Filtrar por:</h2>
    <form class="form">
      <div class="form__item">
        <label for="date">Data</label>
        <input type="date" name="date" id="date" v-model="date" />
      </div>
      <div class="form__item">
        <label for="category">Categoria</label>
        <select name="category" id="category" v-model="category">
          <option disabled value="">Selecione uma categoria</option>
          <option value="income">Renda</option>
          <option value="expense">Despesa</option>
        </select>
      </div>
      <button @click.prevent="handleFilter">Filtrar</button>
    </form>
  </div>
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
        this.$emit("filter", data);
        this.resetData();
      } else if (!this.date && this.category) {
        data = {
          name: "category",
          value: this.category,
        };
        this.$emit("filter", data);
        this.resetData();
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
        this.$emit("filter", data);
        this.resetData();
      }
    },
    resetData() {
      this.date = null;
      this.category = null;
    },
  },
};
</script>

<style scoped></style>
