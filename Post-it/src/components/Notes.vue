<template>
    <div class="hello">
        <h1>Post-it App</h1>
        <Note v-for="note in notes" :key="note.id" :id="note.id"/>

        <br>
        <button> + Add new post it </button>

    </div>
</template>

<script>
    import Note from "./Note.vue"
    export default {
        name:'Notes',
        components : {
            Note
        },
    data() {
        return{
            notes: JSON.parse(localStorage.getItem("notes"))
        }
    }
    }
</script>