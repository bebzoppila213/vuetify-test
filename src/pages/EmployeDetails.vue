<template>
    <div>
        <h2>Детальная информация</h2>
        <div>
            <span>Имя </span>
            <strong>{{employeItem.firstName}}</strong>
        </div>
        <div>
            <span>Фамилия </span>
            <strong>{{employeItem.lastName}}</strong>
        </div>
        <div>
            <span>Отчество </span>
            <strong>{{employeItem.patronymic}}</strong>
        </div>
        <div>
            <span>Должность </span>
            <strong>{{employeItem.position}}</strong>
        </div>
        <div>
            <span>Трудовая книжка </span>
            <strong>{{employeItem.employmentRecord}}</strong>
        </div>
        <div>
            <span>Оклад </span>
            <strong>{{employeItem.salary}}</strong>
        </div>
        <div>
            <span>Дата выхода на работу </span>
            <strong>{{employeItem.employmentDate}}</strong>
        </div>
        <div>
            <span>Ставка </span>
            <strong>{{employeItem.rate}}</strong>
        </div>
    </div>
</template>

<script>

export default{
    created(){
        this.employeItem = this.$store.getters.getEmployeById(Number(this.$route.params.id)) 
        console.log(this.employeItem);
    },

    data(){
        return{
            employeItem: {}
        }
    }
}

</script>