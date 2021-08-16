const fs = require("fs");

const RequestHandler = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Belajar node js</title> </head>");
    res.write(
      "<body><form action='pesan' method='POST' ><input type='text' name='pesan' ><button type='submit'>SEND</button></form></body>"
    );
    res.write(" </html>");
    return res.end();
  }
  if (url === "/pesan" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
      console.log(body);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      console.log(parsebody);
      const pesan = parsebody.split("=")[1];
      console.log(pesan);
      fs.writeFileSync("pesan.txt", pesan, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Belajar node js</title> </head>");
  res.write("<body><h1>Helo form nod js</h1></body>");
  res.write("</html>");
  res.end();
};
module.exports = {
  handler: RequestHandler,
};
// module.exports.handler=RequestHandler;
