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
  storageBucket: "click-clack-5db9f.appspot.com/",
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
      .then(function(data){
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(data);
      })
      .catch(error => console.log(error))
  })
});

exports.getWhatsApp = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    app.content.get('whatsApp')
      .then(function(data){
        response.setHeader('X-Frame-Options', 'ALLOWALL');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
        response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        response.send(data);
      })
      .catch(error => console.log(error))
  })
});

exports.getHomeMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('homeMed')
      .then(function(home){
        if (home.background != undefined) {
          app.storage.getFile(home.background)
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            home.background = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            response.send(home);
          }).catch(error => console.log(error))
        } else {
          response.send(home);
        } 
      })
      .catch(error => console.log(error))
  })
});

exports.getRestaurantBarBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('restaurantAndBar')
      .then(function(data){
        if (data.ciengramos.image != undefined && data.apache.image != undefined) {
          app.storage.getFile(data.ciengramos.image)
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.ciengramos.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            app.storage.getFile(data.apache.image)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.apache.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
              response.send(data);
            }).catch(error => console.log(error))
          }).catch(error => console.log(error))
        } else {
          response.send(data);
        } 
      })
      .catch(error => console.log(error))
  })
});

exports.getAboutMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('aboutMed')
      .then(function(data){
        app.storage.getFile(data.background[0])
        .then(function(file){
          var image_file = file.file.replace(" ", "%20");
          data.background = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
          if (data.gallery.length > 0) {
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.pressKit && data.pressKitSpanish) {
                    app.storage.getFile(data.pressKit[0])
                    .then(function(file){
                      var press_kit = file.file.replace(" ", "%20");
                      data.pressKit = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+press_kit+'?alt=media';
                      app.storage.getFile(data.pressKitSpanish[0])
                      .then(function(file){
                        var press_kit_es = file.file.replace(" ", "%20");
                        data.pressKitSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+press_kit_es+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          }
          else{
            response.send(data);
          }
        }).catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  })
});

exports.getRoomsMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('rooms')
      .then(function(data){
        if (
          data.xs != undefined && 
          data.s != undefined &&
          data.m != undefined &&
          data.l != undefined &&
          data.xl != undefined &&
          data.xxl != undefined
          ) {
          app.storage.getFile(data.xs[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.xs = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            app.storage.getFile(data.s[0])
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.s = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
              app.storage.getFile(data.m[0])
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.m = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                app.storage.getFile(data.l[0])
                .then(function(file){
                  var image_file = file.file.replace(" ", "%20");
                  data.l = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                  app.storage.getFile(data.xl[0])
                  .then(function(file){
                    var image_file = file.file.replace(" ", "%20");
                    data.xl = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                    app.storage.getFile(data.xxl[0])
                    .then(function(file){
                      var image_file = file.file.replace(" ", "%20");
                      data.xxl = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                      response.send(data);
                    }).catch(error => console.log(error))
                  }).catch(error => console.log(error))
                }).catch(error => console.log(error))
              }).catch(error => console.log(error))
            }).catch(error => console.log(error))
          }).catch(error => console.log(error))
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getRoomsBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('roomsBogota')
      .then(function(data){
        if (
          data.xs != undefined && 
          data.s != undefined &&
          data.m != undefined &&
          data.l != undefined &&
          data.xl != undefined 
          ) {
          app.storage.getFile(data.xs[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.xs = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            app.storage.getFile(data.s[0])
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.s = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
              app.storage.getFile(data.m[0])
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.m = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                app.storage.getFile(data.l[0])
                .then(function(file){
                  var image_file = file.file.replace(" ", "%20");
                  data.l = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                  app.storage.getFile(data.xl[0])
                  .then(function(file){
                    var image_file = file.file.replace(" ", "%20");
                    data.xl = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                    response.send(data);
                  }).catch(error => console.log(error))
                }).catch(error => console.log(error))
              }).catch(error => console.log(error))
            }).catch(error => console.log(error))
          }).catch(error => console.log(error))
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getCiengramos = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('ciengramos')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                if (data.menu && data.menuSpanish) {
                  app.storage.getFile(data.menu[0])
                  .then(function(file){
                    var menu = file.file.replace(" ", "%20");
                    data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                    app.storage.getFile(data.menuSpanish[0])
                    .then(function(file){
                      var menuSpanish = file.file.replace(" ", "%20");
                      data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                      response.send(data);
                    });
                  });
                } else {
                  response.send(data);
                }
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getBigBaos = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('bigBaos')
    .then(function(data){
      if (data.gallery.length > 0 && data.background.length > 0) {
          app.storage.getFile(data.background[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.menu && data.menuSpanish) {
                    app.storage.getFile(data.menu[0])
                    .then(function(file){
                      var menu = file.file.replace(" ", "%20");
                      data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                      app.storage.getFile(data.menuSpanish[0])
                      .then(function(file){
                        var menuSpanish = file.file.replace(" ", "%20");
                        data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          });
      } else {
        response.send(data);
      }
    })
    .catch(error => console.log(error))
  })
});

exports.getClickClackKitchen = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('clickClackKitchen')
      .then(function(data){
        if (data.gallery.length > 0 && data.background.length > 0) {
            app.storage.getFile(data.background[0])
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              data.gallery.forEach((element, index) => {
                app.storage.getFile(element)
                .then(function(file){
                  var image_file = file.file.replace(" ", "%20");
                  data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                  if (index === data.gallery.length-1) {
                    if (data.menu && data.menuSpanish) {
                      app.storage.getFile(data.menu[0])
                      .then(function(file){
                        var menu = file.file.replace(" ", "%20");
                        data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                        app.storage.getFile(data.menuSpanish[0])
                        .then(function(file){
                          var menuSpanish = file.file.replace(" ", "%20");
                          data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                          response.send(data);
                        });
                      });
                    } else {
                      response.send(data);
                    }
                  }
                }).catch(error => console.log(error))
              });
            });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getEgeo = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('egeo')
    .then(function(data){
      if (data.gallery.length > 0 && data.background.length > 0) {
          app.storage.getFile(data.background[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.menu && data.menuSpanish) {
                    app.storage.getFile(data.menu[0])
                    .then(function(file){
                      var menu = file.file.replace(" ", "%20");
                      data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                      app.storage.getFile(data.menuSpanish[0])
                      .then(function(file){
                        var menuSpanish = file.file.replace(" ", "%20");
                        data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          });
      } else {
        response.send(data);
      }
    })
    .catch(error => console.log(error))
  })
});

exports.getLaCometa = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('laCometa')
    .then(function(data){
      if (data.gallery.length > 0 && data.background.length > 0) {
          app.storage.getFile(data.background[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  response.send(data);
                }
              }).catch(error => console.log(error))
            });
          });
      } else {
        response.send(data);
      }
    })
    .catch(error => console.log(error))
  })
});

exports.getLaDeriva = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('laDeriva')
    .then(function(data){
      if (data.gallery.length > 0 && data.background.length > 0) {
          app.storage.getFile(data.background[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.menu && data.menuSpanish) {
                    app.storage.getFile(data.menu[0])
                    .then(function(file){
                      var menu = file.file.replace(" ", "%20");
                      data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                      app.storage.getFile(data.menuSpanish[0])
                      .then(function(file){
                        var menuSpanish = file.file.replace(" ", "%20");
                        data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          });
      } else {
        response.send(data);
      }
    })
    .catch(error => console.log(error))
  })
});

exports.getMekong = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('mekong')
    .then(function(data){
      if (data.gallery.length > 0 && data.background.length > 0) {
          app.storage.getFile(data.background[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.menu && data.menuSpanish) {
                    app.storage.getFile(data.menu[0])
                    .then(function(file){
                      var menu = file.file.replace(" ", "%20");
                      data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                      app.storage.getFile(data.menuSpanish[0])
                      .then(function(file){
                        var menuSpanish = file.file.replace(" ", "%20");
                        data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          });
      } else {
        response.send(data);
      }
    })
    .catch(error => console.log(error))
  })
});

exports.getLaDeriva = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('laDeriva')
    .then(function(data){
      if (data.gallery.length > 0 && data.background.length > 0) {
          app.storage.getFile(data.background[0])
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.menu && data.menuSpanish) {
                    app.storage.getFile(data.menu[0])
                    .then(function(file){
                      var menu = file.file.replace(" ", "%20");
                      data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                      app.storage.getFile(data.menuSpanish[0])
                      .then(function(file){
                        var menuSpanish = file.file.replace(" ", "%20");
                        data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          });
      } else {
        response.send(data);
      }
    })
    .catch(error => console.log(error))
  })
});

exports.getApache = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('apache')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                if (data.menu && data.menuSpanish) {
                  app.storage.getFile(data.menu[0])
                  .then(function(file){
                    var menu = file.file.replace(" ", "%20");
                    data.menu = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menu+'?alt=media';
                    app.storage.getFile(data.menuSpanish[0])
                    .then(function(file){
                      var menuSpanish = file.file.replace(" ", "%20");
                      data.menuSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+menuSpanish+'?alt=media';
                      response.send(data);
                    });
                  });
                } else {
                  response.send(data);
                }
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getSpecialsBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('specials')
      .then(function(data){
        if (data.background != undefined) {
          app.storage.getFile(data.background)
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.background = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            if (data.specials.length > 0) {
              data.specials.forEach((element, index) => {
                app.storage.getFile(element.image)
                .then(function(file){
                  var image_file = file.file.replace(" ", "%20");
                  data.specials[index].image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                  if (index === data.specials.length-1) {
                    response.send(data);
                  }
                }).catch(error => console.log(error))
              });
            } else {
              response.send(data);
            }
          }).catch(error => console.log(error))
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getEventsBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('events')
      .then(function(data){        
        app.storage.getFile(data.concretePark.image)
        .then(function(file){
          var image_file = file.file.replace(" ", "%20");
          data.concretePark.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
          app.storage.getFile(data.meetingsRoom.image)
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.meetingsRoom.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            app.storage.getFile(data.image)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
              if (data.culturalAgenda.length > 0) {
                data.culturalAgenda.forEach((event, index) => {
                  event.gallery.forEach((element, index_2) => {
                    app.storage.getFile(element)
                    .then(function(file){
                      var image_file = file.file.replace(" ", "%20");
                      event.gallery[index_2] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                      if(index === data.culturalAgenda.length - 1 && index_2 === event.gallery.length - 1){
                        if (data.eventsBrochureEnglish && data.eventsBrochureSpanish) {
                          app.storage.getFile(data.eventsBrochureEnglish[0])
                          .then(function(file){
                            var eventsBrochureEnglish = file.file.replace(" ", "%20");
                            data.eventsBrochureEnglish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+eventsBrochureEnglish+'?alt=media';
                            app.storage.getFile(data.eventsBrochureSpanish[0])
                            .then(function(file){
                              var eventsBrochureSpanish = file.file.replace(" ", "%20");
                              data.eventsBrochureSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+eventsBrochureSpanish+'?alt=media';
                              response.send(data);
                            });
                          });
                        } else {
                          response.send(data);
                        }
                      }
                    }).catch(error => console.log(error))
                  });
                });
              } else {
                response.send(data);
              }
            }).catch(error => console.log(error))
          }).catch(error => console.log(error))
        }).catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  })
});

exports.getEventsMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('eventsMed')
      .then(function(data){    
        app.storage.getFile(data.redroom.image)
        .then(function(file){
          var image_file = file.file.replace(" ", "%20");
          data.redroom.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
          app.storage.getFile(data.xl.image)
          .then(function(file){
            var image_file = file.file.replace(" ", "%20");
            data.xl.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
            app.storage.getFile(data.clickClackPark.image)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.clickClackPark.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
              app.storage.getFile(data.meetingRoom.image)
              .then(function(file){
                var image_file = file.file.replace(" ", "%20");
                data.meetingRoom.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                app.storage.getFile(data.image)
                .then(function(file){
                  var image_file = file.file.replace(" ", "%20");
                  data.image = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
                  if (data.culturalAgenda) {
                    data.culturalAgenda.forEach((event, index) => {
                      event.gallery.forEach((element, axios) => {
                        app.storage.getFile(element)
                        .then(function(file){
                          var image_file = file.file.replace(" ", "%20");
                          event.gallery[axios] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                          if(index === data.culturalAgenda.length - 1 && axios === event.gallery.length - 1){
                            if (data.eventsBrochureEnglish && data.eventsBrochureSpanish) {
                              app.storage.getFile(data.eventsBrochureEnglish[0])
                              .then(function(file){
                                var eventsBrochureEnglish = file.file.replace(" ", "%20");
                                data.eventsBrochureEnglish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+eventsBrochureEnglish+'?alt=media';
                                app.storage.getFile(data.eventsBrochureSpanish[0])
                                .then(function(file){
                                  var eventsBrochureSpanish = file.file.replace(" ", "%20");
                                  data.eventsBrochureSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+eventsBrochureSpanish+'?alt=media';
                                  response.send(data);
                                });
                              });
                            } else {
                              response.send(data);
                            }
                          }
                        }).catch(error => console.log(error))
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }).catch(error => console.log(error))
              }).catch(error => console.log(error))
            }).catch(error => console.log(error))
          }).catch(error => console.log(error))
        }).catch(error => console.log(error))
      }).catch(error => console.log(error))
  })
});

exports.getXsMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('xsRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getXsBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('xsRoom')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getSMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('sRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getSBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('sRoom')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getMMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('mRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getMBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('mRoom')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getLMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('lRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {                
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getLBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('lRoom')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {                
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getXlMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('xlRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {               
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getXlBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('xlRoom')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {               
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.get2XlMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('xxlRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.get3XlMedellin = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('xxxlRoomMed')
      .then(function(data){
        if (data.gallery.length > 0) {
          data.gallery.forEach((element, index) => {
            app.storage.getFile(element)
            .then(function(file){
              var image_file = file.file.replace(" ", "%20");
              data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
              if (index === data.gallery.length-1) {
                response.send(data);
              }
            }).catch(error => console.log(error))
          });
        } else {
          response.send(data);
        }
      })
      .catch(error => console.log(error))
  })
});

exports.getAboutBogota = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('about')
      .then(function(data){
        app.storage.getFile(data.background[0])
        .then(function(file){
          var image_file = file.file.replace(" ", "%20");
          data.background = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media';
          if (data.gallery.length > 0) {
            data.gallery.forEach((element, index) => {
              app.storage.getFile(element)
              .then(function(file){
                data.gallery[index] = {link: 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+image_file+'?alt=media'};
                if (index === data.gallery.length-1) {
                  if (data.pressKit && data.pressKitSpanish) {
                    app.storage.getFile(data.pressKit[0])
                    .then(function(file){
                      var press_kit = file.file.replace(" ", "%20");
                      data.pressKit = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+press_kit+'?alt=media';
                      app.storage.getFile(data.pressKitSpanish[0])
                      .then(function(file){
                        var press_kit_es = file.file.replace(" ", "%20");
                        data.pressKitSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+press_kit_es+'?alt=media';
                        response.send(data);
                      });
                    });
                  } else {
                    response.send(data);
                  }
                }
              }).catch(error => console.log(error))
            });
          }
          else{
            response.send(data);
          }
        }).catch(error => console.log(error))
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

exports.getTermsAndConditions = functions.https.onRequest((request, response) => {
  cors(request,response,()=>{
    response.setHeader('X-Frame-Options', 'ALLOWALL');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.content.get('termsAndConditions')
      .then(function(data){
        app.storage.getFile(data.guestTermsAndConditions[0])
        .then(function(file){
          var terms_file = file.file.replace(" ", "%20");
          data.guestTermsAndConditions = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+terms_file+'?alt=media';
          app.storage.getFile(data.guestTermsAndConditionsSpanish[0])
          .then(function(file){
            var terms_file = file.file.replace(" ", "%20");
            data.guestTermsAndConditionsSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+terms_file+'?alt=media';
            app.storage.getFile(data.webPageTermsAndConditions[0])
            .then(function(file){
              var terms_file = file.file.replace(" ", "%20");
              data.webPageTermsAndConditions = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+terms_file+'?alt=media';
              app.storage.getFile(data.webPageTermsAndConditionsSpanish[0])
              .then(function(file){
                var terms_file = file.file.replace(" ", "%20");
                data.webPageTermsAndConditionsSpanish = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+terms_file+'?alt=media';
                response.send(data);
              })
            })
          })
        })
      })
      .catch(error => console.log(error))
  })
});
