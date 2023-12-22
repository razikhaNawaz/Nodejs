const http=require('http')

const server=http.createServer((req,res)=>{
    
    const url = req.url;
//   const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    res.end();
  }else if(url=== '/home'){
    res.write('<html>')
    res.write('<head><title>Home page</title></head>')
    res.write('<body><h1>Welcome to home Page</h1></body>')
    res.write('</html>')
    res.end();
  }else if(url=== '/About'){
    res.write('<html>')
    res.write('<head><title>About page</title></head>')
    res.write('<body><h1>Welcome to About us Page</h1></body>')
    res.write('</html>')
    res.end();
  }else if(url=== '/node'){
    res.write('<html>')
    res.write('<head><title>Node page</title></head>')
    res.write('<body><h1>Welcome to my node js Project</h1></body>')
    res.write('</html>')
    res.end();
  }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from my node.js server</h1></body>')
    res.write('</html>')
    res.end()
  
    
})
server.listen(3000)