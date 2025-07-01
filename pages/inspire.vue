<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
    <!-- Search and filter controls -->
    <v-row class="mb-4">
      <v-col cols="12" md="4">
        <v-text-field
          v-model="searchTitle"
          label="Search by Title"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="2">
        <v-text-field
          v-model.number="minPrice"
          label="Min Price"
          type="number"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="2">
        <v-text-field
          v-model.number="maxPrice"
          label="Max Price"
          type="number"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn @click="getData">Fetch Items</v-btn>
      </v-col>
    </v-row>
    <!-- <v-card>{{ apiResponse }}</v-card> -->
     <div v-for="item in products" :key="item.id" class="pa-4">Add commentMore actions
      <v-card class="d-inline-flex pa-2">
        <v-img max-height="150" max-width="250" :src="item.image"></v-img>
        <p>Title: {{ item.title }}</p>
        <p>Description: {{ item.description }}</p>
        <p>Price: {{ item.price }}<span>$</span></p>
      </v-card>
      <v-divider class="ma-4"></v-divider>
    </div>
    <v-divider class="my-5"></v-divider>
    <h2>Planets</h2>
    <div v-for="item in plannets" :key="item.id" class="pa-4">
      <v-card class="d-inline-flex pa-2">
        <v-img max-height="150" max-width="250" :src="item.image"></v-img>
        <p>Name: {{ item.name }}</p>
        <p>Description: {{ item.description }}</p>
        <p>Is Destroyed: {{ item.isDestroyed }}<span>$</span></p>
      </v-card>
      <v-divider class="ma-4"></v-divider>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "InspirePage",
  data() {
    return {
      apiResponse: null,
      apiError: null,
      searchTitle: '',
      minPrice: null,
      maxPrice: null,
    }
  },
 /* computed: {
    filteredItems() {
      if (!this.apiResponse) return [];
      return this.apiResponse.filter(item => { // [1,3,5,7,9, 4,8]
        const matchesTitle = this.searchTitle
          ? item.title.toLowerCase().includes(this.searchTitle.toLowerCase())
          : true;
        const matchesMin = this.minPrice !== null && this.minPrice !== ''
          ? item.price >= this.minPrice
          : true;
        const matchesMax = this.maxPrice !== null && this.maxPrice !== ''
          ? item.price <= this.maxPrice
          : true;
        return matchesTitle && matchesMin && matchesMax;
      });
    }
  },*/
  methods: {
    ...mapActions(["getProducts", "fetchData"]),
    
  },
  computed: {
      ...mapState(["products", "plannets"]),
    },
  async mounted() {
      await this.getProducts()
      await this.fetchData()
    },
}
</script>

<style></style>
