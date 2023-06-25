<template>
  <v-app>
    <v-main class="d-flex justify-center">
      <v-container>
        <FormFilter @formSubmit="updateFilterValue" />
        <v-select
          label="Поле для сортировки"
          v-model="sortKey"
          :items="[
            { name: 'Имя', value: 'firstName' },
            { name: 'Фамилия', value: 'lastName' },
            { name: 'Отчество', value: 'patronymic' },
            { name: 'Позиция', value: 'position' },
          ]"
          item-title="name"
          item-value="value"
        ></v-select>
        <Table
          @deleteEmploye="$store.commit('deleteEmploye', $event)"
          @openModalEditing="
            openModal($store.getters.getEmployeById($event.id))
          "
          :employees="filterData($store.state.employees)"
        />
      </v-container>
    </v-main>
    <ModalEmploye
      @changeEmploye="$store.commit('changeEmploye', $event)"
      @createEmploye="$store.commit('createEmploye', $event)"
      @closeModal="closeModal"
      @openModalCreate="openModal(null)"
      :employe="modalData"
      :isOpen="modalIsOpen"
    />
  </v-app>
</template>


<script>
import Table from "@/components/Table.vue";
import FormFilter from "@/components/FormFilter.vue";
import FormSort from "@/components/FormSort.vue";
import ModalEmploye from "@/components/ModalEmploye.vue";
import filterMixin from "@/mixins/filterMixins.vue";
import sortMixin from "@/mixins/sortMixin.vue";
import modalMixin from "@/mixins/modalMixin.vue";

export default {
  components: {
    Table,
    FormFilter,
    FormSort,
    ModalEmploye,
  },

  mixins: [filterMixin, sortMixin, modalMixin],

  created() {
    this.setSortData(this.$store.state.employees);
  },

  data() {
    return {};
  },
};
</script>
