<template>
  <section>
    <div v-if="newList && newList.length">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in newList" :key="item.title + index">
            <td>{{ item.date }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.value }}</td>
            <td @click="removeItem(item.title)">excluir</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Nenhum dado no momento.</p>
    </div>
  </section>
</template>

<script>
import { valueFormatBrl, dateFormatBr, formatCategory } from "../helpers.js";
export default {
  name: "ItemsTable",
  props: ["list"],
  methods: {
    removeItem(value) {
      this.$emit("removeEntry", value);
    },
  },
  computed: {
    newList() {
      return this.list.map((item) => {
        return {
          date: dateFormatBr(item.date),
          title: item.title,
          category: formatCategory(item.category),
          value: valueFormatBrl(item.value),
        };
      });
    },
  },
};
</script>

<style></style>
