var app = angular.module('App', []);
app.controller('roomsController', function($scope, $http) {
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

    //ROOMS BOG
    $scope.img_xs_room_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222586500_XS4.jpg?alt=media'
    $scope.img_s_room_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222553924_S4.jpg?alt=media'
    $scope.img_m_room_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222507119_M2.jpg?alt=media'
    $scope.img_l_room_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222568665_L2.jpg?alt=media'
    $scope.img_xl_room_bogota = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222576335_XL3.jpg?alt=media'

      //XS ROOM BOG
      $scope.text_xs_room_bog = "All the comforts of home, in an efficiently designed and adorably dinky miniature version. The XS room features a queen-size bed, desk, A/C (upon request), television and bathroom with shower. For the perfect balance between quality and price, we recommend you go petite."
      $scope.text_xs_room_bog_es = "Nuestra Economy es una habitación petite que resalta por su ambiente acogedor con el reconocido e inspirador diseño eficiente que caracteriza a The Click Clack Hotel. Cuenta con cama Queen size, Ventana de piso a techo, Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, minibar, escritorio y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía. Todo ubicado minuciosamente en un área de 17m2"
      $scope.carousel_xs_room_bog = [
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222580370_XS1.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222582276_XS2.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222584268_XS3.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222586500_XS4.jpg?alt=media'},
      ]

      //S ROOM BOG
      $scope.text_s_room_bog = "Size certainly isn't everything (19.5 mts2). Whether you opt for a California queen-size bed or two single beds, you'll also enjoy a desk, television, A/C (upon request), bathroom with shower and floor-to-ceiling windows in our affordable S rooms."
      $scope.text_s_room_bog_es = "La habitación Standard de nuestro hotel ofrece 20 m2 de diseño interiorista práctico con un ambiente hasta para dos adultos con opción de cama California Queen Size o dos camas sencillas individuales. Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, Minibar y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía. No querrás dejar tu refugio entre las montañas, creenos."
      $scope.carousel_s_room_bog = [
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222539377_S1.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222541401_S2.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222544730_S3.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222553924_S4.jpg?alt=media'},
      ]

      //M ROOM BOG
      $scope.text_m_room_bog = "For a breath of fresh air - or a puff of a cigarette outside, for that matter - you want to go for an M room (19.5mts2). Not too big, not too small, these just-right rooms feature a spacious terrace (20mts2) with comfortable chairs, perfect for admiring the hotel's hanging gardens. The M room comes complete with a California queen-size bed (or two single beds), desk, A/C (upon request), television and bathroom with shower."
      $scope.text_m_room_bog_es = "Con esta Superior buscamos acercar nuestra visión conceptual contemporánea del espacio a tu lugar de descanso, incluyendo un balcón para tomarte un café, de donde es originario café del mundo. 21 m2 para una o dos personas, con opción de una cama Queen size o dos camas sencillas.  Claro, también con Ventana de piso a techo, Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía."
      $scope.carousel_m_room_bog = [
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222469183_M1.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222507119_M2.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222531580_M3.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222537124_M4.jpg?alt=media'}
      ]

      //L ROOM BOG
      $scope.text_l_room_bog = "Our L rooms (35mts2) are characterized by their floor-to-ceiling windows looking out over the city's urban landscape and majestic green Andean mountains. So if admiring the vista - or indeed, exhibitionism - is your thing, then this is the right size for you. A king-size bed, small flexible living area, desk, A/C, television and bathroom with bathtub will help you feel comfortable with the city at your feet."
      $scope.text_l_room_bog_es = "Encuentra en nuestra L un lugar donde el balance entre los materiales fríos y cálidos construyen un ambiente ecléctico y acogedor. 24 m2 para disfrutar solo o junto a alguien, en una cama King Size. Admira desde tu ventana de piso a techo la línea del horizonte entre las montañas y el cielo tropical del valle de Aburrá. Ducha con bañera, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, minibar y todos los servicios y opciones de comunicación a través de un smartphone incluido durante tu estadía. No, no será necesario que compres SIM card. No si eres nuestro huésped."
      $scope.carousel_l_room_bog = [
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222565378_L1.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222568665_L2.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222570718_L3.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222574179_L4.jpg?alt=media'}
      ]

      //XL ROOM BOG
      $scope.text_xl_room_bog = "Supersize your stay in Bogota with the luxury and spaciousness of our XL rooms (40mts2). Comprising a living room with a sofa-bed and a bedroom with a king-size bed, the XL also features a desk, A/C, two televisions (for those moments when they're showing the football on one channel and Jimmy Fallon on the other) and a bathroom complete with bathtub."
      $scope.text_xl_room_bog_es = "Listo o no, experimentarás una sensación invasiva de calma y tranquilidad al poner un pie en nuestra XL. Una cama King Size que puedes o no compartir con alguien y una sala con espacio para una persona adicional complementarán tu actividad social en esta habitación de 31 m2 con balcón y ventana de piso a techo. Encuentra Ducha y bañera, Armario, Living, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, minibar y todos los servicios y opciones de comunicación a través de un smartphone incluido durante tu estadía."
      $scope.carousel_xl_room_bog = [
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222557378_XL1.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222562419_XL2.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222576335_XL3.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222578470_XL4.jpg?alt=media'}
      ]

      //ROOMS MED
      $scope.img_xs_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619446386_XS%206.jpg?alt=media&token=b5dc7722-c789-4e14-978d-048e8c490e48'
      $scope.img_s_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618707555_S%201.jpg?alt=media&token=35ee27d3-7f34-4d93-9393-992fc9336f26'
      $scope.img_m_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619000258_M%205.jpg?alt=media&token=6128fefe-741d-4dcb-a0d0-7732e8652fa8'
      $scope.img_l_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617842463_L%204.jpg?alt=media&token=efef8d34-29f7-4951-a00a-c984270dd762'
      $scope.img_xl_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619264158_XL%202.jpg?alt=media&token=ddef8bfc-5a5e-43e6-bec1-c500be40c1b5'
      $scope.img_xxl_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617652503_2XL%201.jpg?alt=media&token=9e81a8eb-6d4e-40cf-aea0-c3b2c3bc6904'
      $scope.img_xxxl_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901425443_R1%203XL.jpg?alt=media'
      $scope.img_rockstar_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817627075_bed-bedroom-curtains-26139.jpg?alt=media'

        //XS ROOM MED
        $scope.text_xs_room_med = "If you prefer to keep it petite, then opt for our efficiently snug little XS room, whose cozy corners have been carefully thought out to ensure guests receive the full Click Clack experience. With a queen-size bed, bathroom, clothing rack, safe, hairdryer, free wifi, TV, minibar, a confortable desk and the Click Clack phone for you to access local calls and our full array of services - all neatly tucked into 16m2 of comfort and relaxation."
        $scope.text_xs_room_med_es = "Si prefieres mantenerte en un espacio pequeño y acogedor nuestra opción XS Economy  es perfecta para ti. Una habitación “petite” hasta para dos personas que resalta por su ambiente acogedor, se caracteriza con el reconocido diseño exclusivo y eficiente de The Click Clack Hotel. Cuenta con una cama tamaño queen, baño, rack para ropa, caja de seguridad, secador de pelo, conexión wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios. Todo esto ubicado minuciosamente en un área de 16m2 donde encontrarás confort y relajación."
        $scope.text_light_xs_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_xs_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_xs_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619431787_XS%204.jpg?alt=media&token=f563c64c-bebb-4220-ae15-d1e67522a6ce'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619389136_XS%202.jpg?alt=media&token=b2973ef4-c2c6-4331-915f-1fc02bbbedcd'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619327956_XS%201.jpg?alt=media&token=18e06df2-a591-4279-9b6a-8d0118628ee1'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619446386_XS%206.jpg?alt=media&token=b5dc7722-c789-4e14-978d-048e8c490e48'},
          // {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619395138_XS%203.jpg?alt=media&token=b3f02aa3-01de-46aa-987c-ad6842740661'},
        ]

        //S ROOM MED
        $scope.text_s_room_med = "Whether you’re travelling solo, with a roommate or a bedmate, our Standard room serves up 18m2 of sumptuously playful design with either a California queen-size bed or two single beds, plus bathroom, clothing rack, safe, hairdryer, free wifi, TV,  a confortable desk and the Click Clack phone for you to access local calls and our full array of services."
        $scope.text_s_room_med_es = "Bien sea que viajes solo o acompañado,  nuestra opción S Standard es una habitación cómoda y practica. Con opción de cama California tamaño queen o dos camas sencillas individuales. Baño, rack para ropa, caja de seguridad, secador de pelo, wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios.  Ofrece 18m2  de diseño sofisticado e imponente acompañado de detalles únicos. Créenos, no querrás dejar tu refugio entre las montañas."
        $scope.text_light_s_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_s_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_s_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618717850_S%203.jpg?alt=media&token=3126d4d8-65e9-40ac-880e-58e514499f0e'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618707555_S%201.jpg?alt=media&token=35ee27d3-7f34-4d93-9393-992fc9336f26'},
          // {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618714061_S%202.jpg?alt=media&token=cf08bedb-84e2-4e1e-bb98-44c6b0fdb47b'},
          // {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618722035_S%204.jpg?alt=media&token=ea291fb4-ef50-4e5b-a127-dff0fcba5ca8'},
          // {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618725823_S%205.jpg?alt=media&token=9f51d5ae-5065-4ffb-af61-86e6275d5e72'},
        ]

        //M ROOM MED
        $scope.text_m_room_med = "It would be a shame to come to the motherland of coffee and not have a nice spot to sit and enjoy a fresh cup of Colombia’s finest. That’s where our M-size room comes in, with its private balcony perfect for appreciating Medellin’s enviable weather, checking Instagram, or whatever else you might want to get up to on a balcony. The Superior room measures 20m2 featuring either a queen-size bed or two single beds, plus bathroom, clothing rack, safe, hairdryer, free wifi, TV, a confortable desk and the Click Clack phone for you to access local calls and our full array of services."
        $scope.text_m_room_med_es = "Nuestra opción M Superior busca acercar nuestra visión conceptual y contemporánea del espacio a tu lugar de descanso, incluyendo un balcón con una mini-sala para tomarte un café mientras admiras la vista, disfrutas del increíble clima de Medellín o lo que se te ocurra hacer en un balcón. Para una o dos personas, con opción de una cama tamaño queen o dos camas sencillas individuales.  Cuenta con baño, un rack amplio para ropa, caja de seguridad, secador de pelo, wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios. Esta habitación de 20m2  resalta con  la comodidad y simplicidad en su interiorismo."
        $scope.text_light_m_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_m_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_m_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618993152_M%203.jpg?alt=media&token=6eb41ecd-ac03-4d77-a549-9f63ae96d507'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562618996536_M%204.jpg?alt=media&token=776c1b9c-aea4-44b7-a64b-b60c9035d3f7'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619016004_M%208.jpg?alt=media&token=a482c86a-efef-401d-9b08-e63dc7e3b7bb'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619000258_M%205.jpg?alt=media&token=6128fefe-741d-4dcb-a0d0-7732e8652fa8'},

        ]

        //L ROOM MED
        $scope.text_l_room_med = "Sometimes, size matters. Our L-size room comprises 22m2 and a king-size bed for you to enjoy alone or in company, while you contemplate the stunning views of the tropical Aburra valley through the tall windows. This Deluxe room also features a bathtub and shower, clothing rack, safe, hairdryer, free wifi, TV, a confortable desk and the Click Clack phone for you to access local calls and our full array of services. (no roaming charges for our guests, thank you very much)."
        $scope.text_l_room_med_es = "A veces el tamaño si importa, por eso te ofrecemos nuestra L Junior Suite. Una habitación mas amplia en la que encuentras un ambiente ecléctico y acogedor.  Disfrutaras de 22 m2 solo o acompañado, en una cama de tamaño king. Esta Suite Junior cuenta con ducha y bañera, un amplio mueble de ropa, caja de seguridad, secador de pelo, wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios."
        $scope.text_light_l_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_l_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_l_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617838183_L%203.jpg?alt=media&token=d9f70787-bd65-4520-8b60-e6e97e1bf0b0'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617851543_L%205.jpg?alt=media&token=5b49d945-79ec-4edb-80cb-f85df359d6ea'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617854866_L%206.jpg?alt=media&token=b0338616-631a-482d-8ce8-82db80e69263'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617857792_L%207.jpg?alt=media&token=c16bb03d-c2e1-4fcc-9cf4-9d75ce567f87'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617860476_L%208.jpg?alt=media&token=a0e8f7a4-288d-4307-ae1a-5d6688bfcbe9'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617831125_L%201.jpg?alt=media&token=17dff78d-4b34-4ade-b75c-77cb40152304'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617842463_L%204.jpg?alt=media&token=efef8d34-29f7-4951-a00a-c984270dd762'},

        ]

        //XL ROOM MED
        $scope.text_xl_room_med = "You may, at your entire discretion, enjoy the XL room by yourself or with someone else.  Strategically designed for you to experience an invasive feeling of calm and privacy. Our stunning 28m2 Suite features a King-size bed, bathtub and shower, wardrobe, lounge area, safe, hairdryer, free wifi, TV, minibar, and the Click Clack phone for calling up our many in-room services during your stay."
        $scope.text_xl_room_med_es = "Nuestra XL Suite, fue estratégicamente diseñada para que experimentes una sensación invasiva de calma y tranquilidad al entrar. Con una cama de tamaño King, para compartir con alguien o simplemente para disfrutarla tu mismo y una sala para sentirte como en casa. En esta habitación de 28m2, los cuales fueron pensados cuidadosamente para garantizar que sientas toda la experiencia Click Clack; encuentras también ducha con bañera, un amplio rack para ropa, caja de seguridad, secador de pelo, wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios."
        $scope.text_light_xl_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_xl_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_xl_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619267534_XL%203.jpg?alt=media&token=8009cd12-b81d-4868-8361-152ccda817cb'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619236687_XL%201.jpg?alt=media&token=63d0477d-70f0-4b37-a8ef-888a9b5ed5c5'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562619264158_XL%202.jpg?alt=media&token=ddef8bfc-5a5e-43e6-bec1-c500be40c1b5'},


        ]

        //XXL ROOM MED
        $scope.text_xxl_room_med = "A warning: you really won’t want to leave this mountain nest. Well, we don’t like to brag, but it’s more of a palace, actually. With room for two and some guest to visit you for a while thanks to a decadent king-size bed plus and the ample lounge area featuring a tub (because we wouldn’t want you to feel lonely while you bathe), our 35m2 Deluxe Suite room is designed to be shared. The XXL room also includes a clothing rack, safe, hairdryer, free wifi, TV, bar, minibar, a confortable desk and the Click Clack phone for summoning up all of our wonderful services."
        $scope.text_xxl_room_med_es = "No nos gusta presumir, pero no querrás salir de este refugio entre las montañas, nuestra 2XL Deluxe Suite, mas que una habitación es el palacio de las habitaciones. Para una o dos personas, esta habitación de 35m2,  entre su diseño contemporáneo y ecléctico, ofrece toda la comodidad que deseas; cuenta con una sala amplia, donde tus invitados pueden tomarse unos tragos mientras descansas en una cama tamaño King o si deseas te unes a ellos desde la exclusiva tina que encuentras fuera de la ducha, para hacer del baño un momento social. Nuestra Deluxe Suite, cuenta también con ducha, un amplio mueble de ropa, caja de seguridad, secador de pelo, wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios."
        $scope.text_light_xxl_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_xxl_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_xxl_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617678850_2XL%208.jpg?alt=media&token=c5f45173-418f-4631-b6b0-47f974c2237b'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617693675_2XL5.jpg?alt=media&token=94a99176-f67d-45d6-801d-b02471d17cd8'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617655648_2XL%202.jpg?alt=media&token=bd849c89-9d67-42c5-b2dd-e4ab360bd331'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617658781_2XL%203.jpg?alt=media&token=d616ec77-022e-439d-8ad9-fc288a60e49b'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617675612_2XL%207.jpg?alt=media&token=a25d3408-d7ce-4682-9858-3702ec22c7bc'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1562617652503_2XL%201.jpg?alt=media&token=9e81a8eb-6d4e-40cf-aea0-c3b2c3bc6904'},
        ]

        //XXXL ROOM MED
        $scope.text_xxxl_room_med = "Welcome to your new pied-a-terre in Medellin. When we say XXXL, we’re talking a bachelor(ette) pad of 45m2  with room for two plus some visitors spread over two floors, featuring a capacious lounge area with an island kitchen to start a night with some friends, on the second floor; a king-size bed and a private tub, clothing rack, bathroom with shower, safe, hairdryer, free wifi, TV, minibar , a confortable desk and the Click Clack phone for you to order up whatever you fancy from reception. Just prepare yourself mentally for check-out."
        $scope.text_xxxl_room_med_es = "Nuestra 3XL es nuestra versión ultramoderna de un apartamento de soltero: son 45 m2   de diseño y confort para una o dos personas, dividida en dos plantas; con una amplia zona social y cocina en isla, donde podrás recibir y entretener a tus invitados y en la segunda planta,  llena de privacidad, una cama tamaño King, tina fuera del baño, ducha, rack para ropa, caja de seguridad, secador de pelo, wifi, TV, minibar, un cómodo escritorio y opciones de comunicación a través del Click Clack phone incluido en tu reserva durante tu estadía, con el cual podrás acceder a llamadas e increíbles servicios."
        $scope.text_light_xxxl_room_med = "You’ll enjoy: Laundry service (extra cost), Wake-up call service, 24-hour reception, Exclusive menu of our legendary breakfast"
        $scope.text_light_xxxl_room_med_es = "Incluye: Servicio de lavandería (costo adicional), Servicio de llamada a despertar, Recepción 24 horas, Desayuno de menú exclusivo en Click Clack Kitchen"
        $scope.carousel_xxxl_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901425443_R1%203XL.jpg?alt=media'},

        ]

        //ROCKSTAR ROOM MED
        $scope.text_rockstar_room_med = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        $scope.text_rockstar_room_med_es = "En The Click Clack hotel estamos seguros que un poco de decadencia no sienta mal. Por eso tenemos una Premium suite que estamos seguros no has visto en ningún otro hotel."
        $scope.carousel_rockstar_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817627075_bed-bedroom-curtains-26139.jpg?alt=media'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817627075_bed-bedroom-curtains-26139.jpg?alt=media'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817627075_bed-bedroom-curtains-26139.jpg?alt=media'},
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817627075_bed-bedroom-curtains-26139.jpg?alt=media'}
        ]


})
