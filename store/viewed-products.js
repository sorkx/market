export const useViewedProductsStore = defineStore('viewed-products', () => {
	const viewedProducts = reactive([
		{
			id: 1,
			title: 'G2H',
			subtitle: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/g2h.png'
		},
		{
			id: 2,
			title: 'BXC',
			subtitle: 'Вытяжное устройство для механической системы вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/bxs.png'
		},
		{
			id: 3,
			title: 'GHN',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/ghn.png'
		},
		{
			id: 4,
			title: 'TDA',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/tda.png'
		},
		{
			id: 5,
			title: 'G2H',
			subtitle: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: '643.86',
			img: '/_nuxt/assets/images/g2h.png'
		},
		{
			id: 6,
			title: 'BXC',
			subtitle: 'Вытяжное устройство для механической системы вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/bxs.png'
		},
		{
			id: 7,
			title: 'GHN',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/ghn.png'
		},
		{
			id: 8,
			title: 'TDA',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/tda.png'
		},
		{
			id: 9,
			title: 'G2H',
			subtitle: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/g2h.png'
		},
		{
			id: 10,
			title: 'BXC',
			subtitle: 'Вытяжное устройство для механической системы вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/bxs.png'
		},
		{
			id: 11,
			title: 'GHN',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/ghn.png'
		},
		{
			id: 12,
			title: 'TDA',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/tda.png'
		},
		{
			id: 13,
			title: 'G2H',
			subtitle: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/g2h.png'
		},
		{
			id: 14,
			title: 'BXC',
			subtitle: 'Вытяжное устройство для механической системы вентиляции',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: '643.86',
			img: '/_nuxt/assets/images/bxs.png'
		},
		{
			id: 16,
			title: 'GHN',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: '643.86',
			img: '/_nuxt/assets/images/ghn.png'
		},
		{
			id: 17,
			title: 'TDA',
			subtitle: 'Вытяжное устройство с датчиком присутствия',
			price_from: 6848,
			price_to: 56584,
			euro_from: 77.60,
			euro_to: 643.86,
			img: '/_nuxt/assets/images/tda.png'
		},
	])

	return {
		viewedProducts,
	}
})