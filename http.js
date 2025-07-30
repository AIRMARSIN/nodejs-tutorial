const http = require('http');

const name = "victor";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page ' + name)
    } else if (req.url === '/about') {
        res.end('here is our short history ' + name)
    } else {
        res.end(
            `<h1>opps! ${name}<h1>
            <p>we can not find the page you are looking for</p>
            <a href="/">back home</a>`)
    }
})

server.listen(9000)