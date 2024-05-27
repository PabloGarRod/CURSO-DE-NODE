const http = require('http')

const servidor = http.createServer((req, res) => {
console.log('==> res (respuesta)')
res.setHeader('content-type', 'application/json')
console.log(res.getHeaders())

res.end('Hola mundo')
});

const PUERTO = 3000

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${PUERTO}...`)
});