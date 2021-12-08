const http =require('http');

const server =http.createServer((request, respon) => {
    respon.writeHead(200, { 'content-type': 'text/html' });
    const read = request.url
    if (read === '/about'){
        respon.write("Welcome to about us page")
        respon.end();
    }
    else if (read === '/contact'){
        respon.write("Welcome to contact us page")
        respon.end();
    }
    else{
        respon.write("Hello world");
        respon.end();
    }
});

server.on("listening", () => {
  console.log('port 8000');
});

server.listen(8000);