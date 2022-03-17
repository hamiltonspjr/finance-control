<template>
  <div class="form-container">
    <h2 class="form-container__title">Adicionar entrada</h2>
    <form class="form">
      <div class="form__item">
        <label for="date">Data</label>
        <input type="date" name="date" id="date" v-model="date" />
      </div>
      <div class="form__item">
        <label for="title">Título</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div class="form__item">
        <label for="category">Categoria</label>
        <select name="category" id="category" v-model="category">
          <option disabled value="">Selecione uma categoria</option>
          <option value="income">Renda</option>
          <option value="expense">Despesa</option>
        </select>
      </div>
      <div class="form__item">
        <label for="value">Valor</label>
        <input type="number" name="value" id="value" v-model="value" />
      </div>
      <button @click.prevent="addEntry">Adicionar</button>
    </form>
  </div>
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

<style scoped></style>
