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
	price: {
		type: [String, Number],
		default: '',
	},
	id: {
		type: [String, Number],
		default: '',
	},
	originalPrice: {
		type: [String, Number],
		default: '',
	}
})

const emit = defineEmits(['remove'])

const remove = (id) => {
	emit('remove', id)
}

const item = computed(() => ({
	id: props.id,
	price: props.price,
	img: props.img,
	quantity: props.quantity,
	title: props.title,
	subtitle: props.subtitle,
	article: props.article,
	originalPrice: props.originalPrice,
}))
</script>

<template>
	<div class="cart-product-card">
		<div class="cart-product-card__image">
			<VImage 
				:src="props.img"
				:alt="props.title" 
				loading="eager"
			/>
		</div>
		<div class="cart-product-card__info">
			<span>
				<h4>
					{{ props.title }}
				</h4>
			</span>
			<span class="cart-product-card__subtitle">
				{{ props.subtitle }}
			</span>
			<span class="cart-product-card__article">
				{{ props.article }}
			</span>
		</div>
		<div class="cart-product-card__quantity">
			<ProductQuantity 
				:quantity="props.quantity"
				:item="item"
			/>
			<div class="cart-product-card__original-price">
				<span v-if="props.quantity > 1">
					{{ props.originalPrice }} ₽/шт. 
				</span>
			</div>
		</div>
		<div class="cart-product-card__end">
			<span class="cart-product-card__price">
				{{ props.price }} ₽
			</span>
		</div>
		<div class="cart-product-card__action">
			<VButton
				data-appearance="text"
				data-size="normal"
				class="cross"
				@click="remove(props.id)"
			>
				<IconsIconCross />
			</VButton>
		</div>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />