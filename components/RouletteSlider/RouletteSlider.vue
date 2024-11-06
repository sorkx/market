<script setup>
const props = defineProps({
    items: {
        type: [Array, Object],
    },
})
</script>

<template>
	<div class="roulette-slider">
		<VSwiper class="swiper-wrapper">
			<SwiperSlide
				v-for="item in props.items"
				:key="item.id"
				class="swiper-slide"
			>
				<slot 
					:item="item" 
					name="slide" 
				/>
			</SwiperSlide>
		</VSwiper>
	</div>
</template>

<style src="./styles.scss" lang="scss" scoped />