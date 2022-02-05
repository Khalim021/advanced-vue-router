import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Brazil from "../views/Brazil.vue";
// import Hawaii from "../views/Hawaii.vue";
// import Jamaica from "../views/Jamaica.vue";
// import Panama from "../views/Panama.vue";

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: Home, 
  },

  {
    path: '/protected',
    name: 'protected',
    component: ()=> import('@/views/ProtectedPage.vue'),
    meta: {
      requiresAuth: true,
    }

  },

  {
    path: '/login',
    name:'login',
    component: ()=> import('@/views/Login.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=> import('@/views/NotFound.vue')
  },
  
  // { 
  //   path: "/about", 
  //   name: "About", 
  //   component: ()=> import(/* webpackChunkName: "About" */ "@/views/About.vue"),
  // },

  // { 
  //   path: "/brazil", 
  //   name: "Brazil", 
  //   component: ()=> import(/* webpackChunkName: "Brazil" */ "@/views/Brazil.vue"),
  // },
  // { 
  //   path: "/hawaii", 
  //   name: "Hawaii", 
  //   component: ()=> import(/* webpackChunkName: "Hawaii" */ "@/views/Hawaii.vue"), 
  // },
  // { 
  //   path: "/jamaica", 
  //   name: "Jamaica", 
  //   component: ()=> import(/* webpackChunkName: "Jamaica" */ "@/views/Jamaica.vue") 
  // },
  // { 
  //   path: "/panama", 
  //   name: "Panama", 
  //   component: ()=> import(/* webpackChunkName: "Panama" */ "@/views/Panama.vue"), 
  // },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: ()=> import('@/views/DestinationShow.vue'),
    props: route=> ({...route.params, id: parseInt(route.params.id)}),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: ()=> import('@/views/ExperienceShow.vue'),
        props: route=> ({...route.params, id: parseInt(route.params.id)})
      }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {top: 0}
  }
  // linkActiveClass: 'active-nav-color-mode',
});

router.beforeEach((to)=>{
  if(to.meta.requiresAuth && !window.user){
    return{name: 'login'}
  }
});

export default router;

