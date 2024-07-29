import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { i18n } from '@/main';
import Home from '@/views/Home.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import { checkLocalizationOnRouting } from '@/locales/i18n';
import { storePathOnNavigation } from '@/main';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/page-not-found',
		name: 'PageNotFound',
		component: PageNotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	checkLocalizationOnRouting(to, i18n);
	storePathOnNavigation(to, from);

	return next();
});

export default router;
