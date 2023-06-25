<template>
    <tr>
        <td>
          <router-link :to="`/employe-details/${employe.id}`">{{
            employe.firstName
          }}</router-link>
        </td>
        <td>{{ employe.lastName }}</td>
        <td>{{ employe.patronymic }}</td>
        <td>{{ employe.position }}</td>
        <td>
          <v-btn @click="$emit('openModalEditing', { id: employe.id })">
            Редактировать
          </v-btn>
          <v-btn @click="deleteConfirm = true" v-if="!deleteConfirm">
            Удалить
          </v-btn>
          <div v-else>
            <v-btn  variant="tonal" @click="$emit('deleteEmploye', { id: employe.id })">
              Точно удалить ?
            </v-btn>
            <v-btn  variant="tonal" @click="deleteConfirm = false">
              Отмена
            </v-btn>
          </div>
        </td>
      </tr>
</template>

<script>
export default {
  props: ["employe"],

  data: () => {
    return {
      deleteConfirm: false
    };
  },
};
</script>