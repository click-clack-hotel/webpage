var app = angular.module('app', []);
app.controller('specials', function($scope, $http) {

  $scope.id = 'specials';
  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getSpecialsBogota")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request.then(function (data) {
    // console.log(data);
    $scope.img_specials_bog = data.data.background
    // $scope.specials_bog = data.data.specials;
  });


   //SPECIALS BOG
   $scope.specials_bog = [
     {
       titleEnglish:'BED PICNIC',
       titleSpanish:'DESAYUNO BUFFET',
       textEnglish:"Don't let a rainy day get in the way of your plans for a picnic in the park. We'll set one up for you in the comfort of your own bedroom. The best bit? You don't even have to get dressed.",
       textSpanish:"No dejes que un día lluvioso te dañe el plan de picnic en el parque. Nosotros te armamos uno en tu propia habitación. Y lo mejor es que ni siquiera te tienes que vestir.",
       hashtag:'#KKBedPicnic',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223868182_bed-picnic.jpg?alt=media'
     },
     {
       titleEnglish:'TOURS',
       titleSpanish:'TOURS',
       textEnglish:"We know our rooms are comfy and all, but it's a shame to find yourself in one of the planet's most biodiverse countries and not go for an explore. So let us deal with the arrangements while you get your boots on (or, indeed, your bikini) and discover Colombia's best spots through a range of experiences exclusive to Click Clack guests.",
       textSpanish:"Sabemos que nuestras habitaciones son muy cómodas, pero sería una lástima que vinieras a uno de los paises con mayor biodiversidad del planeta y no salieras a explorar un poco. Así que déjanos que organicemos todo mientras tú te pones los zapatos (o el bikini, más bien), y descubre los mejores sitios de Bogotá o Colombia en general, tras una selección de experiencias exclusivas de Click Clack.",
       hashtag:'#KKTours',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223860210_tours.jpg?alt=media'
     },
     {
       titleEnglish:'BEAUTY TO GO',
       titleSpanish:'BEAUTY TO GO',
       textEnglish:"We're pretty sure our country has the highest rate of mani-pedis per capita. And we don't want you to miss out on the fun. Whatever the occasion - your sister's wedding, a Tinder date, or wanting to look good for your own sexy self - get on the phone and we'll send up a highly qualified professional. Choose from a manicure, pedicure, make-up or blow-dry service, massage, and many more.",
       textSpanish:"En Colombia tenemos el más alto índice de manicure & pedicure per capita. En otras palabras, estás en el mejor lugar para consentirte. ¿Tienes el matrimonio de tu hermana? ¿Sacaste una cita en Tinder? O sencillamente ¿quieres verte bien? Llama a recepción y te mandamos un profesional altamente calificado para que disfrutes de un servicio de manicure, pedicure, blower, maquillaje, masaje, y muchos más.",
       hashtag:'#KKBeauty2Go',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223852855_beauty.jpg?alt=media'
     },
     {
       titleEnglish:'MINIBAR',
       titleSpanish:'MINIBAR',
       textEnglish:"Tucked away in your closet you'll find a treasure trove of delicacies from independent Colombian brands, all of whom contribute to helping the local community, in addition to making some seriously yummy morsels. We're so confident you'll enjoy these that we'll even let you munch on them for free for your first night.",
       textSpanish:"Dentro de tu armario encontrarás un cofre con los más deliciosos tesoros de marcas colombianas independientes, que además de crear estos exquisitos pecaditos contribuyen a proyectos de emprendimiento social en la ciudad.  Estamos tan seguros de que te van a deleitar que ni siquiera te los cobramos por la primera noche de tu estadía.",
       hashtag:'#KKMinibar',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223841733_minibar.jpg?alt=media'
     },
     {
       titleEnglish:'DESIGN SHOP (COMING SOON)',
       titleSpanish:'DESIGN SHOP (VIENE PRONTO)',
       textEnglish:"We're proud to bring you our very own curated selection of products from Colombia's most exciting independent designers. Get all your gift shopping done from the comfort of the hotel. Even if you're gifting them to yourself. It still counts, right?",
       textSpanish:"Estamos orgullosos de presentar nuestra propia selección curada de productos de los diseñadores independientes más prometedores de Colombia. Compra todos tus regalos desde la comodidad del hotel. Así te los regales a ti mismo. Eso también cuenta, ¿no?",
       hashtag:'#KKDesignShop',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223844545_design-shop.jpg?alt=media'
     },
     {
       titleEnglish:'PILLOW MENU',
       titleSpanish:'PILLOW MENU',
       textEnglish:"To each their own, especially when it comes to pillows. Request our pillow menu from reception and select the perfect accessory for a quiet night's sleep. Or pillow fight. Or whatever else you had in mind.",
       textSpanish:"El gusto de cada uno es diferente, sobre todo cuando se trata de las almohadas. Pide nuestro menú de almohadas en la recepción y escoge el accesorio perfecto para una noche de ensueño. O para una pelea de almohadas. ¡O para lo que sea que tengas planeado!",
       hashtag:'#KKPillowMenu',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223814968_pillow-menu.jpg?alt=media'
     },
     {
       titleEnglish:'7+1 CAPITAL SINS KITS',
       titleSpanish:'7+1 PECADOS CAPITALES',
       textEnglish:"We're only human (at the best of times). We're not here to judge you for your sins - on the contrary, our Seven Deadly Sins (plus one) kits will help you to indulge in style. Whether it's greed, lust or straight-up sloth that fits the bill today, just call up reception and confess your sins. We promise you'll feel better for it.",
       textSpanish:"Al fin y al cabo, sólo somos humanos. No estamos aquí para juzgar tus pecados; todo lo contrario. Con nuestros kits para los Siete Pecados Capitales (más uno)  te ayudamos a pecar con estilo. Trátese de avaricia, de lujuria o de pereza pura y dura, llama no más a la recepeción y confiesa tus pecados. Te prometemos que te sentirás mucho mejor.",
       hashtag:'#KKITS',
       image:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223806686_sins.jpg?alt=media'
     }
   ]

  // Language
  if (window.localStorage) {
    if (!localStorage.getItem('clickClackLanguage')) {
      localStorage.clickClackLanguage = navigator.language || navigator.userLanguage;
    } else {
      if(localStorage.getItem('clickClackLanguage').startsWith('es')) {
        $scope.spanish = true;
        $scope.english = false;
      } else {
        $scope.spanish = false;
        $scope.english = true;
      }
    }
  }
  $scope.changeLanguage = function() {
    if (window.localStorage) {
      if (!localStorage.getItem('clickClackLanguage')) {
        localStorage.clickClackLanguage = navigator.language || navigator.userLanguage;
      } else {
        if(localStorage.getItem('clickClackLanguage').startsWith('es')) {
          localStorage.clickClackLanguage = 'en'
          $scope.spanish = false;
          $scope.english = true;
        } else {
          localStorage.clickClackLanguage = 'es'
          $scope.spanish = true;
          $scope.english = false;
        }
      }
    }
  };  

  // WhatsApp
  let phone = '573204170006';
  let message = 'Hello there, I was just wondering…';
  let message_es = 'Hola, me estaba preguntando…';
  $scope.whatsapp = 'https://api.whatsapp.com/send?phone='+phone+'&text='+message
  $scope.whatsapp_es = 'https://api.whatsapp.com/send?phone='+phone+'&text='+message_es

  $scope.terms = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1568586532023_terms-and-conditions.pdf?alt=media&token=67c14de6-bfe2-486a-8eec-fde3aa814918'

  //Menu 
  $scope.menu = [
    {
      id: 'home',
      visible: true,
      route: './home.html',
      name: 'Home',
      nombre: 'Inicio'
    },
    {
      id: 'about_us',
      visible: true,
      route: './about_us.html',
      name: 'About us',
      nombre: 'Acerca de nosotros'
    },
    {
      id: 'rooms',
      visible: true,
      route: './rooms.html',
      name: 'Rooms',
      nombre: 'Habitaciones'
    },
    {
      id: 'restaurant_and_bar',
      visible: true,
      route: './restaurant_and_bar.html',
      name: 'Restaurant and bar',
      nombre: 'Restaurante y bar'
    },
    {
      id: 'events',
      visible: true,
      route: './events.html',
      name: 'Events',
      nombre: 'Eventos'
    },
    {
      id: 'specials',
      visible: true,
      route: './specials.html',
      name: 'Specials',
      nombre: 'Especiales'
    },
    {
      id: 'what_to_do',
      visible: true,
      route: './what_to_do/the_rover.html',
      name: 'What to do',
      nombre: 'Que hacer'
    },
    {
      id: 'contact',
      visible: true,
      route: './contact.html',
      name: 'Contact',
      nombre: 'Contacto'
    }
  ]

  //Booking Form
  $scope.today = getToday()
  $scope.tomorrow = getTomorrow(new Date())
  $scope.synxis = 'https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=en-US&rooms=1&sbe_ri=0&start=availresults'
  $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=es-ES&rooms=1&sbe_ri=0&start=availresults'
  $scope.synxis_med='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=en-US&rooms=1&sbe_ri=0'
  $scope.synxis_med_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=es-ES&rooms=1&sbe_ri=0'
  $scope.modify = 'https://gc.synxis.com/rez.aspx?Hotel=70051&Chain=19511&template=RBE&shell=RBE&locale=es&start=searchres'
  $scope.changeHandler = function() {
    $scope.tomorrow = getTomorrow($scope.in)
    $scope.synxis = 'https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=en-US&rooms=1&sbe_ri=0&start=availresults'
    $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=es-ES&rooms=1&sbe_ri=0&start=availresults'
    $scope.synxis_med='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=en-US&rooms=1&sbe_ri=0'
    $scope.synxis_med_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=es-ES&rooms=1&sbe_ri=0'
  };  
  function getToday(){
    var currentDate = new Date();
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    if (month<10) {
      month = '0'+month
    }
    if (day<10) {
      day = '0'+day
    }
    return year+'-'+month+'-'+day
  }
  function getTomorrow(date){
    var tommorrowDate = new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000);
    var day = tommorrowDate.getDate()
    var month = tommorrowDate.getMonth() + 1
    var year = tommorrowDate.getFullYear()
    if (month<10) {
      month = '0'+month
    }
    if (day<10) {
      day = '0'+day
    }
    return year+'-'+month+'-'+day
  }
})
