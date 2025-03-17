const express = require('express')
const ngrok = require('ngrok')
const path = require('path')

const app = express()
const port = 5000

// Раздача статических файлов из папки "public"
app.use(express.static(path.join(__dirname, 'public')))

// Отображение главной страницы
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Запуск сервера
app.listen(port, async () => {
	console.log(`Сервер запущен на http://localhost:${port}`)

	// Автоматически запускаем ngrok
	const url = await ngrok.connect(port)
	console.log(`Сервер доступен через: ${url}`)
})
