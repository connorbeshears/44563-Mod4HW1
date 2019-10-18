const http = require('http')


const hostname = process.env.hostname || '0.0.0.0' 
const port = process.env.PORT || 3002

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Hello...\n')
  res.write('Hello...\n')
  res.end('Hello World, welcome to server\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`)
})