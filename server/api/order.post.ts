export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	try {
		return {
		status: 'success',
		message: 'Заказ успешно создан',
		order: body
	}
	} catch (error) {
		throw createError({
		statusCode: 400,
		statusMessage: 'Ошибка при создании заказа'
		})
	}
  })