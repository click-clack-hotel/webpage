var app = angular.module('App', []);
app.controller('contactController', function($scope, $http) {
  app.config(function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
  });
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
  $scope.sendMail = function() {
    data = {
      areaInterest:$scope.area,
      name:$scope.name,
      clientMail:$scope.clientMail,
      message:$scope.message
    }
    var req = {
     method: 'POST',
     url: 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailContact',
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
     data: data
    }
    $http(req).then(function(){
      $scope.area=''
      $scope.name=''
      $scope.clientMail=''
      $scope.message=''
      $scope.phone=''
    })
  }

  $scope.sendMailMedellin = function() {
    data = {
      areaInterest:$scope.area,
      name:$scope.name,
      clientMail:$scope.clientMail,
      message:$scope.message
    }
    var ulr_mail;
    switch ($scope.area) {
      case 'Events'||'Eventos':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailEventsMedellin'
        break;
      case 'Bookings'||'Reservas':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailBookingsMedellin'
        break;
      case 'Suppliers'||'Compras':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailSuppliersMedellin'
        break;
      case 'Marketing'||'Mercadeo':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailMarketingMedellin'
        break;
      case 'Restaurant - Click Clack Kitchen'||'Restaurante - Click Clack Kitchen':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailRestaurantMedellin'
        break;
      case 'Front Desk'||'Recepción':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailFrontDeskMedellin'
        break;
      case 'Guest Service'||'Clientes':
        ulr_mail = 'https://us-central1-click-clack-5db9f.cloudfunctions.net/sendMailGuestServiceMedellin'
        break;
    
      default:
        break;
    }
    var req = {
     method: 'POST',
     url: ulr_mail,
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
     data: data
    }
    $http(req).then(function(){
      $scope.area=''
      $scope.name=''
      $scope.clientMail=''
      $scope.message=''
      $scope.phone=''
    })
  }
})
