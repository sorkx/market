<script setup>
const props = defineProps({
	src: {
		type: String,
		default: '',
	},
	alt: {
		type: String,
		default: '',
	},
	loading: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<img v-bind="$props" />
</template>