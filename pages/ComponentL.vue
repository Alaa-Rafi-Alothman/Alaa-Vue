<template>
<div>
    <v-container>
        <h2> Re-usable Components Lesson </h2>
        <div class="d-flex pa-4" v-for="item in apiResponse" :key="item.id">
            <v-card class="pa-2" @click="openDialog(item)">
                <v-img max-height="150" max-width="250" :src="item.image"></v-img>
                <p>{{ item.name }}</p>
            </v-card>
        </div>
    </v-container>
    <CardComponent :dialog="dialog" :selectedItem="selectedItem"/>
</div>
</template>

<script>
import CardComponent from"../Components/CardComponent.vue"
export default{
    name:"ComponentL",
    components: {CardComponent},
    layout:"defualt",
    data(){
        return{
            dialog:false,
            loading:false,
            apiResponse:[],
            apiError:null,
            selectedItem:{},
        }
    },
    methods:{
        openDialog(item) {
        this.selectedItem = item
        this.dialog = true
        console.log(this.selectedItem)
      },
        closeDialog(){
            this.dialog=false
        },
        async fetchPlanets(){
            this.loading=true
            this.apiResponse=null
            this.apiError=null
        
        try {
          // Example API call using the configured axios instance
          const response = await this.$axios.get(
           "https://dragonball-api.com/api/planets"
      
          )
          this.apiResponse = response.data.items
        } catch (error) {
          this.apiError = error.message
        } finally {
          this.loading = false
        }
    },
    },
    computed:{},
    async mounted(){
        await this.fetchPlanets()
    },
}


</script>