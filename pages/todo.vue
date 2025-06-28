<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" class="mx-auto">
        <h2 class="mb-4">To-Do List</h2>


        <v-text-field
          v-model="newTask"
          label="Add a new task"
          @keyup.enter="addTask"
          append-icon="mdi-plus"
          @click:append="addTask"
          clearable
        ></v-text-field>


        <v-text-field
          v-model="filterText"
          label="Filter tasks"
          class="mb-4"
          clearable
        ></v-text-field>



        <v-list>
          <v-list-item
            v-for="(task, idx) in filteredTasks"
            :key="task.id"
            class="d-flex align-center"
          >
            <v-text-field
              v-if="editIndex === idx"
              v-model="editText"
              @keyup.enter="saveEdit(idx)"
              @blur="saveEdit(idx)"
              dense
              hide-details
              autofocus
            ></v-text-field>

            <span v-else @dblclick="startEdit(idx, task.text)" style="flex:1; cursor:pointer;">
              {{ task.text }}
            </span>
            
            <v-btn icon @click="removeTask(idx)"><v-icon>mdi-delete</v-icon></v-btn>
            <v-btn icon v-if="editIndex !== idx" @click="startEdit(idx, task.text)"><v-icon>mdi-pencil</v-icon></v-btn>
          </v-list-item>
        </v-list>
      
    
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TodoListPage",
  data() {
    return {
      tasks: [],
      newTask: '',
      filterText: '',
      editIndex: null,
      editText: '',
    }
  },
  computed: {
    filteredTasks() {
      if (!this.filterText) return this.tasks;
      return this.tasks.filter(task =>
        task.text.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
  },

  mounted() {
    const cached = localStorage.getItem('todo-tasks');
    if (cached) {
      this.tasks = JSON.parse(cached);
    }
  },

  methods: {
    addTask() {
      const text = this.newTask && this.newTask.trim();
      if (!text) return;
      this.tasks.push({ id: Date.now(), text });
      this.newTask = '';
      this.saveTasks();
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
      this.saveTasks();
    },
    startEdit(idx, text) {
      this.editIndex = idx;
      this.editText = text;
    },
    saveEdit(idx) {
      if (this.editText.trim()) {
        this.tasks[idx].text = this.editText.trim();
        this.saveTasks();
      }
      this.editIndex = null;
      this.editText = '';
    },
    saveTasks() {
      localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
    },
  },
}
</script>

<style scoped>
.v-list-item {
  border-bottom: 1px solid #eee;
}
</style>
