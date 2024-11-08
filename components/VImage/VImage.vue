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
	<img 
		:src="props.src"
		:alt="props.alt"
		:loading="props.loading"
	/>
</template>