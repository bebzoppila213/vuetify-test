<template>
  <div class="text-center">
    <v-btn @click="$emit('openModalCreate')" color="primary">Добавить сотрудника</v-btn>

    <v-dialog @update:modelValue="$emit('closeModal')" :modelValue="isOpen" width="auto">
      <v-sheet width="500" class="mx-auto pa-6">
        <FormEmploye @submitForm="formSubmit" :employe="employe" />
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
import FormEmploye from "./FormEmploye.vue";
export default {
  props: ["isOpen", "employe"],
  components: { FormEmploye },

  methods: {
    formSubmit(formData){
       if(this.employe) this.$emit("changeEmploye", formData)
       else this.$emit("createEmploye", formData)
    }
  },
};
</script>