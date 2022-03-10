<template>
  <form>
    <label for="date">Data</label>
    <input type="date" name="date" id="date" v-model="date" />
    <label for="title">Título</label>
    <input type="text" id="title" name="title" v-model="title" />
    <label for="category">Categoria</label>
    <select name="category" id="category" v-model="category">
      <option disabled value="">Selecione uma categoria</option>
      <option value="income">Renda</option>
      <option value="expense">Despesa</option>
    </select>
    <label for="value">Valor</label>
    <input type="number" name="value" id="value" v-model="value" />
    <button @click.prevent="addEntry">Adicionar</button>
  </form>
</template>

<script>
export default {
  name: "FormEntry",
  data() {
    return {
      date: null,
      title: null,
      category: null,
      value: null,
    };
  },
  methods: {
    addEntry() {
      let data = {
        date: this.date,
        title: this.title,
        category: this.category,
        value: this.value,
      };
      let validation = this.validadeForm();
      if (validation) {
        this.$emit("sendEntry", data);
        this.resetForm();
      }
    },
    resetForm() {
      this.date = null;
      this.title = null;
      this.category = null;
      this.value = null;
    },
    validadeForm() {
      if (!this.date || !this.title || !this.category || !this.value) {
        alert("Preencha todos os campos");
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style></style>
