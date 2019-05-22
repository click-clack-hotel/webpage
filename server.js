let express = require('express')
let path = require('path')
let nodemailer = require('nodemailer')
var cors = require('cors')
var bodyParser = require('body-parser')

var flamelink = require('flamelink')
const app = flamelink({
  apiKey: "AIzaSyAOd_0kC0gr_8GJF4dKmPtCBXiioP6mP4w",
  authDomain: "click-clack-5db9f.firebaseapp.com",
  databaseURL: "https://click-clack-5db9f.firebaseio.com",
  projectId: "click-clack-5db9f",
  storageBucket: "click-clack-5db9f.appspot.com",
  messagingSenderId: "1072031155717"
})

let server = express();
server.listen(3030, function() {
 console.log("Server listening on port: 3030")
});
server.use(cors());
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
server.use(express.static(path.resolve(__dirname,'./public' )));

server.get('/getLanding',cors(),function(req,response){
  response.status(200)
  app.content.get('landing')
    .then(function(landing){
      var results = []
      results.push(landing.citasBogota)
      results.push(landing.citasMedellin)
      app.storage.getFile(landing.bogota)
        .then(function(file){
          results.push(file.file)
        })
        .catch(error => console.error(error));
      app.storage.getFile(landing.medellin)
        .then(function(file){
          results.push(file.file)
          console.log(results);
          response.setHeader('X-Frame-Options', 'ALLOWALL');
          response.setHeader('Access-Control-Allow-Origin', '*');
          response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
          response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          response.send(results);
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.log(error))
})

server.post('/sendMail',cors() , function (req, res){
  res.sendStatus(200)
  sendMail(req.body)
  //sendMail('ce.rincon10@uniandes.edu.co')
})

function sendMail(body){
  console.log(body);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carlosrincon01@gmail.com',
      pass: '040695.google'
    }
  })
  var msg = '<h1>Hola '+body.name+'</h1>'
  var mailOptions = {
    from: 'carlosrincon01@gmail.com',
    to: body.clientMail,
    subject: 'Mail Test',
    text: 'Click Clack!',
    attachments:[{
      filename: 'bang.png',
      path: __dirname + '/public/assets/img/bang.png',
      cid: 'picture'
    }],
    html:  msg
  }
  //    html: { path: 'public/template.html' }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent to: '+ email + '\nResponse: ' + info.response)
    }
  });
}
