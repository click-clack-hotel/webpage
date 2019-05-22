

var app = angular.module('App', []);
app.controller('restaurantBarController', function($scope, $http) {
  app.config(function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
  });
  $scope.terms = './assets/docs/terms-and-conditions.pdf'
  $scope.year = new Date().getFullYear()


    //CIENGRAMOS
    $scope.img_ciengramos_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551893178888_cien_gramos-2.jpg?alt=media'
    $scope.text_ciengramos_bog = "Come down the stairs and through the looking glass to experience the unexpected at one of the city's most celebrated restaurants. Chef Luis Guillermo Pulido's delightfully unorthodox creations range in appearance from giant cups of coffee to earth-filled flower pots, and are ideal for sharing and exploring with your partners in crime (though we won't judge if you want to hog them all for yourself). The flavours and presentation of each dish at Ciengramos are inspired by the colours and forms of specific works of art, while the treats on offer from our Boticario cocktail apothecary carry the names of our favourite artists, as well as our signature twist of peculiarity. Forget what they told you. Play with your food."
    $scope.text_ciengramos_bog_es = "Desciende las escaleras y experimenta lo inesperado en uno de los restaurantes más famosos de la ciudad: Ciengramos. Las creaciones deliciosamente peculiares del Chef Luis Guillermo Pulido juegan con la apariencia, el tamaño y el sabor. Desde gigantes tazas de café hasta macetas de flores te sorprenderán con una propuesta hecha para compartir con tus compañeros en crimen. "
    $scope.text_info_ciengramos_bog = 'BOOK: +57 (1) 743 04 04 Ext 100.'
    $scope.text_info_ciengramos_bog_es = 'RESERVAS: +57 (1) 743 04 04 Ext 100.'
    $scope.carousel_ciengramos_bog = [
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551893187642_cien_gramos-3.jpg?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551893192563_cien_gramos-4.jpg?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551893199139_cien_gramos-5.jpg?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551893202818_cien_gramos-6.jpg?alt=media'}
    ]

    //APACHE
    $scope.img_apache_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894220203_apache-4.jpg?alt=media'
    $scope.text_apache_bog = "Bogota traffic getting to you? Then do as the locals do, and come on up away from it all to Apache, our very own rooftop burger bar. Enjoy stunning panoramic views of the city as you sample tipples and titbits inspired by the weird and wonderful world of 1950s America and its comic book heroes and villains (octopus hotdog, anyone? Just ignore the tentacles.) From Wednesdays to Saturdays live DJs take us from rockabilly through to 80s classics with a smooth house backdrop - get there sharpish to make sure you can slip in more easily."
    $scope.text_apache_bog_es = "¿Necesitas escapar del tráfico de Bogotá? Haz lo que hacen los locales, ven y aléjate de todo en Apache, nuestra hamburguesería en la azotea. Disfruta de una vista impresionante de la ciudad, mientras saboreas sorbos y bocados inspirados en el extraño mundo de los héroes y villanos de los comics cincuenteros (¿perro caliente de pulpo, alguien? Ojo con los tentáculos). De miércoles a sábado DJs en vivo soltando tonos de rockabilly durante el día, y moviéndose durante la noche hacia clásicos de los '80 con backbeats houseros. Asegúrate de llegar a tiempo para que la embutida sea menos dolorosa."
    $scope.text_info_apache_bog = 'INFO: +57 (1) 635 1916'
    $scope.text_info_apache_bog_es = 'INFO: +57 (1) 635 1916'
    $scope.carousel_apache_bog = [
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894220203_apache-4.jpg?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894299125_apache-6.jpg?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894348040_apache-8.jpg?alt=media'},
      {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551894184716_apache-3.jpg?alt=media'}    ]

  //MEDELLIN
  //ROOFTOP BAR
  $scope.img_rooftop_bar_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_rooftop_bar_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_rooftop_bar_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_rooftop_bar_med = ''
  $scope.text_info_rooftop_bar_med_es = ''
  $scope.carousel_rooftop_bar_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]
  //POOL BAR
  $scope.img_pool_bar_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_pool_bar_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_pool_bar_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_pool_bar_med = ''
  $scope.text_info_pool_bar_med_es = ''
  $scope.carousel_pool_bar_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]
  //KK KITCHEN
  $scope.img_kk_kitchen_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_kk_kitchen_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_kk_kitchen_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_kk_kitchen_med = ''
  $scope.text_info_kk_kitchen_med_es = ''
  $scope.carousel_kk_kitchen_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]
  //REST ASIATICO
  $scope.img_asiatico_rest_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_asiatico_rest_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_asiatico_rest_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_asiatico_rest_med = ''
  $scope.text_info_asiatico_rest_med_es = ''
  $scope.carousel_asiatico_rest_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]
  //REST CALLEJERO
  $scope.img_callejero_rest_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_callejero_rest_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_callejero_rest_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_callejero_rest_med = ''
  $scope.text_info_callejero_rest_med_es = ''
  $scope.carousel_callejero_rest_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]
  //REST HINDU
  $scope.img_hindu_rest_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_hindu_rest_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_hindu_rest_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_hindu_rest_med = ''
  $scope.text_info_hindu_rest_med_es = ''
  $scope.carousel_hindu_rest_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]
  //GALERIA LA COMETA
  $scope.img_galeria_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'
  $scope.text_galeria_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_galeria_med_es = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.text_info_galeria_med = ''
  $scope.text_info_galeria_med_es = ''
  $scope.carousel_galeria_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817616782_cafe-chairs-menu-6267.jpg?alt=media'}
  ]

  $scope.today = getToday()
  $scope.tomorrow = getTomorrow()


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
  function getTomorrow(){
    var tommorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
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
    console.log(data);
    var req = {
     method: 'POST',
     url: 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailCiengramos',
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
