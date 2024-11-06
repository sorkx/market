<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const props = defineProps({
	sumPoducts: {
		type: [String, Number],
		default: '',
	},
	countProduct: {
		type: [String, Number],
		default: '',
	}
})

const isLoading = ref(false)

const canSubmitOrder = computed(() => {
	return cart.items.length > 0
})

const handleOrderSubmit = async () => {
	if (!canSubmitOrder.value) {
		alert('Корзина пуста')
		return
	}

	try {
		isLoading.value = true
		await cart.submitOrder()

		navigateTo('/order-success')
	} catch (error) {
		alert('Произошла ошибка при оформлении заказа')
	} finally {
		isLoading.value = false
	}
}
</script>

<template>
	<div class="basket-total">
		<div class="basket-total__content">
			<div class="basket-total__title">
				Итого
			</div>
			<div class="basket-total__data">
				<div class="basket-total__data-item">
					<span>
						Сумма заказа
					</span>
					<span>
						{{ sumPoducts }} ₽
					</span>
				</div>
				<div class="basket-total__data-item">
					<span>
						Количество
					</span>
					<span>
						{{ countProduct }} шт
					</span>
				</div>
				<div class="basket-total__data-item">
					<span>
						Установка
					</span>
					<span>
						{{ cart.isInstallationNeeded ? 'Да' : 'Нет' }}
					</span>
				</div>
			</div>

			<div class="basket-total__divider" />

			<div class="basket-total__total">
				<div class="basket-total__total-sum">
					<span class="basket-total__total-sum-title">
						Сумма товаров
					</span>
					<span class="basket-total__total-sum-value">
						{{ sumPoducts }} ₽
					</span>
				</div>
			</div>
			<div class="basket-total__buttons">
				<VButton
					modificator="color-main"
					size="large"
					appearance="fill"
					:disabled="isLoading || !canSubmitOrder"
					 @click="handleOrderSubmit"
				>
					Оформить заказ
				</VButton>
				<VButton
					modificator="color-white"
					size="large"
					appearance="outline"
				>
					Купить в 1 клик
				</VButton>
			</div>
		</div>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />