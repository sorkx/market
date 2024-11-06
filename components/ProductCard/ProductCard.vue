<script setup>
const props = defineProps({
	item: {
		type: Object,
		default: () => ({})
	}
})
</script>

<template>
	<div class="product-card">
		<div class="product-card__image">
			<img :src="item.img" />
		</div>
		<div class="product-card__content">
			<div class="product-card__info">
				<h4>
					{{ item.title }}
				</h4>
				<span>
					{{ item.info }}
				</span>
			</div>
			<div class="product-card__end">
				<div class="product-card__end-item">
					<span class="product-card__end-price">
						{{ item.price_to }} ₽ 
					</span>
					<div class="divider">–</div>
					<span class="product-card__end-price">
						{{ item.price_from }} ₽ 
					</span>
				</div>
				<div class="product-card__end-item">
					<span class="product-card__end-price euro">
						{{ item.euro_to }} € 
					</span>
					<div class="divider">–</div>
					<span class="product-card__end-price euro">
						{{ item.euro_from }} € 
					</span>
				</div>
			</div>
		</div>
		<VButton
			size="medium"
			appearance="fill"
			class="product-card-button"
		>
			Подробнее
		</VButton>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />