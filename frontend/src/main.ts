import {createApp} from 'vue'
import * as VueRouter from 'vue-router';
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';

const routes = [
    { path: '/', component: HelloWorld, name: "Home" },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
