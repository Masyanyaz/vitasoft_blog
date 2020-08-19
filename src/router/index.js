import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../pages/Home'),
	},
	{
		path: '/add-new-article',
		name: 'NewArticle',
		component: () => import('../pages/AddNewArticle'),
	},
	{
		path: '/post-:id',
		name: 'Article',
		component: () => import(/* webpackChunkName: "Article" */ '../pages/Article'),
	},
	{
		path: '/*',
		name: '404',
		component: () => import(/* webpackChunkName: "404" */ '../pages/NotFound'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
