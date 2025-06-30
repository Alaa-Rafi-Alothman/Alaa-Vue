<template>
  <v-container>
    <h2>Hello Planet {{ this.$route.params.id }}</h2>


  
  <button @click="goBack"> <v-icon>mdi-arrow-left</v-icon></button>

  </v-container>
</template>

<script>

  export default {
    name: "PlannetsPage",

  methods: {
    goBack() {
      this.$router.go(-1); // Goes one step back in browser history
    }
  }
}
</script>
