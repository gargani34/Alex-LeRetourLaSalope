<template>
    <div class="hello">
        <h1> Titre de l'annonce {{ $route.params.id }} </h1>
        <ul>
            <li> lala </li>
            <button>Delete </button>
            <li> lolo </li>
            <button>Delete </button>
            <li> lulu </li>
            <button>Delete </button>
            </ul>
            <button> + Add new step </button>
            <button>Delete this post it </button>
     </div>
</template>
<script>
export default {
  name: 'NoteDetails'
}

</script>
