
import { createRouter, createWebHistory } from 'vue-router'
import Idea from './components/Idea.vue'
import Schedule from './components/Schedule.vue'
import Excuted from './components/Excuted.vue'
import Memo from './components/Memo.vue'
import Howto from './components/howto.vue'
import Tos from './components/tos.vue'
import Privacy from './components/privacy.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/IdeaList',
      name: 'idea',
      components:{
        idea:Idea,
      } 
    },

    {
      path: '/IdeaList/schedule',
      name: 'schedule',
      components:{
        schedule:Schedule,
      }
    },

    {
      path: '/IdeaList/excuted',
      name: 'excuted',
      components: {
        excuted:Excuted,
      }
    },

    {
      path: '/IdeaList/memo',
      name: 'memo',
      components: {
        memo:Memo,
      }
    },

    {
      path: '/IdeaList/howto',
      name: 'howto',
      components: {
        howto:Howto,
      }
    },

    {
      path: '/IdeaList/tos',
      name: 'tos',
      components: {
        tos:Tos,
      }
    },

    {
      path: '/IdeaList/privacy',
      name: 'privacy',
      components: {
        privacy:Privacy,
      }
    },
  ],
})