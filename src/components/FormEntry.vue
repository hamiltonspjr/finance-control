<template>
  <form>
    <label for="date">Data</label>
    <input type="date" name="date" id="date" v-model="entrance.date" />
    <label for="title">Título</label>
    <input type="text" id="title" name="title" v-model="entrance.title" />
    <label for="category">Categoria</label>
    <input
      type="text"
      name="category"
      id="categoriy"
      v-model="entrance.category"
    />
    <label for="value">Valor</label>
    <input type="number" name="value" id="value" v-model="entrance.value" />
    <button>Adicionar</button>
  </form>
  {{ entrance }}
</template>

<script>
export default {
  name: "FormEntry",
  data() {
    return {
      entrance: {
        date: null,
        title: null,
        category: null,
        value: null,
      },
    };
  },
};
</script>

<style></style>
