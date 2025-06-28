<template>
  <v-contianer>
    <!-- Search and filter controls -->
    <v-text-field v-model="searchName" label="Search by Name" clearable></v-text-field>
    <v-btn @click="getData">Fetch Data</v-btn>
    <!-- <v-card>{{ apiResponse }}</v-card> -->
    <div v-for="item in filteredItems" :key="item.id" class="pa-4">
        <v-img max-height="150" max-width="250" :src="item.image"></v-img>
        <p> ID: {{ item.id }}</p>
        <p> Name: {{ item.name }}</p>
        <p> Description: {{ item.description }}</p>
        <p> Is Destroyed: {{ item.isDestroyed }}</p>
      <v-divider class="ma-4"></v-divider>
    </div>
  </v-contianer>
</template>

<script>
export default {
  name: "l2",
  data() {
    return {
      loading: false,
      apiResponse: null,
      apiError: null,
      searchName: '',
      searchIsDestroyed:'',
    }
  },
  computed: {
    filteredItems() {
      if (!this.apiResponse) return [];
      return this.apiResponse.filter(item => {
        const matchesName = this.searchName
          ? item.name.toLowerCase().includes(this.searchName.toLowerCase())
          : true;
        return matchesName;
      });
    },

  },
    
  
  methods: {
    async getData() {
      this.apiResponse = null

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
 
  
}
</script>