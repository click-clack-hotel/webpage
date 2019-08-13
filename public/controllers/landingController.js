var app = angular.module('App', []);
app.controller('landingController', function($scope, $http) {
  //$scope.img_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547221373845_hotel.jpg?alt=media';
  //$scope.img_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547221371102_img-11.jpg?alt=media';
  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getLanding")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  $scope.year = new Date().getFullYear()
  $scope.terms = './assets/docs/terms-and-conditions.pdf'
  request.then(function (data) {
    $scope.citas_bogota = data.data[0]
    $scope.citas_medellin = data.data[1]
    $scope.img_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+data.data[2]+'?alt=media';
    $scope.img_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F'+data.data[3]+'?alt=media';
  });
})
