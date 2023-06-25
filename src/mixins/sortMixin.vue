<script>

export default {
    data(){
        return{
            sortKey: "",
            sortData: []
        }
    },

    methods: {
        setSortData(newSortData){
            this.sortData = newSortData
        },
    },

    watch: {
        sortKey(){
            this.sortData.sort((el1, el2) => String(el1[this.sortKey]).localeCompare(String(el2[this.sortKey])))
        }
    }
}

</script>