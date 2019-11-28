var app = angular.module('app', []);
app.controller('mekong', function($scope, $http) {

  $scope.id = 'restaurant_and_bar';
  $scope.title_mekong = '';
  $scope.subtitle_mekong = 'MEKONG';

  var request_2 = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getMekong")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request_2.then(function (data) {
      console.log(data.data);
      
    $scope.text_mekong_med = data.data.textEnglish;
    $scope.text_mekong_med_es = data.data.textSpanish;
    $scope.text_info_mekong_med = data.data.smallTextEnglish;
    $scope.text_info_mekong_med_es = data.data.smallTextSpanish;
    $scope.carousel_mekong_med = data.data.gallery;
    $scope.img_mekong = data.data.background.link;
    
  });

  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getBigBaos")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request.then(function (data) {
    $scope.img_xs = data.data.background.link;
    $scope.name_xs = 'BIG BAOS'
  });

  var request2 = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getClickClackKitchen")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request2.then(function (data) {
    $scope.img_s = data.data.background.link;
    $scope.name_s = 'CLICK CLACK KITCHEN'
  });

  var request3 = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getEgeo")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request3.then(function (data) {
    $scope.img_m = data.data.background.link;
    $scope.name_m = 'EGEO'
  });

  var request4 = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getMekong")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request4.then(function (data) {
    $scope.img_l = data.data.background.link;
    $scope.name_l = 'MEKONG'
  });



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
  $scope.synxis = 'https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=en-US&rooms=1&sbe_ri=0&start=availresults'
  $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=es-ES&rooms=1&sbe_ri=0&start=availresults'
  $scope.synxis_med='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=en-US&rooms=1&sbe_ri=0'
  $scope.synxis_med_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=es-ES&rooms=1&sbe_ri=0'
  $scope.modify = 'https://be.synxis.com/signIn?adult=1&arrive=2019-10-10&chain=19511&child=0&currency=COP&depart=2019-10-11&hotel=70051&level=hotel&locale=en-US&rooms=1&start=availresults'
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
  $scope.sendMail = function() {
    var date = new Date($scope.hour)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    data = {
      name:$scope.name,
      numberPersons:$scope.numberPersons,
      date:$scope.date,
      hour:strTime,
      phone:$scope.phone,
      clientMail:$scope.clientMail,
      message:$scope.message
    }
    var req = {
     method: 'POST',
     url: 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailMekong',
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
     data: data
    }
    $http(req).then(function(){
      console.log(req);
    })
  }
})
