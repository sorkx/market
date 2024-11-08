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

const checkInstall = computed(() => {
	return cart.isInstallationNeeded ? 'Да' : 'Нет'
})

const totalItems = computed(() => [
	{
		label: 'Сумма заказа',
		value: `${formattedSumPoducts.value} ₽`
	},
	{
		label: 'Количество',
		value: `${props.countProducts} шт`
	},
	{
		label: 'Установка',
		value: checkInstall.value
	}
])
</script>

<template>
	<div class="cart-total">
		<div class="cart-total__content">
			<div class="cart-total__title">
				Итого
			</div>
			<div class="cart-total__data">
				<div
					v-for="item in totalItems"
					:key="item.label" 
					class="cart-total__item"
				>
					<span class="cart-total__label">
						{{ item.label }}
					</span>
					<span class="cart-total__value">
						{{ item.value }}
					</span>
				</div>
			</div>

			<div class="cart-total__divider" />

			<div class="cart-total__total">
				<div class="cart-total__sum">
					<span class="cart-total__sum-title">
						Стоимость товаров
					</span>
					<span class="cart-total__sum-value">
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