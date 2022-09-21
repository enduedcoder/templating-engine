const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write(
          '<body><form action="/message" method="post"> <input type="text" name="message"><button type="submit">NItisha enter</button></form></body>'
        );
        res.write("</html>");
        return res.end();
      }
    
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunck) => {
          console.log(chunck);
          body.push(chunck);
        });
    
       return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];
          fs.writeFileSync("message.txt", message);
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      }
    
      res.setHeader("Content-type", "text/html");
      res.write("<html>");
      res.write("<head><title>My first page hjaha</title></head>");
      res.write("<body><h1>Hellow from node.js first app</h1></body>");
      res.write("</html>");
    
      res.end();
}


// module.exports = requestHandler;

// mdoule.exports={
//     handler: requestHandler,
//     someText: 'lalala'
// }

// module.exports.handler = requestHandler;
// module.exports.someText='testststs';

exports.handler = requestHandler;
exports.someText = 'some hard code';