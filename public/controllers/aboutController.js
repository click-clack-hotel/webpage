var app = angular.module('App', []);
app.controller('aboutController', function($scope, $http) {
  $scope.terms = './assets/docs/terms-and-conditions.pdf'
  $scope.synxis = 'https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=en-US&rooms=1&sbe_ri=0&start=availresults'
  $scope.synxis_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=70051&level=hotel&locale=es-ES&rooms=1&sbe_ri=0&start=availresults'
  $scope.synxis_med='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=en-US&rooms=1&sbe_ri=0'
  $scope.synxis_med_es='https://be.synxis.com/?adult='+$scope.guests+'&arrive='+$scope.in+'&chain=19511&child=0&currency=COP&depart='+$scope.out+'&hotel=6298&level=hotel&locale=es-ES&rooms=1&sbe_ri=0'
  $scope.today = getToday()
  $scope.tomorrow = getTomorrow(new Date())
  $scope.year = new Date().getFullYear()
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
  //ABOUT BOG
  $scope.img_about_bog = "https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551886862175_click-2.jpg?alt=media"

  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getAboutBogota")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request.then(function (data) {
    $scope.img_about_bog = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+data.data.background+'?alt=media'
    $scope.text_about_bog = data.data.textEnglish
    $scope.text_about_bog_es = data.data.textSpanish
    var gallery = []
    for (var i = 0; i < data.data.gallery.length; i++) {
      gallery.push({link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+data.data.gallery[i]+'?alt=media'})
    }
    $scope.carousel_about_bog = gallery
  });

  //ABOUT MED
  $scope.img_about_med = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548211763603_med3.jpg?alt=media'
  $scope.text_about_med = "Bringing Click Clack's award-winning and eyebrow-raising design to the country’s city of eternal spring, the Click Clack Medellín is a 123-room playground of interactive experiences and luxurious comfort, located at the heart of El Poblado. From the luscious green outdoor lobby lined with restaurants, shops and galleries, to the jaw-dropping mountain views from the sprawling rooftop bar and pool, unusual design details will make you laugh out loud, think again, or perhaps even learn something new. Just remember: curiosity will be duly rewarded."
  $scope.text_about_med_es = "Trayendo el sorprendente diseño de Click Clack Hotel, a la ciudad de la eterna primavera: presentamos una experiencia de 123 habitaciones - desde la acogedora y cómoda XS hasta la opulenta Rockstar. Todas erguidas sobre una estructura arquitectónica de 2 torres, con elementos constructivistas y brutalistas. Encontrarás que en Click Clack cada esquina ofrece una intención secreta, cada elemento de diseño hace repensar la forma en la que se consume el entorno y cada mensaje subrepticio empuja fuera de la zona de confort, a quien sabe interpretarlo. Un lobby abierto en un pasaje cultural que recibe a quien visita sus restaurantes especializados, barberías, tiendas locales de diseño, tattoo stores y cafés. Entenderás por qué el desayuno es nuestra comida favorita del día cuando Click Clack Kitchen te sorprenda con cientos de panes, postres y bocadillos que sacian el apetito y las expectativas. En el piso alto de la torre X, nuestro poolbar con vista insuperable a la ciudad, en la otra un rooftop bar con el mejor ambiente  con ritmos dancehall y electropicales."
  $scope.carousel_about_med = [
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548211724092_med2.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548211736138_med1.jpg?alt=media'},
    {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548211748947_med4.jpg?alt=media'}
  ]
})
