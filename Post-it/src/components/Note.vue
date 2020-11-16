<template>
    <div class="hello">
        <h1> {{ title }} </h1>
        <ul>
            <li v-for="step in steps" :key="step" > {{ step }} </li>
        </ul>
        <input type="text" placeholder="+ Add new step" />
     </div>
</template>

<script>
    export default {
        name:'Notes',
        props: {
            id: {
            type : Number,
            required: true,
            }
        },
    data() {
        return{
            title: String,
            steps: Array,
        };
    },
    created(){
    this.title = JSON.parse(localStorage.getItem("notes"))[this.id - 1].title;
    this.title = JSON.parse(localStorage.getItem("notes"))[this.id - 1].steps;
    },
    };
</script>