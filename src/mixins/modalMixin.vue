<script>

export default{

    data(){
        return{
            modalIsOpen: false,
            modalData: null
        }
    },

    methods:{
        openModal(modalData){
            this.modalIsOpen = true
            // нужно перебить ссылку, иначе данные изменяются в реал тайме
            this.modalData = JSON.parse(JSON.stringify(modalData))
        },

        closeModal(){
            this.modalIsOpen = false
            this.modalData = null
        }
    }
}
</script>