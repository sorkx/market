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
			<VImage 
				:src="item.img" 
				:alt="item.subtitle"
				loading="lazy" 
			/>
		</div>
		<div class="product-card__content">
			<div class="product-card__info">
				<h4>
					{{ item.title }}
				</h4>
				<span>
					{{ item.subtitle }}
				</span>
			</div>
			<div class="product-card__end">
				<div class="product-card__item">
					<span class="product-card__price rub">
						{{ item.price_from }} ₽ 
					</span>
					<div class="divider">–</div>
					<span class="product-card__price rub">
						{{ item.price_to }} ₽ 
					</span>
				</div>
				<div class="product-card__item">
					<span class="euro">
						{{ item.euro_from }} € 
					</span>
					<div class="divider euro">–</div>
					<span class="euro">
						{{ item.euro_to }} € 
					</span>
				</div>
			</div>
		</div>
		<VButton
			data-size="medium"
			data-appearance="fill"
			class="product-card-button"
		>
			Подробнее
		</VButton>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />