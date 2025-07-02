<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>

      <!-- API Demo Section -->
      <v-card class="mt-4">
        <v-card-title>API Demo</v-card-title>
        <v-card-text>
          <v-btn color="success" :loading="loading" @click="fetchData">
            Test API Call
          </v-btn>


         <!--<v-alert v-if="apiResponse" type="success" class="mt-3">
            API Response: {{ apiResponse }}
          </v-alert>-->
     <!--<div v-for="item in apiResponse" :key="item.id" class="pa-4">
     <v-card class="d-inline-flex pa-2"></v-card>
        <v-img max-height="150" max-width="250" :src="item.image"></v-img>
        <p> ID: {{ item.id }}</p>
        <p> Name: {{ item.name }}</p>
        <p> Description: {{ item.description }}</p>
        <p> Is Destroyed: {{ item.isDestroyed }}</p>
        <v-divider class="ma-4"></v-divider>
        </div> 

          <v-alert v-if="apiError" type="error" class="mt-3">
            API Error: {{ apiError }}
          </v-alert>
           <v-divider class="ma-4"></v-divider>-->
          <v-card class="pa-8">

            <!-- Table -->
          <v-card v-if="plannets.length > 0" class="mt-4">
          <template>
          <v-data-table 
          :headers="headers"
          :items="plannets"
          :per-page="5"
          :search="search"
          class="elevation-1"
          >
          <!--search-->
          <template v-slot:top>
          <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
        </template>
          <!--Image in table-->
         <template v-slot:item.image="{ item }">
            <v-img :src="item.image" max-height="50" max-width="50"></v-img>
          </template>
           <!--Is Destroyed in table-->
           <template v-slot:item.isDestroyed="{ item }">
            <v-chip :color="item.isDestroyed ? 'red' : 'green'" dark>
              {{ item.isDestroyed ? "Destroyed" : "Not Destroyed" }}
            </v-chip>
          </template>
           <!--Button View Details in table-->
           <template v-slot:item.actions="{ item }">
            <v-btn
              color="primary"
              @click="() => $router.push(`/plannets/${item.id}`)">
              View Details
            </v-btn>
          </template>

          </v-data-table>
          </template>
          </v-card>
          </v-card>
        </v-card-text>
     </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex"
  export default {
    name: "IndexPage",
    data() {
      return {
        search: "",
        loading: false,
        apiResponse: [],
        apiError: [],
        headers:[
          { text: 'ID', value: 'id' },
          { text: 'Plannet Image', value: 'image' },
          { text: 'Name', value: 'name' },
          { text: 'Description', value: 'description' },
          { text: 'Is Destroyed', value: 'isDestroyed' },
          { text: "Actions", value: "actions" },
          
        ],
      }
    },
  
    
    methods: {
     ...mapActions(["fetchData"]),
      
    
    },
   computed: {
      ...mapState(["plannets"]),
    },
     async mounted() {
      await this.fetchData()
    },
    
  }
</script>
<style>
  .labelTrue {
    color: red;
    font-weight: bold;
  }
</style>