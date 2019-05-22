var app = angular.module('App', []);
app.controller('eventsController', function($scope, $http) {
  app.config(function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
  });
  $scope.terms = './assets/docs/terms-and-conditions.pdf'
  $scope.today = getToday()
  $scope.year = new Date().getFullYear()

  //EVENTS BOG
  $scope.vimeoEvents = "https://vimeo.com/326691928"
  $scope.img_events = './assets/img/click.png'
  $scope.text_events_bogota = "Looking for something out of the ordinary for your event? We'll be anything you want us to be. Our shape-shifting events rooms, with moveable walls, flexible furnishing and indoor-outdoor hanging gardens let us tailor our spaces to precisely fit your needs. From rock concerts to conferences to art exhibitions, we know our stuff when it comes to event production and specialize in creating bizarre and beguiling interactive experiences that guests won't forget in a hurry. Whether you want to subject them to giant mazes, wrestling contests or just some unforgettable bespoke wining and dining, we're pretty sure we've seen it all, but feel free to try and surprise us. It's what we'd like the most. So let us take care of the technicalities, while you sit back and enjoy the canapés."
  $scope.text_events_bogota_es = "¿Estás buscando un lugar atípico para tu evento? Nosotros seremos lo que quieras que seamos. Gracias a paredes móviles, mobiliario flexible y jardines verticales que integran lo interior y lo exterior, podemos poner a tu disposición una sala de eventos hecha a tu medida. Trátese de un concierto de rock, una conferencia o una exposición de arte, sabemos de qué estamos hablando en cuanto a la producción de eventos. Nos especializamos en elaborar estrambóticas (y engatusadores) experiencias interactivas que tus invitados no podrán olvidar. Así quieras someterte a un laberinto gigante, a un concurso de lucha libre, o sencillamente a un arrebatador encuentro gastronómico, estamos bastante seguros de que ya lo hemos visto todo, pero adelante, sorpréndenos, es lo que más nos gustaría. Deja que nosotros nos encarguemos de los tecnicismos, mientras tú te relajas, te sientas y disfrutas del show."
  $scope.text_concrete = "Is it a car park? Is it a dance floor? No, it's our legendary Concrete Park. Our most flexible event space, the Concrete Park allows us to take your guests out of Bogota and into another world. In the past we've converted it into a sandy beach, a tropical fruit market, and even a stable for live horses (who had a great time, by the way). With its own separate street entrance (which can, of course, be designed as you wish), the Concrete Park allows you to tailor-make your very own event space, whether you'll be raising a toast to the bride and groom or showcasing your Spring/Summer collection."
  $scope.text_concrete_es = "¿Se trata de un parqueadero? ¿O de una pista de baile enorme? No,  se trata de nuestro Concrete Park, el espacio mas flexible que puedes encontrar para hacer tus eventos únicos, el Concrete Park puede transportar a tus asistentes fuera de Bogota, hacerlos sentir en otro mundo si es necesario. A pasado de ser una playa llena de arena, por un mercado de frutas tropical, hasta un establo de caballos (quienes por supuesto pasaron increíble). Con una entrada separada del hotel que puedes diseñarla a tu gusto, el Concrete Park se transforma en un espacio propio  y exclusivo para hacer el evento que deseas y como lo imaginas!"
  $scope.img_concrete = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1557284315624_concrete.jpg?alt=media&token=a25347e0-12ae-4b69-9eb9-bf3421168e1b'
  $scope.text_meetings = "We want your meetings to be as productive and - dare we say it - fun as possible. Our meeting room can hold up to 30 people (we’d call that a party) and along with beautiful views over our hanging gardens, has everything you need to make the magic happen: from projectors to privacy, soundproofing to snacks, and all the tech infrastructure you need to give your best presentation yet. You won’t even have to leave the building to get your after-office drinks."
  $scope.text_meetings_es = "Olvídate de las aburridas reuniones. Nuestra Sala de Juntas ofrece un espacio diferente para salir de la rutina. Con una capacidad de hasta 30 personas y una agradable vista a nuestro jardín vertical, nuestra sala de juntas cuenta con todo lo necesario para hacer tus presentaciones o reuniones. Privacidad, ayudas audiovisuales, panel de conectividad, y paneles acústicos harán de este, el lugar ideal para  tus juntas fuera de la oficina."
  $scope.img_meetings = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547223947236_meetings.jpg?alt=media'

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
    console.log(data);
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
