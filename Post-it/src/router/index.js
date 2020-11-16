import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@components/Notes'
import NoteDetails from '@components/NoteDetails'

Vue.use(Router)
export default new Router ({
    routes: [
{
    path: '/',
    name: 'Notes',
    component : Notes
},
{
    path: '/notes/:id',
    name: 'NoteDetails',
    component: NoteDetails
}
    ]
})