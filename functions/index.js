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
});


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
});

exports.sendMailEventsMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'eventosmedellin@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});

exports.sendMailBookingsMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'reservas@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});


exports.sendMailSuppliersMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'compras@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});


exports.sendMailMarketingMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'comunicaciones@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});


exports.sendMailRestaurantMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'aybmedellin@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});

exports.sendMailFrontDeskMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'fdmmedellin@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});

exports.sendMailGuestServiceMedellin = functions.https.onRequest((request, response) => {
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
    var mailOptions = {
      from: 'clickclackhotelweb@gmail.com',
      to:  'guestservicemedellin@clickclackhotel.com',
      subject: 'Web Contact Medellín - '+body.areaInterest,
      text: 'From: '+body.name+'\nMail: '+body.clientMail+'\nMessage: '+body.message
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        response.send(error);
      }
      else {
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(200)
      }
  })
})});

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
});

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
