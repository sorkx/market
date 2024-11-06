<template>
	<div class="order-success__container">
		<div class="order-success__content">
			<div class="order-success__icon">
				<IconsIconCheck />
			</div>
			
			<h1 class="order-success__title">Заказ успешно оформлен!</h1>
			
			<p class="order-success__message">
				Спасибо за ваш заказ. Мы отправили подтверждение на вашу электронную почту.
			</p>
			
			<div class="order-success__buttons">
				<NuxtLink 
					to="/" 
					class="order-success__button order-success__button--primary"
				>
					Вернуться на главную
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style>
	@import url("~/assets/styles/pages/order-success.scss");
</style>

  