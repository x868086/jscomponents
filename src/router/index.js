import Vue from 'vue';
import Router from 'vue-router';

import cart from '@/components/cartvuex.vue';
import tab from '@/components/tab.vue';
import table from '@/components/table.vue';
import questions from '@/components/questions.vue';
import inputnumber from '@/components/inputnumber.vue';


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path:'/tab',
      name:'tab',
      component:tab
    },
    {
      path:'/table',
      name:'table',
      component:table
    },
    {
      path:'/questions',
      name:'questions',
      component:questions
    },
    {
      path:'/inputnumber',
      name:'inputnumber',
      component:inputnumber
    }
  ]
})
