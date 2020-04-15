import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
	const routes = [
	{
		path: '/registro',
		name: 'registro',
		component: () => import('../views/Registro.vue')
	},
	{
		path: '/',
		name: 'inicio',
		component: () => import('../views/Inicio.vue')
	}  
]

const router = new VueRouter({
	mode: 'history',
  	base: process.env.BASE_URL,
  	routes
})

export default router