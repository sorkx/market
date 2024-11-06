<script setup>

const slidesPerView = ref(4)
const currentPage = ref(1)
const totalSlides = ref(null)
let swiper = null

const breakpoints = reactive({
    320: {
        slidesPerView: slidesPerView.value,
		spaceBetween: 57,
		slidesPerGroup: slidesPerView.value,
    }
})

const totalPages = computed(() => {
  return Math.ceil(totalSlides.value / slidesPerView.value)
})

const onSwiper = (swiperInstance) => {
  swiper = swiperInstance
  totalSlides.value = swiperInstance.slides.length
}

const onSlideChange = () => {
  if (swiper) {
    currentPage.value = Math.ceil(swiper.realIndex / slidesPerView.value + 1)
  }
}
</script>

<template>
	<div class="swiper-container">
		<div class="swiper-controls">
			<SwiperButton class="v-swiper__button v-swiper__button--prev left" />
			<div class="swiper-pagination">
				<span class="current">
					{{ currentPage }}
				</span>
				<div class="divider">
					/
				</div>
				<span class="total">
					{{ totalPages }}
				</span>
			</div>
			<SwiperButton class="v-swiper__button v-swiper__button--next" />
		</div>

		<Swiper
			class="v-swiper"
			:modules="[SwiperNavigation]"
			mode="vertical"
			lazy="true"
			:breakpoints="breakpoints"
			:navigation="{
				nextEl: '.v-swiper__button--next',
				prevEl: '.v-swiper__button--prev'
			}"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
	
			<slot />
	
		</Swiper>
	</div>
  </template>
  

<style src="./styles.scss" lang="scss" scoped />