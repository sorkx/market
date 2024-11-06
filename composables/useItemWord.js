export function useItemWord(cart) {
	const itemWord = computed(() => {
		const count = cart.totalItems()
		const cases = [2, 0, 1, 1, 1, 2]
		const titles = ['товар', 'товара', 'товаров']
		return titles[
		count % 100 > 4 && count % 100 < 20 
			? 2 
			: cases[Math.min(count % 10, 5)]
		]
	})
  
	return { 
		itemWord 
	}
  }