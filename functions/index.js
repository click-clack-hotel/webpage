const functions = require('firebase-functions');
const flamelink = require('flamelink')
var bodyParser = require('body-parser')
const cors = require('cors')({origin:true})
let nodemailer = require('nodemailer')
const app = flamelink({
  apiKey: "AIzaSyAOd_0kC0gr_8GJF4dKmPtCBXiioP6mP4w",
  authDomain: "click-clack-5db9f.firebaseapp.com",
  databaseURL: "https://click-clack-5db9f.firebaseio.com",
  projectId: "click-clack-5db9f",
  storageBucket: "click-clack-5db9f.appspot.com",
  messagingSenderId: "1072031155717"
})

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Click Clack cloud functions!");
});

exports.getLanding = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    app.content.get('landing')
      .then(function(content){
        var results = []
        results.push(content.citasBogota)
        results.push(content.citasMedellin)
        app.storage.getFile(content.bogota)
          .then(function(file){
            results.push(file.file)
          })
          .catch(error => console.error(error));
        app.storage.getFile(content.medellin)
          .then(function(file){
            results.push(file.file)
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
});

exports.getHomeBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    app.content.get('home')
      .then(function(home){
        var results = []
        results.push(home.vimeoLink)
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(results);
      })
      .catch(error => console.log(error))
  })
});

exports.getAboutBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    app.content.get('about')
      .then(function(content){
        var results = []
        results.push(content.textEnglish)
        results.push(content.textSpanish)
        app.storage.getFile(content.background)
          .then(function(file){
            results.push(file.file)
            app.storage.getFile(content.gallery[0])
              .then(function(file){
                results.push(file.file)
                app.storage.getFile(content.gallery[1])
                  .then(function(file){
                    results.push(file.file)
                    app.storage.getFile(content.gallery[2])
                      .then(function(file){
                        results.push(file.file)
                        var res = {
                          textEnglish:results[0],
                          textSpanish:results[1],
                          background:results[2],
                          gallery:[results[3],results[4],results[5]]
                        }
                        response.send(res)
                      })
                      .catch(error => console.error(error))
                  })
                  .catch(error => console.error(error))

              })
              .catch(error => console.error(error))
          })
          .catch(error => console.error(error))
      })
      .catch(error => console.log(error))
  })
})


exports.sendMailContact = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    var body = request.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'clickclackhotelweb@gmail.com',
          pass: 'cl1ckcl4ck$'
        }
    })
    var msg = '<h1>Hello '+body.name+'! thanks for contacting The Click Clack Hotel. \nWe will be in contact with you shortly!</h1>'
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'info@clickclackhotel.com',
      subject: 'Web Contact - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    var mailOptions2 = {
      from: 'clickclackhotelweb@gmail.com',
      to: body.clientMail,
      subject: 'Click Clack Hotel - '+body.areaInterest+' Contact',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    transporter.sendMail(mailOptions2, function(error, info){
      if (error) {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(error)
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
    })
  })
})



exports.sendMailEvents = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    var body = request.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'clickclackhotelweb@gmail.com',
          pass: 'cl1ckcl4ck$'
        }
    })
    var msg = '<h1>Hello '+body.name+'! we have received your reservation, we will be in contact shortly.</h1>'
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'eventos@clickclackhotel.com',
      subject: 'Events Booking',
      text: 'Booking Information\n\nName: '+body.name+'\nMail: '+body.clientMail+'\nNumber of persons: '+body.numberPersons+'\nSpace: '+body.space+'\nDate: '+body.date+'\nHour: '+body.hour+'\nPhone: '+body.phone+'\nMessage: '+body.message
    }
    var mailOptions2 = {
      from: 'clickclackhotelweb@gmail.com',
      to: body.clientMail,
      subject: 'Click Clack Hotel - Events Booking',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    transporter.sendMail(mailOptions2, function(error, info){
      if (error) {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(error)
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
    })
  })
})

exports.sendMailCiengramos = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    var body = request.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'clickclackhotelweb@gmail.com',
          pass: 'cl1ckcl4ck$'
        }
    })
    var msg = '<h1>Hello '+body.name+'! we have received your reservation, we will be in contact shortly.</h1>'
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'ciengramos@clickclackhotel.com',
      subject: 'Ciengramos Booking',
      text: 'Booking Information\n\nName: '+body.name+'\nMail: '+body.clientMail+'\nNumber of persons: '+body.numberPersons+'\nDate: '+body.date+'\nHour: '+body.hour+'\nPhone: '+body.phone+'\nMessage: '+body.message
    }
    var mailOptions2 = {
      from: 'clickclackhotelweb@gmail.com',
      to: body.clientMail,
      subject: 'Click Clack Hotel - Ciengramos Booking',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    transporter.sendMail(mailOptions2, function(error, info){
      if (error) {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(error)
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
    })
  })
})

exports.sendMail = functions.https.onRequest((request, response) => {
  var body = request.body
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carlosrincon01@gmail.com',
      pass: '040695.google'
    }
  })
  if (request.from === 'contact') {
    var msg = '<h1>Hello '+body.name+'! thank for contacting us, we will be in contact shortly</h1>'
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'ce.rincon10@uniandes.edu.co',
      subject: 'Events Booking',
      text: 'Booking\n\nName: '+body.name+'\nNumber of persons: '+body.numberPersons+'\nSpace: '+body.space+'\nDate: '+body.date+'\nHour: '+body.hour+'\nPhone: '+body.phone+'\nMessage: '+body.message
    }
    var mailOptions2 = {
      from: 'clickclackhotelweb@gmail.com',
      to: body.clientMail,
      subject: 'Click Clack Hotel - Events Booking',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
      transporter.sendMail(mailOptions2, function(error, info){
        if (error) {
          response.send(error)
        }
        else {
          response.send(200)
        }
      })
    })
  }
  else if (request.from === 'ciengramos') {
    /*var msg = '<h1>Hello '+body.name+'! we have received your booking, we will be in contact shortly.</h1>'
    var mailOptions = {
      from: 'carlosrincon01@gmail.com',
      to:  'ciengramos@clickclackhotel.com',
      subject: 'Ciengramos Booking',
      text: 'Booking\n\nName: '+body.name+'\nNumber of persons: '+body.numberPersons+'\nDate: '+body.date+'\nHour: '+body.hour+'\nPhone: '+body.phone+'\nMessage: '+body.message
    }
    var mailOptions2 = {
      from: 'carlosrincon01@gmail.com',
      to: body.clientMail,
      subject: 'Click Clack Hotel - Ciengramos Booking',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    transporter.sendMail(mailOptions2, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    response.send(200)*/
  }
  else if (request.from === 'events') {
    /*var msg = '<h1>Hello '+body.name+'! we have received your booking, we will be in contact shortly.</h1>'
    var mailOptions = {
      from: 'carlosrincon01@gmail.com',
      to:  'eventos@clickclackhotel.com',
      subject: 'Events Booking',
      text: 'Booking\n\nName: '+body.name+'\nNumber of persons: '+body.numberPersons+'\nSpace: '+body.space+'\nDate: '+body.date+'\nHour: '+body.hour+'\nPhone: '+body.phone+'\nMessage: '+body.message
    }
    var mailOptions2 = {
      from: 'carlosrincon01@gmail.com',
      to: body.clientMail,
      subject: 'Click Clack Hotel - Events Booking',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    transporter.sendMail(mailOptions2, function(error, info){
      if (error) {
        console.log(error);
      }
    })
    response.send(200)*/
  }
  else if (request.from === 'user') {
    var msg = '<h1>Hola '+body.name+'</h1>'
    var mailOptions = {
      from: 'carlosrincon01@gmail.com',
      to:  body.clientMail,
      subject: 'Click Clack Web',
      text: 'Click Clack!',
      html:  msg
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error)
      } else {
        response.send('Email sent to: '+body.clientMail+' \nResponse: ' + info.response)
      }
    })
  }
})
