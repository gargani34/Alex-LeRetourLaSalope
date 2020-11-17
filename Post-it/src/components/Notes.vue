<template>
<div class="hello">
<h1> Post-it App</h1>
<Note v-for="note in notes" v-bind:key="note.id" v-bind:id="note.id"/>
<br>
<button> + Add new post it </button>
</div>
</template>

<script>
/* eslint-disable */ 
import Note from './Note.vue'
export default {
  name: 'Notes',
  components: {
    Note
  },
  data () {
    return {
      notes: JSON.parse(localStorage.getItem('Notes'))
    }
  },
  methods: {
    add_new_post () {
      let notes = JSON.parse(localStorage.getItem('Notes'))
      note_id = notes.length() + 1
      notes.append({
        id: note_id,
        title: 'lalala',
        steps: ['tata', 'toto', 'titi']
      })
      localStorage.setItem('Notes', JSON.stringify(notes))
    }
  }
}
</script>
