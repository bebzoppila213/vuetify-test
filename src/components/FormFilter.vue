<template>
  <v-form @submit.prevent="submitForm">
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="value"
          label="Поле фильтрации"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn type="submit" block class="mt-2">Фильтрация</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      valid: false,
      value: "",
    };
  },

  methods: {
    submitForm(){
        this.$emit("formSubmit", {value: this.value})
    }
  }
};
</script>