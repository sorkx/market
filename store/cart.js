export const useCartStore = defineStore('cart', () => {
	const items = ref([
		{
			id: 1,
			title: 'Вытяжное устройство G2H',
			info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
			article: 'Артикул: G2H1065',
			price: 12644,
			img: '/_nuxt/assets/images/g2h.png',
			quantity: 1,
		},
		{
			id: 2,
			title: 'Вытяжное устройство BXC',
			info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
			article: 'Артикул: G2H1065',
			price: 25288,
			img: '/_nuxt/assets/images/bxs.png',
			quantity: 1,
		},
		{
			id: 3,
			title: 'Вытяжное устройство GHN',
			info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
			article: 'Артикул: G2H1065',
			price: 12644,
			img: '/_nuxt/assets/images/ghn.png',
			quantity: 1,
		}
	])
	
	const isInstallationNeeded = ref(false)

	const submitOrder = async () => {
		try {
			const orderData = {
				products: items.value,
				totalSum: totalAmout(),
				installation: isInstallationNeeded.value,
			}

			const response = await $fetch('/api/order', {
				method: 'POST',
				body: orderData
			})

			console.log('Заказ успешно оформлен:', response)
	  
			clearCart()
			  
			return response
		} catch (error) {
		  	console.error('Ошибка при отправке заказа:', error)
		  	throw error
		}
	}

	const toggleInstallation = () => {
		isInstallationNeeded.value = !isInstallationNeeded.value
	}

	const totalAmout = () => {
		return items.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
	}

	const totalItems = () => {
		return items.value.reduce((total, item) => total + item.quantity, 0)
	}

	const removeFromCart = (productId) => {
		items.value = items.value.filter(item => item.id !== productId)
	}

	const updateQuantity = (productId, newQuantity) => {
		const item = items.value.find(item => item.id === productId)

		if (item) {
		  item.quantity = newQuantity
		}
	}

	const clearCart = () => {
		items.value = []
	}

	return {
		items,
		totalAmout,
		isInstallationNeeded,
		totalItems,
		removeFromCart,
		updateQuantity,
		clearCart,
		toggleInstallation,
		submitOrder,
	}
})