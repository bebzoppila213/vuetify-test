<template>
  <v-table class="justify-center">
    <thead>
      <tr>
        <th class="text-left">Имя</th>
        <th class="text-left">Фамилия</th>
        <th class="text-left">Отчество</th>
        <th class="text-left">Позиция</th>
      </tr>
    </thead>
    <tbody>
      <TableItemVue
        @openModalEditing="$emit('openModalEditing', $event)"
        @deleteEmploye="$emit('deleteEmploye', $event)"
        :employe="item"
        v-for="item in employees"
        :key="item.id"
      />
    </tbody>
  </v-table>
</template>

<script>
import TableItemVue from "./TableItem.vue";

export default {
  props: ["employees"],
  components: { TableItemVue },

  data: () => {
    return {
      deleteConfirm: false,
    };
  },
};
</script>