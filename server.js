const http = require('http') ;

const server = http.createServer((req, res) => {
    // console.log(req) ;
    // console.log("Method : ", req.method)
    // console.log("URL : ", req.url)
    // console.log(req.headers);

    // res.end('Hello, World! This is my first backend app.')
}) ;

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})