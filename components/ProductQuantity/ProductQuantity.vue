<script setup>
const props = defineProps({
	quantity: {
		type: [String, Number],
		default: '',
	}
})

const emit = defineEmits(['increase', 'decrease'])

const increase = (item) => {
	emit('increase', item)
}

const decrease = (item) => {
	emit('decrease', item)
}

</script>

<template>
	<div class="quantity">
		<VButton
			modificator="color-gray"
			size="quantity"
			class="quantity__button minus"
			@click="decrease()"
		>
			<IconsIconMinus />
		</VButton>
		<div class="quantity-count">
			<div class="quantity-count__value">
				{{ props.quantity }}
			</div>
		</div>
		<VButton
			modificator="color-gray"
			size="quantity"
			class="quantity__button plus"
			@click="increase()"
		>
			<IconsIconPlus />
		</VButton>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />