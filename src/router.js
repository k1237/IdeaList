
import { createRouter, createWebHistory } from 'vue-router'
import Idea from './components/Idea.vue'
import Schedule from './components/Schedule.vue'
import Excuted from './components/Excuted.vue'
import Memo from './components/Memo.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'idea',
      components:{
        idea:Idea,
      } 
    },

    {
      path: '/schedule',
      name: 'schedule',
      components:{
        schedule:Schedule,
      }
    },

    {
      path: '/excuted',
      name: 'excuted',
      components: {
        excuted:Excuted,
      }
    },

    {
      path: '/memo',
      name: 'memo',
      components: {
        memo:Memo,
      }
    },
  ],
})