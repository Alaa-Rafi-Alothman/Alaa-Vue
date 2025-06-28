<template>
  <v-container>
    <v-text-field v-model="searchIsDestroyed" label="Is Destroyed (true/false)" clearable></v-text-field>
    <v-btn @click="getData1">Fetch</v-btn>

    <div v-for="item in filteredItems1" :key="item.id" class="pa-4">
        <v-img max-height="150" max-width="250" :src="item.image"></v-img>
        <p> ID: {{ item.id }}</p>
        <p> Name: {{ item.name }}</p>
        <p> Description: {{ item.description }}</p>
        <p> Is Destroyed: {{ item.isDestroyed }}</p>
      <v-divider class="ma-4"></v-divider>
    </div>
    </v-container>
</template>
<script>
export default {
  name: "l3",
  data() {
    return {
      loading: false,
      apiResponse: null,
      apiError: null,
      searchIsDestroyed:'',
    }
  },
  computed: {
filteredItems1() {
  if (!this.apiResponse) return [];

  let boolFilter;
  if (this.searchIsDestroyed === "true") boolFilter = true;
  else if (this.searchIsDestroyed === "false") boolFilter = false;
  else boolFilter = null;

  return this.apiResponse.filter(item => {
    if (boolFilter === true || boolFilter === false) {
      return item.isDestroyed === boolFilter;
    }
    return true;
  });
}
},
methods: {
    async getData1() {
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