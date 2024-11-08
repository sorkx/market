<script setup>
const props = defineProps({
	modificator: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<button 
		class="v-button"
		:class="`v-button--${props.modificator}`"
		v-bind="$attrs"
	>
		<slot />
	</button>
</template>

<style src="./styles.scss" lang="scss" scoped />