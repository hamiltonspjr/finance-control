<template>
  <section>
    <div v-if="newList && newList.length">
      <table class="table">
        <thead>
          <tr class="table__thead">
            <th>Data</th>
            <th>Categoria</th>
            <th class="table__thead-flex2">Título</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in newList"
            :key="item.title + index"
            class="table__tbody"
          >
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td class="table__tbody-flex2">{{ item.title }}</td>
            <td>{{ item.value }}</td>
            <td @click="removeItem(item.title)" class="remove">
              <img
                src="../assets/remove.svg"
                alt="ícone redondo com traço no meio que tem a finalidade de remover o item ao ser clicado"
              />
            </td>
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

<style scoped>
.table {
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 0px 5px #ccc;
  text-align: left;
  overflow: hidden;
}
.table__thead,
.table__tbody {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
}
.table__thead th,
.table__tbody td {
  flex: 1;
}
.table .table__thead-flex2,
.table .table__tbody-flex2 {
  flex: 2;
}
.table__tbody {
  box-shadow: 0px 0px 5px #ccc;
  padding: 1rem 0;
  margin: 1rem 0;
  position: relative;
}
.remove {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .table__thead,
  .table__tbody {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .table__thead th,
  .table__tbody td {
    margin-right: 1rem;
  }
  .table .table__thead-flex2,
  .table .table__tbody-flex2 {
    flex: 1;
  }
}
</style>
