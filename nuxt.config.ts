// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	css: ["~/assets/styles/main.scss"],
	modules: [
		'nuxt-swiper', 
		'@pinia/nuxt',
	],
    swiper: {
       modules: ['navigation', 'pagination'],
    },
})