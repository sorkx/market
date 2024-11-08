<script setup>
const props = defineProps({
	img: {
		type: String,
		default: '',
	},
	quantity: {
		type: [String, Number],
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	subtitle: {
		type: String,
		default: '',
	},
	article: {
		type: String,
		default: '',
	},
	price_from: {
		type: [String, Number],
		default: '',
	},
	price_to: {
		type: [String, Number],
		default: '',
	},
	euro_from: {
		type: [String, Number],
		default: '',
	},
	euro_to: {
		type: [String, Number],
		default: '',
	},
	id: {
		type: [String, Number],
		default: '',
	},
})
</script>

<template>
	<div class="product-card">
		<div class="product-card__image">
			<VImage 
				:src="props.img" 
				:alt="props.subtitle"
				loading="lazy" 
			/>
		</div>
		<div class="product-card__content">
			<div class="product-card__info">
				<h4>
					{{ props.title }}
				</h4>
				<span>
					{{ props.subtitle }}
				</span>
			</div>
			<div class="product-card__end">
				<div class="product-card__item">
					<span class="product-card__price rub">
						{{ props.price_from }} ₽ 
					</span>
					<div class="divider">–</div>
					<span class="product-card__price rub">
						{{ props.price_to }} ₽ 
					</span>
				</div>
				<div class="product-card__item">
					<span class="euro">
						{{ props.euro_from }} € 
					</span>
					<div class="divider euro">–</div>
					<span class="euro">
						{{ props.euro_to }} € 
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