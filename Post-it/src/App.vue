<template>
  <div id="app">
  <NoteDetails/>
  <router-view/>
  </div>
</template>

<script>
import NoteDetails from '@/components/NoteDetails.vue'
export default {
  name: 'App',
  components: {
    NoteDetails
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
