var app = angular.module('app', []);
app.controller('xl', function($scope, $http) {

  $scope.id = 'rooms';
  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getRoomsMedellin")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request.then(function (data) {
    $scope.img_xs = data.data.xs;
    $scope.img_s = data.data.s;
    $scope.img_m = data.data.m;
    $scope.img_l = data.data.l;
    $scope.img_xl = data.data.xl;
    $scope.img_2xl = data.data.xxl;
    $scope.img_3xl = data.data.xxxl;
    $scope.name_xs = data.data.xsName;
    $scope.name_s = data.data.sName;
    $scope.name_m = data.data.mName;
    $scope.name_l = data.data.lName;
    $scope.name_xl = data.data.xlName;
    $scope.name_2xl = data.data.xxlName;
    $scope.name_3xl = data.data.xxxlName;
    var request_2 = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getXlMedellin")
    .then(function(response) {
      $scope.data = response;
      return response;
    });
    request_2.then(function (data) {
      $scope.room = $scope.name_xl
      $scope.text = data.data.textEnglish;
      $scope.text_es = data.data.textSpanish;
      $scope.text_light = data.data.smallTextEnglish
      $scope.text_light_es =data.data.smallTextSpanish
      $scope.carousel = data.data.gallery;
    });
  });

  $scope.facilities = [
    {
      name: 'wifi',
      nombre: 'wifi',
      icon: 'fas fa-wifi'
    },
    {
      name: 'directv',
      nombre: 'directv',
      icon: 'fas fa-tv'
    },
    {
      name: 'safe',
      nombre: 'caja fuerte',
      icon: 'fas fa-lock'
    },
    {
      name: 'smart phone',
      nombre: 'celular inteligente',
      icon: 'fas fa-mobile-alt'
    },
    {
      name: 'bed picnic',
      nombre: 'desayuno',
      icon: 'fas fa-utensils'
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
      route: '../home.html',
      name: 'Home',
      nombre: 'Inicio'
    },
    {
      id: 'about_us',
      visible: true,
      route: '../about_us.html',
      name: 'About us',
      nombre: 'Acerca de nosotros'
    },
    {
      id: 'rooms',
      visible: true,
      route: '../rooms.html',
      name: 'Rooms',
      nombre: 'Habitaciones'
    },
    {
      id: 'restaurant_and_bar',
      visible: true,
      route: '../restaurant_and_bar.html',
      name: 'Restaurant and bar',
      nombre: 'Restaurante y bar'
    },
    {
      id: 'la_cometa',
      visible: true,
      route: '../la_cometa.html',
      name: 'La Cometa Gallery',
      nombre: 'Galeria La Cometa'
  },
    {
      id: 'events',
      visible: true,
      route: '../events.html',
      name: 'Events',
      nombre: 'Eventos'
    },
    {
      id: 'specials',
      visible: false,
      route: '../specials.html',
      name: 'Specials',
      nombre: 'Especiales'
    },
    {
      id: 'what_to_do',
      visible: false,
      route: '../what_to_do/the_rover.html',
      name: 'What to do',
      nombre: 'Que hacer'
    },
    {
      id: 'contact',
      visible: true,
      route: '../contact.html',
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
