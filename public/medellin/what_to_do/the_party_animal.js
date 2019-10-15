var app = angular.module('app', []);
app.controller('the_party_animal', function($scope, $http) {

  $scope.id = 'what_to_do';
  $scope.img_suit = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media'
  $scope.img = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226597506_party.jpg?alt=media'
  $scope.img_junkie = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
  $scope.img_shop = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
  $scope.img_rover = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226163401_rover.jpg?alt=media'
  
  $scope.name = 'THE PARTY ANIMAL'
  $scope.vimeo = 'https://vimeo.com/201934333'
  $scope.text = 'Nobody parties like Colombia parties. You have to experience this for yourself.'
  $scope.text_es = 'Sí. Importante salir a conocer el nightlife bogotano. No puedes dejar de saber cómo se va de fiesta en la capital colombiana. Ponte un buen outfit, pide un carro - También te ayudamos con esto- ¡y a la calle!'
  $scope.activities = [
    {
      title:'Armando Records',
      info:'',
      text:" One of the city’s favourite spots. A retro terrace up top for indie, electronic and more alternative sounds, and a raucous downstairs area for a true latino party. Oh, and there’s a mirrored ceiling.",
      text_es:'Armando Records, el espacio de los melómanos fiesteros.  Uno de los clubes más populares de la ciudad. En la terraza retro con música indie, electrónica, alternativa y en la piso de abajo una atmósfera más festiva y latina. Aquí podrás escuchar música en salones con techos de espejo. ',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226594382_titico.jpg?alt=media'
    },
    {
      title:'Andrés Carne de Res',
      info:'Phone: +57 (1) 8637880    Address: Calle 3 #11A - 56, Chía, Cundinamarca',
      text:"Ah, Andrés. Where do we start? This Colombian institution is unparalleled on a global level. More of a village than a restaurant, the sheer size of the place is almost as impressive as its mind-bogglingly intricate and authentic décor, theatrical service and downright delicious traditional Colombian cuisine - and one hell of a party. Invariably filled with locals and tourists alike, Andrés seamlessly blurs the line between dinner and fiesta with fantastic Latin music, indoor and outdoor dance floors and seating, and numerous themed areas. This is a rite of passage for anyone visiting the city. Here are some recommendations to bear in mind if you find yourself getting lost in the extensive menu. For a large group, try the 'tostón con todo', a pizza-sized piece of fried plantain, topped with avocado, Colombian frijoles, chicharrones, and more national delicacies. Then there's the unmissable 'lomo al trapo', a choice cut of local beef, coated with condiments and wrapped in a cloth, then thrown straight onto the fire. The result is some of the most tender, flavoursome and unorthodox beef you've ever tried. To wash all that down, you want to order some 'cerveza michelada', lager freshened up with lime juice, salt and optional hot sauce. Or, if you need some Dutch courage before trying out your Latin dance moves, order a bottle of aguardiente, our local spirit, flavoured with aniseed and packing quite a punch.",
      text_es:'Una fiesta como ninguna otra en el mundo. Con su servicio  casi teatral, es el favorito de locales y extranjeros. El menú de Andrés es realmente extenso y con tantas opciones a veces es muy fácil confundirse, pero si lo que quieres es vivir la experiencia más local, acá te dejamos una lista de sugerencias: 1. Tostón con todo:; es una ¨pizza¨ a base de plátano verde crocante, con queso gratinado que viene con distintas adiciones colombianas como aguacate, carne desmechada, chicharrones, fríjoles, entre otras. Lo armas a tu gusto. 2. Micheladas: muy parecidas a la mexicanas, es una cerveza ligera helada con tabasco, limón, salsa inglesa y sal) 3. Lomo al trapo; Un corte de carne cubierto totalmente en sal, envuelto en un trapo y cocido al fuego directo. El resultado es un pedazo de carne extremadamente jugoso. 4. Arepa de choclo: Es una arepa salada hecha de maíz dulce rellena de queso (es un acompañante) 5. Aguardiente: Es el trago más tomado en Colombia, es fuerte y se toma en shots. Les recomendamos pedir un trago inicialmente, si les gusta: ¡pidan una botella entera y disfruten la fiesta! ',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226581458_andres.jpg?alt=media'
    },
    {
      title:'Vintrash',
      info:'',
      text:"An upcycling bar with plenty of different areas for Latin, indie and electronic music; there’s something for everyone, with top-notch DJs and dozens of corners waiting to be explored.",
      text_es:'Vintrash es un bar upcycling de varios ambientes enfocados en música latina, indie y electrónica. Una decena rincones por explorar en un espacio lleno de luces, excelentes Djs y buenos tragos.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226584608_asilo.jpg?alt=media'
    },
    {
      title:'Clandestino',
      info:'',
      text:"Crossover sets chop and change from latino classics to the latest house music at this kitsch rooftop bar.",
      text_es:'Gran lugar para Fiesta Crossover y House cerca a las estrellas con un un Rooftop fancy-kitsch.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226592572_smoking.jpg?alt=media'
    },
    {
      title:'Video Club',
      info:'',
      text:"Taking it back with a wooden dance floor and some retro decor, the bar area is perfect for practicing your moves to latin beats, while the main room of this warehouse space is perfect for techno and house junkies",
      text_es:'Con una decoración retro, el primer piso de video club es perfecto para quienes quieren dejarse llevar por los beats latinos y aprender uno que otro paso. Mientras tanto en el segundo piso entre plantas y ruinas, este club ofrece un escenario de música electrónica hasta el amanecer para todos lo adictos del house y techno.',
      img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226594382_titico.jpg?alt=media'
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
