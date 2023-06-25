<template>
  <v-form @submit.prevent="formSubmit" v-model="valid">
    <v-text-field
      :rules="textRules"
      required
      v-model="employeData.firstName"
      label="Имя"
    ></v-text-field>
    <v-text-field
      :rules="textRules"
      required
      v-model="employeData.lastName"
      label="Фамилия"
    ></v-text-field>
    <v-text-field
      :rules="textRules"
      required
      v-model="employeData.patronymic"
      label="Отчество"
    ></v-text-field>
    <v-text-field
      :rules="textRules"
      required
      v-model="employeData.position"
      label="Должность"
    ></v-text-field>
    <v-checkbox
      v-model="employeData.employmentRecord"
      label="Трудовая книжка сдана"
    ></v-checkbox>
    <div>
      <div class="text-caption">Оклад</div>
      <v-slider required v-model="employeData.salary" thumb-label></v-slider>
    </div>
    <v-text-field
      required
      :rules="textRules"
      v-model="employeData.employmentDate"
      label="Дата выхода на работу"
      type="date"
    ></v-text-field>
    <v-select
      required
      v-model="employeData.rate"
      label="Ставка"
      :rules="textRules"
      :items="['Полная', 'Половина']"
    ></v-select>
    <v-btn v-if="!employe" type="submit" block class="mt-2">Создать</v-btn>
    <v-btn v-else type="submit" block class="mt-2">Изменить</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    employe: {
      default: () => ({
        firstName: "",
        lastName: "",
        patronymic: "",
        position: "",
        employmentRecord: false,
        salary: 0,
        employmentDate: "",
        rate: "",
      }),
    },
  },
  data() {
    return {
      valid: false,
      employeData: {...this.employe},

      textRules: [
        (value) => {
          if (value) return true;

          return "Обязательное значение";
        },
        (value) => {
          if (value?.length >= 3) return true;

          return "Поле должно содержать больше символов";
        },
      ],
    };
  },

  methods: {
    formSubmit() {
        if(this.valid){
            this.$emit("submitForm", this.employeData);
        }
      
    },
  },
};
</script>