const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.set('view engine', 'ejs');

  app.listen(4000);
  console.log("Server listen to port 5000");
// const sslServer = https.createServer({
//   key : fs.readFileSync(rootPath.join(__dirname,'ssl/uniqsoft','server.key')),
//   cert : fs.readFileSync(rootPath.join(__dirname,'ssl/uniqsoft','uniqsoft.pem')),
//   ca : fs.readFileSync(rootPath.join(__dirname,'ssl/uniqsoft','ssl-bundel.crt')),
// },app)
// sslServer.listen(3031)
