<script>
export default{
    data(){
        return{
            filterValue: ""
        }
    },

    methods: {
        updateFilterValue(newFilterValue){
            this.filterValue = newFilterValue.value
        },

        filterData(data = []){
            return data.filter(dataItem => Object.keys(dataItem).some((key) => String(dataItem[key]).toLowerCase().includes(this.filterValue.toLowerCase())))
        }
    }
}
</script>