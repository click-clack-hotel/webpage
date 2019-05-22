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
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222586500_XS4.jpg?alt=media'}
      ]

      //S ROOM BOG
      $scope.text_s_room_bog = "Size certainly isn't everything (19.5 mts2). Whether you opt for a California queen-size bed or two single beds, you'll also enjoy a desk, television, A/C (upon request), bathroom with shower and floor-to-ceiling windows in our affordable S rooms."
      $scope.text_s_room_bog_es = "La habitación Standard de nuestro hotel ofrece 20 m2 de diseño interiorista práctico con un ambiente hasta para dos adultos con opción de cama California Queen Size o dos camas sencillas individuales. Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, Minibar y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía. No querrás dejar tu refugio entre las montañas, creenos."
      $scope.carousel_s_room_bog = [
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222539377_S1.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222541401_S2.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222544730_S3.jpg?alt=media'},
        {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547222553924_S4.jpg?alt=media'}
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
      $scope.img_xs_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901470404_R1%20XS.jpg?alt=media'
      $scope.img_s_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901457096_R1%20Sb.jpg?alt=media'
      $scope.img_m_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901444384_R1%20M.jpg?alt=media'
      $scope.img_l_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901437029_R1%20L.jpg?alt=media'
      $scope.img_xl_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901463123_R1%20XL.jpg?alt=media'
      $scope.img_xxl_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901421018_R1%202XL.jpg?alt=media'
      $scope.img_xxxl_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901425443_R1%203XL.jpg?alt=media'
      $scope.img_rockstar_room_medellin = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1548817627075_bed-bedroom-curtains-26139.jpg?alt=media'

        //XS ROOM MED
        $scope.text_xs_room_med = "If you prefer to keep it petite, then opt for our efficiently snug little XS room, whose cosy corners have been carefully thought out to ensure guests receive the full Click Clack experience. With a queen-size bed, floor-to-ceiling windows, bathroom, wardrobe, safe, hairdryer, free wifi, TV, minibar, desk and a smartphone for you to access our full array of services - all neatly tucked into 17m2."
        $scope.text_xs_room_med_es = "Nuestra Economy es una habitación petite que resalta por su ambiente acogedor con el reconocido e inspirador diseño eficiente que caracteriza a The Click Clack Hotel. Cuenta con cama Queen size, Ventana de piso a techo, Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, minibar, escritorio y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía. Todo ubicado minuciosamente en un área de 17m2"
        $scope.carousel_xs_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901470404_R1%20XS.jpg?alt=media'},
        ]

        //S ROOM MED
        $scope.text_s_room_med = "Whether you’re travelling solo, with a roommate or a bedmate, our Standard room serves up 20m2 of sumptuously playful design with either a California queen-size bed or two single beds, plus bathroom, wardrobe, safe, hairdryer, free wifi, TV, minibar and a smartphone that you’ll use to access all our wonderful services."
        $scope.text_s_room_med_es = "La habitación Standard de nuestro hotel ofrece 20 m2 de diseño interiorista práctico con un ambiente hasta para dos adultos con opción de cama California Queen Size o dos camas sencillas individuales. Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, Minibar y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía. No querrás dejar tu refugio entre las montañas, creenos."
        $scope.carousel_s_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901457096_R1%20Sb.jpg?alt=media'},
        ]

        //M ROOM MED
        $scope.text_m_room_med = "Our M-size room has its own private balcony. Perfect for sipping on a cup of Colombia’s finest, enjoying some sunbathing, or whatever else you might want to get up to in full public view. The Superior room measures 21m2 featuring either a queen-size bed or two single beds, plus bathroom, floor-to-ceiling windows, safe, hairdryer, free wifi, TV and a smartphone for accessing all our services throughout your stay."
        $scope.text_m_room_med_es = "Con esta Superior buscamos acercar nuestra visión conceptual contemporánea del espacio a tu lugar de descanso, incluyendo un balcón para tomarte un café, de donde es originario café del mundo. 21 m2 para una o dos personas, con opción de una cama Queen size o dos camas sencillas.  Claro, también con Ventana de piso a techo, Baño, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV y todos nuestros servicios y opciones de comunicación a través de un smartphone incluído durante tu estadía."
        $scope.carousel_m_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901444384_R1%20M.jpg?alt=media'},
        ]

        //L ROOM MED
        $scope.text_l_room_med = "Sometimes, size matters. Our L-size room comprises 24m2 and a king-size bed for you to enjoy alone or in company, while you contemplate the stunning views of the tropical Aburra valley through floor-to-ceiling windows. This Deluxe room also features a bathtub and shower, wardrobe, safe, hairdryer, free wifi, TV, minibar and a smartphone for accessing all and any of our services, or making local calls (no roaming charges for our guests, thank you very much)."
        $scope.text_l_room_med_es = "Encuentra en nuestra L un lugar donde el balance entre los materiales fríos y cálidos construyen un ambiente ecléctico y acogedor. 24 m2 para disfrutar solo o junto a alguien, en una cama King Size. Admira desde tu ventana de piso a techo la línea del horizonte entre las montañas y el cielo tropical del valle de Aburrá. Ducha con bañera, Armario, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, minibar y todos los servicios y opciones de comunicación a través de un smartphone incluido durante tu estadía. No, no será necesario que compres SIM card. No si eres nuestro huésped."
        $scope.carousel_l_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901437029_R1%20L.jpg?alt=media'},
        ]

        //XL ROOM MED
        $scope.text_xl_room_med = "You may, at your entire discretion, invite a third person to join you in the XL room, as they’ll have a sofa-bed in the lounge area all to themselves (unless you make room in the king-size bed, of course). Our stunning 31m2 Junior Suite features floor-to-ceiling windows, a balcony, bathtub and shower, wardrobe, lounge area, safe, hairdryer, free wifi, TV, minibar, and a smartphone for calling up our many in-room services during your stay."
        $scope.text_xl_room_med_es = "Listo o no, experimentarás una sensación invasiva de calma y tranquilidad al poner un pie en nuestra XL. Una cama King Size que puedes o no compartir con alguien y una sala con espacio para una persona adicional complementarán tu actividad social en esta habitación de 31 m2 con balcón y ventana de piso a techo. Encuentra Ducha y bañera, Armario, Living, Caja de Seguridad, Secador de pelo, Conexión Wifi, TV, minibar y todos los servicios y opciones de comunicación a través de un smartphone incluido durante tu estadía."
        $scope.carousel_xl_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901463123_R1%20XL.jpg?alt=media'},
        ]

        //XXL ROOM MED
        $scope.text_xxl_room_med = "With room for three thanks to a decadent king-size bed plus a sofa-bed in the lounge area, our 42m2 Luxury room is designed to be shared. The bathroom even features both a shower and a separate tub, so the conversation can continue while you get clean. A warning: you really won’t want to leave this mountain nest. Well, we don’t like to brag, but it’s more of a palace, actually. The XXL room also includes a wardrobe, safe, hairdryer, free wifi, TV, bar, minibar, and a smartphone for summoning up all of our wonderful services."
        $scope.text_xxl_room_med_es = "Nuestra XXL tiene dos espacios para hasta 3 personas, así puedes descansar en tu King Size mientras tus amigos se relajan con unos tragos en el living. Encuentra además una tina fuera de la ducha, para hacer del baño un momento social. 42 m2 con ducha, closet, caja de seguridad, secador de pelo, wifi, TV, barra, sofá cama y minibar. Claro, todos los servicios del hotel y opciones de comunicación a través de un smartphone incluido durante tu estadía. Así que no tendrás que comprar simcard con operador local de telefonía celular."
        $scope.carousel_xxl_room_med = [
          {link:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1551901421018_R1%202XL.jpg?alt=media'},
        ]

        //XXXL ROOM MED
        $scope.text_xxxl_room_med = "Welcome to your new pied-à-terre in Medellín. When we say XXXL, we’re talking a bachelor(ette) pad with room for three spread over two floors, featuring a capacious lounge area with a tub (because we wouldn’t want you to feel lonely while you bathe), an island kitchen, a king-size bed and a sofa-bed, wardrobe, bathroom with shower, safe, hairdryer, free wifi, TV, minibar and a smartphone for you to order up whatever you fancy from reception. Just prepare yourself mentally for check-out."
        $scope.text_xxxl_room_med_es = "La XXXL es nuestra versión ultramoderna de un apartamento de soltero: dos plantas con living, cocina en isla, tina fuera del baño -para no dejar que te sientas fuera del agua en ningún momento, cama king size y sofá-cama. 48 m2 hasta para 3 personas. Con ducha, armario, caja de seguridad, secador de pelo, wifi, TV, minibar y opciones de comunicación y servicios a través de un smartphone incluido durante tu estadía."
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
