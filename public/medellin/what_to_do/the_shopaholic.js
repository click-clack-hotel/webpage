var app = angular.module('app', []);
app.controller('the_shopaholic', function($scope, $http) {

  $scope.id = 'what_to_do';
  $scope.img_suit = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media'
  $scope.img_party = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226597506_party.jpg?alt=media'
  $scope.img_junkie = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
  $scope.img = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
  $scope.img_rover = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226163401_rover.jpg?alt=media'
  
  $scope.name = 'THE SHOPAHOLIC'
  $scope.vimeo = 'https://vimeo.com/201934132'
  $scope.text = 'Retail therapy works, guys. And if you don’t need to take gifts back for anyone at home - it’s time to treat yo’ self.'
  $scope.text_es = 'Sabemos que tienes a alguien en casa esperando su regalo de tu visita a Bogotá. Encuentra en esta sección varias opciones para hacerlo. ¡Recuerda que seguramente el cambio a divisa local te ayuda!'
  $scope.activities = [
    {
      title:'Casa Précis',
      info:'Phone: (57) 318 7421010    Address: Calle 79A #8-45 Bogota',
      text:"Colombian fashion is at an incredibly exciting moment in its development. Myriad young designers with strikingly unique aesthetic visions are creating their own brands - and some of the most talented and adventurous among them can be found under one roof at Casa Précis. From handbags and shoes to jewellery and swimwear, each piece found at this impeccably curated multi-brand boutique is a work of art in its own right that will certainly turn heads wherever you take it.",
      text_es:'Es un espacio donde el arte se convierte en moda. Es esta tienda encontrarás las marcas emergentes más representativas del país.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226732573_casa.jpg?alt=media'
    },
    {
      title:'Centro Comercial Andino',
      info:'Phone: (1) 6213111    Address: Cra 11 #82-71',
      text:"A 10-minute walk from the hotel will land you right between two of the city's favourite shopping centres: el Andino and el Retiro. Here you will be able to find both international classics, such as Coach, Louis Vuitton and Dolce & Gabbana, as well as top local brands, including Mario Hernández for leather goods (a Colombian speciality), Agua Bendita (head-turning bikinis are another national strong suit) and Arturo Calle (for quality menswear). Explore a little further in the streets surrounding these shopping centres, and you'll discover smaller independent local brands, such as Silvia Tscherassi, Olga Piedrahita, Argento & Bourbon and Juan Studios (as well as a couple of multinational giants - a shopping district isn't a shopping district without Zara and Forever 21).",
      text_es:'A diez minutos del hotel se encuentra uno de los centros comerciales más tradicionales de la ciudad. Cuenta con 22 tiendas de marcas entre internacionales como Louis Vuitton, Coach, Dolce and Gabbana y colombianas como Mario Hernández, Arturo Calle y Vélez.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226730496_andino.jpg?alt=media'
    },
    {
      title:'Atlantis Plaza',
      info:'',
      text:" Here you can find local and international design, home decor, accessories, jewellery, fragrances and more.",
      text_es:'Encuentra aquí un lugar con variedad de tiendas de diseño local e internacional, accesorios, decoración, hogar y perfumería. Claro, también joyería, relojería, salud y belleza. Muy cerca al Centro Comercial Andino. En esta zona encontrarás seguro todo lo que necesitas. ',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
    },
    {
      title:'Parque La Colina',
      info:'',
      text:"Because shopping is always better with a food court, cinemas and games area.",
      text_es:'Cuenta con un diseño moderno y ofrece a sus clientes un mix comercial único, marcas semi-anclas, un boulevard gastronómico, plazoleta de comidas, cines y juegos. ',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
    },
    {
      title:'El Retiro',
      info:'',
      text:"Brimming with exclusive national and international brands, this shopping centre has plenty to offer in terms of fashion, accessories and food. It’s right opposite the Andino, so this is the best area to begin your shopping spree.",
      text_es:'El Centro Comercial de más alto perfil en Bogotá. Con una ubicación estratégica, de fácil acceso por las principales vías y en una zona caracterizada por su alta actividad gastronómica y comercial. Reconocido como un centro comercial con marcas exclusivas locales e internacionales.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
    },
    {
      title:'Unicentro',
      info:'',
      text:"With 312 stores, you’re bound to find what you’re looking for at this shopping centre, equipped with cinema, games area, food court and more.",
      text_es:'Uno de los centros comerciales más visitado por los bogotanos, con plazoleta de comida, 312 tiendas, 3200 parqueaderos y un diseño moderno vanguardista.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
    },
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
      visible: false,
      route: './restaurant_and_bar.html',
      name: 'Restaurants and bars',
      nombre: 'Restaurantes y bares'
    },
    {
      id: 'events',
      visible: false,
      route: './events.html',
      name: 'Events',
      nombre: 'Eventos'
    },
    {
      id: 'specials',
      visible: false,
      route: './specials.html',
      name: 'Specials',
      nombre: 'Especiales'
    },
    {
      id: 'what_to_do',
      visible: false,
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
  $scope.synxis='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=en-US&rooms=1&sbe_ri=0'
  $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=es-ES&rooms=1&sbe_ri=0'
  $scope.modify = 'https://be.synxis.com/signIn?adult=1&arrive=2019-10-10&chain=19511&child=0&currency=COP&depart=2019-10-11&hotel=70051&level=hotel&locale=en-US&rooms=1&start=availresults'
  $scope.changeHandler = function() {
    $scope.tomorrow = getTomorrow($scope.in)
    $scope.synxis = 'https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=en-US&rooms=1&sbe_ri=0&start=availresults'
    $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=es-ES&rooms=1&sbe_ri=0&start=availresults'
    $scope.synxis='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=en-US&rooms=1&sbe_ri=0'
    $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=es-ES&rooms=1&sbe_ri=0'
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
