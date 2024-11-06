<script setup>
const props = defineProps({
	modificator: {
		type: String,
		default: '',
	},
	size: {
		type: String,
		default: '',
	},
	appearance: {
		type: String,
		default: '',
	}
})
</script>

<template>
	<button 
		class="v-button"
		:class="`v-button--${props.modificator}`"
		:data-size="props.size"
		:data-appearance="props.appearance"
	>
		<slot />
	</button>
</template>

<style src="./styles.scss" lang="scss" scoped />