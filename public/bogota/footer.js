var app = angular.module('app', []);
app.controller('footer', function($scope, $http) {

  // $scope.terms = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1568586532023_terms-and-conditions.pdf?alt=media&token=67c14de6-bfe2-486a-8eec-fde3aa814918'
  // $scope.guest = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1566955080465_REGISTRO_HOTELERO.pdf?alt=media&token=88806e63-cce8-41ef-88ea-e78a84a18535'
  
  var request = $http.get("https://us-central1-click-clack-5db9f.cloudfunctions.net/getTermsAndConditions")
  .then(function(response) {
    $scope.data = response;
    return response;
  });
  request.then(function (data) {
    $scope.terms = data.data.webPageTermsAndConditions;
    $scope.guest = data.data.guestTermsAndConditions;
    $scope.termsSpanish = data.data.webPageTermsAndConditionsSpanish;
    $scope.guestSpanish = data.data.guestTermsAndConditionsSpanish;
  });

  $scope.year = new Date().getFullYear()

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

})
