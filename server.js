const express = require('express')
const ngrok = require('ngrok')

const app = express()
const port = 5000

// Разрешаем обработку JSON
app.use(express.json())

// Отображаем содержимое index.js при заходе на сервер
app.get('/', (req, res) => {
	res.send('Привет, мир! Этот сервер работает через ngrok!')
})

// Запуск сервера
app.listen(port, async () => {
	console.log(`Сервер запущен на http://localhost:${port}`)

	// Автоматически запускаем ngrok
	const url = await ngrok.connect(port)
	console.log(`Сервер доступен через: ${url}`)
})
