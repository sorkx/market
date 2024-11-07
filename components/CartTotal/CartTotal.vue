<script setup>
import { useCartStore } from '~/store/cart'

const cart = useCartStore()

const props = defineProps({
	sumPoducts: {
		type: [String, Number],
		default: '',
	},
	countProducts: {
		type: [String, Number],
		default: '',
	}
})

const isLoading = ref(false)

const formattedSumPoducts = computed(() => {
	return props.sumPoducts.toLocaleString('ru-RU')
})

const canSubmitOrder = computed(() => {
	return cart.items.length > 0
})

const handleOrderSubmit = async () => {
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
	<div class="cart-total">
		<div class="cart-total__content">
			<div class="cart-total__title">
				Итого
			</div>
			<div class="cart-total__data">
				<div class="cart-total__data-item">
					<span>
						Сумма заказа
					</span>
					<span class="total">
						{{ formattedSumPoducts }} ₽
					</span>
				</div>
				<div class="cart-total__data-item">
					<span>
						Количество
					</span>
					<span class="total">
						{{ countProducts }} шт
					</span>
				</div>
				<div class="cart-total__data-item">
					<span>
						Установка
					</span>
					<span class="total">
						{{ cart.isInstallationNeeded ? 'Да' : 'Нет' }}
					</span>
				</div>
			</div>

			<div class="cart-total__divider" />

			<div class="cart-total__total">
				<div class="cart-total__total-sum">
					<span class="cart-total__total-sum-title">
						Стоимость товаров
					</span>
					<span class="cart-total__total-sum-value">
						{{ formattedSumPoducts }} ₽
					</span>
				</div>
			</div>
			<div class="cart-total__buttons">
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
					:disabled="!canSubmitOrder"
				>
					Купить в 1 клик
				</VButton>
			</div>
		</div>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />