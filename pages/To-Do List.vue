<template>
    <div>
        <h2>To-Do List</h2>

        <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask"/>
        <button @click="addTask">+</button>

        <input v-model="filterText" placeholder="Filter tasks"/>
        <ul>
           <li v-for="(task, index) in filteredTasks" :key="index">
                <span>{{ task.text }}</span>

                <div>
                    <button @click="editTask(index)">✏️</button>
                    <button @click="deleteTask(index)">🗑️</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
            newTask:'',
            filterText:'',
            tasks:[
                {text:'Watch TV'},
                {text:'Study JS'},
                {text:'Prepare for meeting'}
            ]

        };
    },
    computed:{
        filteredTasks(){
            return this.tasks.filter(task =>
                task.text.toLowerCase().includes(this.filterText.toLowerCase())
            );
        }
    },
    methods:{
        addTask(){
            if(this.newTask.trim()!==''){
                this.tasks.push({text:this.newTask});
                this.newTask='';
            }
        },
        deleteTask(index){
            this.tasks.splice(index,1);
        },
        editTask(index){
            const updatedText=prompt('Edit task:',this.tasks[index].text);
            if(updatedText!==null){
                this.tasks[index].text=updatedText;
            }
        }
    }
};
</script>
