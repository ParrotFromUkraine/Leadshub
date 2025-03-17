const express = require('express')
const app = express()
const port = 5000

// Разрешаем обработку JSON
app.use(express.json())

// Главная страница
app.get('/', (req, res) => {
	res.send('Привет, мир! Сервер работает!')
})

// Пример API маршрута
app.get('/api/data', (req, res) => {
	res.json({ message: 'Это данные с сервера', status: 'success' })
})

// Запуск сервера
app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`)
})
