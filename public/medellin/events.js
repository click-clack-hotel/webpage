var app = angular.module('app', []);
app.controller('events', function($scope, $http) {

  $scope.id = 'events';
  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getEventsBogota")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request.then(function (data) {
    $scope.img_events = data.data.image
    $scope.text_events_bogota = data.data.textEnglish
    $scope.text_events_bogota_es = data.data.textSpanish
    $scope.text_concrete = data.data.concretePark.textEnglish
    $scope.text_concrete_es = data.data.concretePark.textSpanish
    $scope.img_concrete = data.data.concretePark.image
    $scope.text_meetings = data.data.meetingsRoom.English
    $scope.text_meetings_es = data.data.meetingsRoom.textSpanish
    $scope.img_meetings = data.data.meetingsRoom.image
  
    $scope.brunchaholic_title = 'BRUNCHAHOLIC'
    $scope.brunchaholic_text = "A favourite with locals, our legendary Bogota Brunchaholic is a weekend regular. And we take the term ‘all-you-can-eat ‘ very seriously. With food stations ranging from classic Colombian fare to build-your-own pancakes to pastries to barbecue and more, you’ll barely have room for the bottomless mimosas and whiskey sours. All to the backdrop of tropical house beats from live DJs. From 12pm to 5pm, Saturdays and Sundays."
    $scope.brunchaholic_text_es = "¿Buscando una excusa perfecta para comer de más y tomar en las mañanas sin remordimiento? Bienvenidos a nuestro Brunch de 11:30am a 4:00pm. Precio: $95.000 + Servicio. Todo al son de DJs Electropicales y de Dancehall."
    $scope.brunchaholic_hashtag = '#BRUNCHAHOLIC'
    $scope.brunchaholic_carousel = [
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894647219_1.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894650311_2.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894653092_3.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894656963_4.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894660047_5.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894664949_6.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894667921_7.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894672973_8.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894676971_9.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894680722_10.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894685892_11.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894690971_12.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894696087_13.png?alt=media'}
    ]
  
    $scope.longshot_title = 'LONGSHOT'
    $scope.longshot_text = "Ever wish brunch and dinner could just be one single, mimosa-fuelled continuum? So did we. So we made extended brunch a thing. Every month, we bring you Longshot: an all-you-can-eat-all-day-long brunch extravaganza packed with a plethora of different food stations, live performances from top DJs and bands, bottomless mimosas and other drinks, and even some board games for when the food coma hits hard and you need to just sit for half an hour. Pancakes or dancing? Now you can do both! From 12pm to 11pm, one Saturday a month."
    $scope.longshot_text_es = "Para los que no tuvieron suficiente y quieren más, para los que se rehúsan a: Un sábado al mes se les da gusto en el LONGSHOT, nuestro brunch tardeado de 1:00pm a 7:00pm. Precio: $120.000 + Servicio. Con DJs y presentaciones en vivo de artistas electro tropicales emergentes. En el marco de este evento se han tomado ya el escenario Ácido Pantera, La Payara, Salsa N Groove, Chontadelia y Black Mambo."
    $scope.longshot_hashtag = '#LONGSHOT'
    $scope.longshot_carousel = [
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895024942_1.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895027763_2.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895030730_3.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895033489_4.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895036460_6.png?alt=media'}
    ]
    $scope.clock_title = 'CLICKCLACKCLOCK'
    $scope.clock_text = "Every once in a while we transform our hotel into a giant maze, filling entire floors with interactive experiences for one night only. Through this series of game-ified happenings, alongside performances from international DJs and some cracking drinks, we turn back the clock and explore some of the key ideals of the 20th century. Think surreal retro-mania adult obstacle course - with booze and tunes. You can’t really go wrong."
    $scope.clock_text_es = "The Click Clack Hotel presenta una fiesta que excede la buena música, los mejores tragos y una excelente ambientación. ClickClackClock conceptualiza lo mejor de los ideales de las décadas del siglo XX, en pisos enteros de hotel, en el marco de una fiesta de alta energía junto a DJs internacionales."
    $scope.clock_hashtag = '#CLICKCLACKCLOCK'
    $scope.clock_carousel = [
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895198938_1.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895201731_2.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895205117_3.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895207680_4.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895210950_5.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895214038_6.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895216889_7.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895220375_8.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895224070_9.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895227235_10.png?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551895230820_11.png?alt=media'}
    ]
  });
  //EVENTS BOG
  $scope.vimeoEvents = "https://vimeo.com/326691928"
 

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
      name: 'Restaurant and bar',
      nombre: 'Restaurante y bar'
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
  $scope.modify = 'https://gc.synxis.com/rez.aspx?Hotel=70051&Chain=19511&template=RBE&shell=RBE&locale=es&start=searchres'
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
      space:$scope.space,
      clientMail:$scope.clientMail,
      message:$scope.message
    }
    var req = {
     method: 'POST',
     url: 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailEvents',
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
     data: data
    }
    $http(req).then(function(){
      //
      console.log(req);
    })
  }
})
