var app = angular.module('App', []);
app.controller('Controller', function($scope) {

  //////////////////////////////////////////////////////
  ////////////////////    BOGOTA    ////////////////////
  //////////////////////////////////////////////////////

  //HOME BOG
  $scope.vimeoBogota = "https://vimeo.com/110068041"

  //ABOUT BOG
  $scope.img_about_bog = './assets/img/spaces/click-2.jpg'
  $scope.text_about_bog = "Welcome to a place where indoors is outdoors, where big is small, and where you are whoever you feel like being. Nestled beside Bogota's Parque 93 and moments from the city's hotspots, the Click Clack Hotel is a pioneer boutique design hotel offering a host of unexpected experiences for the discerning traveller. Sixty rooms of all shapes and sizes feature floor-to-ceiling windows gazing out over the city's luscious mountain backdrop, and are decorated with the same award-winning, playful design found in the hotel's public spaces. The ciengramos restaurant and Boticario cocktail bar offer an eclectic range of curiously toothsome delicacies, while the bustling Apache rooftap bar is a local favourite for after-hours escapades with a panoramic view. Whether you fancy having a country picnic from the comfort of your own bed, treasure-hunting for hidden gifts around your room, or just making your selection from the pillow menu and settling down for a bespoke night's sleep, we'll be sure to keep you well-fed, comfortable, and always guessing."
  $scope.carousel_about_bog = [
    {link:'assets/img/spaces/click-3.jpg'},
    {link:'assets/img/spaces/click-5.jpg'}
  ]

  //ROOMS BOG
  $scope.img_xs_room_bogota = './assets/img/rooms/XS4.jpg'
  $scope.img_s_room_bogota = './assets/img/rooms/S1.jpg'
  $scope.img_m_room_bogota = './assets/img/rooms/M1.jpg'
  $scope.img_l_room_bogota = './assets/img/rooms/L4.jpg'
  $scope.img_xl_room_bogota = './assets/img/rooms/XL2.jpg'

    //XS ROOM BOG
    $scope.text_xs_room_bog = "All the comforts of home, in an efficiently designed and adorably dinky miniature version. The XS room features a queen-size bed, desk, A/C (upon request), television and bathroom with shower. For the perfect balance between quality and price, we recommend you go petite."
    $scope.text_light_xs_room_bog = "*Prices include: our legendary buffet breakfast, wi-fi, and full access to the minibar for the first night (go on, you know you want to). Prices do not include: VAT at 19%, and hotel insurance ($8.000 COP per person)."
    $scope.carousel_xs_room_bog = [
      {link:'./assets/img/rooms/XS1.jpg'},
      {link:'./assets/img/rooms/XS2.jpg'},
      {link:'./assets/img/rooms/XS3.jpg'},
      {link:'./assets/img/rooms/XS4.jpg'}
    ]

    //S ROOM BOG
    $scope.text_s_room_bog = "Size certainly isn't everything (19.5 mts2). Whether you opt for a California queen-size bed or two single beds, you'll also enjoy a desk, television, A/C (upon request), bathroom with shower and floor-to-ceiling windows in our affordable S rooms."
    $scope.text_light_s_room_bog = "*Prices include: our legendary buffet breakfast, wi-fi, and full access to the minibar for the first night (go on, you know you want to). Prices do not include: VAT at 19%, and hotel insurance ($8.000 COP per person)."
    $scope.carousel_s_room_bog = [
      {link:'./assets/img/rooms/S1.jpg'},
      {link:'./assets/img/rooms/S2.jpg'},
      {link:'./assets/img/rooms/S3.jpg'},
      {link:'./assets/img/rooms/XS4.jpg'}
    ]

    //M ROOM BOG
    $scope.text_m_room_bog = "For a breath of fresh air - or a puff of a cigarette outside, for that matter - you want to go for an M room (19.5mts2). Not too big, not too small, these just-right rooms feature a spacious terrace (20mts2) with comfortable chairs, perfect for admiring the hotel's hanging gardens. The M room comes complete with a California queen-size bed (or two single beds), desk, A/C (upon request), television and bathroom with shower."
    $scope.text_light_m_room_bog = "*Prices include: our legendary buffet breakfast, wi-fi, and full access to the minibar for the first night (go on, you know you want to). Prices do not include: VAT at 19%, and hotel insurance ($8.000 COP per person)."
    $scope.carousel_m_room_bog = [
      {link:'./assets/img/rooms/M1.jpg'},
      {link:'./assets/img/rooms/M2.jpg'},
      {link:'./assets/img/rooms/M3.jpg'},
      {link:'./assets/img/rooms/M4.jpg'}
    ]

    //L ROOM BOG
    $scope.text_l_room_bog = "Our L rooms (35mts2) are characterized by their floor-to-ceiling windows looking out over the city's urban landscape and majestic green Andean mountains. So if admiring the vista - or indeed, exhibitionism - is your thing, then this is the right size for you. A king-size bed, small flexible living area, desk, A/C, television and bathroom with bathtub will help you feel comfortable with the city at your feet."
    $scope.text_light_l_room_bog = "*Prices include: our legendary buffet breakfast, wi-fi, and full access to the minibar for the first night (go on, you know you want to). Prices do not include: VAT at 19%, and hotel insurance ($8.000 COP per person)."
    $scope.carousel_l_room_bog = [
      {link:'./assets/img/rooms/L1.jpg'},
      {link:'./assets/img/rooms/L2.jpg'},
      {link:'./assets/img/rooms/L3.jpg'},
      {link:'./assets/img/rooms/L4.jpg'}
    ]

    //XL ROOM BOG
    $scope.text_xl_room_bog = "Supersize your stay in Bogota with the luxury and spaciousness of our XL rooms (40mts2). Comprising a living room with a sofa-bed and a bedroom with a king-size bed, the XL also features a desk, A/C, two televisions (for those moments when they're showing the football on one channel and Jimmy Fallon on the other) and a bathroom complete with bathtub."
    $scope.text_light_xl_room_bog = "*Prices include: our legendary buffet breakfast, wi-fi, and full access to the minibar for the first night (go on, you know you want to). Prices do not include: VAT at 19%, and hotel insurance ($8.000 COP per person)."
    $scope.carousel_xl_room_bog = [
      {link:'./assets/img/rooms/XL1.jpg'},
      {link:'./assets/img/rooms/XL2.jpg'},
      {link:'./assets/img/rooms/XL3.jpg'},
      {link:'./assets/img/rooms/XL4.jpg'}
    ]

  //RESTAURANT AND BAR BOG
  $scope.img_ciengramos_bogota = './assets/img/spaces/Ciengramos/cien_gramos-2.jpg'
  $scope.img_apache_bogota = './assets/img/spaces/Apache/apache-4.jpg'

    //CIENGRAMOS
    $scope.text_ciengramos_bog = "Come down the stairs and through the looking glass to experience the unexpected at one of the city's most celebrated restaurants. Chef Luis Guillermo Pulido's delightfully unorthodox creations range in appearance from giant cups of coffee to earth-filled flower pots, and are ideal for sharing and exploring with your partners in crime (though we won't judge if you want to hog them all for yourself). The flavours and presentation of each dish at Ciengramos are inspired by the colours and forms of specific works of art, while the treats on offer from our Boticario cocktail apothecary carry the names of our favourite artists, as well as our signature twist of peculiarity. Forget what they told you. Play with your food."
    $scope.text_info_ciengramos_bog = 'BOOK: +57 (1) 743 04 04 Ext 100.'
    $scope.carousel_ciengramos_bog = [
      {link:'assets/img/spaces/Ciengramos/cien_gramos-2.jpg'},
      {link:'assets/img/spaces/Ciengramos/cien_gramos-3.jpg'},
      {link:'assets/img/spaces/Ciengramos/cien_gramos-4.jpg'},
      {link:'assets/img/spaces/Ciengramos/cien_gramos-5.jpg'},
      {link:'assets/img/spaces/Ciengramos/cien_gramos-6.jpg'}
    ]

    //APACHE
    $scope.text_apache_bog = "Bogota traffic getting to you? Then do as the locals do, and come on up away from it all to Apache, our very own rooftop burger bar. Enjoy stunning panoramic views of the city as you sample tipples and titbits inspired by the weird and wonderful world of 1950s America and its comic book heroes and villains (octopus hotdog, anyone? Just ignore the tentacles.) From Wednesdays to Saturdays live DJs take us from rockabilly through to 80s classics with a smooth house backdrop - get there sharpish to make sure you can slip in more easily."
    $scope.text_info_apache_bog = 'INFO: +57 (1) 635 1916'
    $scope.carousel_apache_bog = [
      {link:'assets/img/spaces/Apache/apache-4.jpg'},
      {link:'assets/img/spaces/Apache/apache-6.jpg'},
      {link:'assets/img/spaces/Apache/apache-8.jpg'},
      {link:'assets/img/spaces/Apache/apache-3.jpg'},
      {link:'assets/img/spaces/Apache/apache-11.jpg'}
    ]

  //EVENTS BOG
  $scope.vimeoEvents = "https://vimeo.com/118644536"
  $scope.text_events_bogota = "Looking for something out of the ordinary for your event? We'll be anything you want us to be. Our shape-shifting events rooms, with moveable walls, flexible furnishing and indoor-outdoor hanging gardens let us tailor our spaces to precisely fit your needs. From rock concerts to conferences to art exhibitions, we know our stuff when it comes to event production and specialize in creating bizarre and beguiling interactive experiences that guests won't forget in a hurry. Whether you want to subject them to giant mazes, wrestling contests or just some unforgettable bespoke wining and dining, we're pretty sure we've seen it all, but feel free to try and surprise us. It's what we'd like the most. So let us take care of the technicalities, while you sit back and enjoy the canapés."
  $scope.text_concrete = "Is it a car park? Is it a dance floor? No, it's our legendary Concrete Park. Our most flexible event space, the Concrete Park allows us to take your guests out of Bogota and into another world. In the past we've converted it into a sandy beach, a tropical fruit market, and even a stable for live horses (who had a great time, by the way). With its own separate street entrance (which can, of course, be designed as you wish), the Concrete Park allows you to tailor-make your very own event space, whether you'll be raising a toast to the bride and groom or showcasing your Spring/Summer collection."
  $scope.img_concrete = './assets/img/events/concrete.jpg'
  $scope.text_meetings = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  $scope.img_meetings = './assets/img/events/meetings.jpg'

  $scope.brunchaholic_title = 'BRUNCHAHOLIC'
  $scope.brunchaholic_text = "¿Buscando una excusa perfecta para comer de más y tomar en las mañanas sin remordimiento? Bienvenidos a nuestro Brunch de 11:30am a 4:00pm. Precio: $95.000 + Servicio. Todo al son de DJs Electropicales y de Dancehall."
  $scope.brunchaholic_hashtag = '#BRUNCHAHOLIC'
  $scope.brunchaholic_carousel = [
    {link:'assets/img/events/brunch/1.png'},
    {link:'assets/img/events/brunch/2.png'},
    {link:'assets/img/events/brunch/3.png'},
    {link:'assets/img/events/brunch/4.png'},
    {link:'assets/img/events/brunch/5.png'},
    {link:'assets/img/events/brunch/6.png'},
    {link:'assets/img/events/brunch/7.png'},
    {link:'assets/img/events/brunch/8.png'},
    {link:'assets/img/events/brunch/9.png'},
    {link:'assets/img/events/brunch/10.png'},
    {link:'assets/img/events/brunch/11.png'},
    {link:'assets/img/events/brunch/12.png'},
    {link:'assets/img/events/brunch/13.png'}
  ]

  $scope.longshot_title = 'LONGSHOT'
  $scope.longshot_text = "Para los que no tuvieron suficiente y quieren más, para los que se rehúsan a: Un sábado al mes se les da gusto en el LONGSHOT, nuestro brunch tardeado de 1:00pm a 7:00pm. Precio: $120.000 + Servicio. Con DJs y presentaciones en vivo de artistas electro tropicales emergentes. En el marco de este evento se han tomado ya el escenario Ácido Pantera, La Payara, Salsa N Groove, Chontadelia y Black Mambo."
  $scope.longshot_hashtag = '#LONGSHOT'
  $scope.longshot_carousel = [
    {link:'assets/img/events/longshot/1.png'},
    {link:'assets/img/events/longshot/2.png'},
    {link:'assets/img/events/longshot/3.png'},
    {link:'assets/img/events/longshot/4.png'},
    {link:'assets/img/events/longshot/6.png'}
  ]

  $scope.clock_title = 'CLICKCLACKCLOCK'
  $scope.clock_text = "The Click Clack Hotel presenta una fiesta que excede la buena música, los mejores tragos y una excelente ambientación. ClickClackClock conceptualiza lo mejor de los ideales de las décadas del siglo XX, en pisos enteros de hotel, en el marco de una fiesta de alta energía junto a DJs internacionales."
  $scope.clock_hashtag = '#CLICKCLACKCLOCK'
  $scope.clock_carousel = [
    {link:'assets/img/events/clock/1.png'},
    {link:'assets/img/events/clock/2.png'},
    {link:'assets/img/events/clock/3.png'},
    {link:'assets/img/events/clock/4.png'},
    {link:'assets/img/events/clock/5.png'},
    {link:'assets/img/events/clock/6.png'},
    {link:'assets/img/events/clock/7.png'},
    {link:'assets/img/events/clock/8.png'},
    {link:'assets/img/events/clock/9.png'},
    {link:'assets/img/events/clock/10.png'},
    {link:'assets/img/events/clock/11.png'}
  ]

  //SPECIALS BOG
  $scope.img_specials_bog = './assets/img/img2.jpg'
  $scope.specials_bog = [
    {
      title:'BED PICNIC',
      text:"Don't let a rainy day get in the way of your plans for a picnic in the park. We'll set one up for you in the comfort of your own bedroom. The best bit? You don't even have to get dressed.",
      hashtag:'#KKBedPicnic',
      img:'./assets/img/specials/bed-picnic.jpg'
    },
    {
      title:'TOURS',
      text:"We know our rooms are comfy and all, but it's a shame to find yourself in one of the planet's most biodiverse countries and not go for an explore. So let us deal with the arrangements while you get your boots on (or, indeed, your bikini) and discover Colombia's best spots through a range of experiences exclusive to Click Clack guests.",
      hashtag:'#KKTours',
      img:'./assets/img/specials/tours.jpg'
    },
    {
      title:'BEAUTY TO GO',
      text:"We're pretty sure our country has the highest rate of mani-pedis per capita. And we don't want you to miss out on the fun. Whatever the occasion - your sister's wedding, a Tinder date, or wanting to look good for your own sexy self - get on the phone and we'll send up a highly qualified professional. Choose from a manicure, pedicure, make-up or blow-dry service, massage, and many more.",
      hashtag:'#KKBeauty2Go',
      img:'./assets/img/specials/beauty.jpg'
    },
    {
      title:'MINIBAR',
      text:"Tucked away in your closet you'll find a treasure trove of delicacies from independent Colombian brands, all of whom contribute to helping the local community, in addition to making some seriously yummy morsels. We're so confident you'll enjoy these that we'll even let you munch on them for free for your first night.",
      hashtag:'#KKMinibar',
      img:'./assets/img/specials/minibar.jpg'
    },
    {
      title:'PERSONAL SHOPPING',
      text:"We're pretty sure our country has the highest rate of mani-pedis per capita. And we don't want you to miss out on the fun. Whatever the occasion - your sister's wedding, a Tinder date, or wanting to look good for your own sexy self - get on the phone and we'll send up a highly qualified professional. Choose from a manicure, pedicure, make-up or blow-dry service, massage, and many more.",
      hashtag:'#KKShopping',
      img:'./assets/img/specials/personal.jpg'
    },
    {
      title:'DESIGN SHOP (COMING SOON)',
      text:"We're proud to bring you our very own curated selection of products from Colombia's most exciting independent designers. Get all your gift shopping done from the comfort of the hotel. Even if you're gifting them to yourself. It still counts, right?",
      hashtag:'#KKDesignShop',
      img:'./assets/img/specials/design-shop.jpg'
    },
    {
      title:'PILLOW MENU',
      text:"To each their own, especially when it comes to pillows. Request our pillow menu from reception and select the perfect accessory for a quiet night's sleep. Or pillow fight. Or whatever else you had in mind.",
      hashtag:'#KKPillowMenu',
      img:'./assets/img/specials/pillow-menu.jpg'
    },
    {
      title:'MASSAGE',
      text:"We wouldn't want you trekking all the way down to a massage room, so we bring the pampering up to you. Just call reception and order up some serious relaxation.",
      hashtag:'#KKMassage',
      img:'./assets/img/specials/massage.jpg'
    },
    {
      title:'7+1 CAPITAL SINS KITS',
      text:"We're only human (at the best of times). We're not here to judge you for your sins - on the contrary, our Seven Deadly Sins (plus one) kits will help you to indulge in style. Whether it's greed, lust or straight-up sloth that fits the bill today, just call up reception and confess your sins. We promise you'll feel better for it.",
      hashtag:'#KKITS',
      img:'./assets/img/specials/sins.jpg'
    }
  ]

  //WHAT TO DO
  $scope.characters_bog = [
    {
      title:'THE ROVER',
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:'./assets/img/rover/rover.jpg',
      href:'rover.html',
      vimeo:'https://vimeo.com/201933803'
    },
    {
      title:'THE SUIT',
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:'./assets/img/suit/suit.jpg',
      href:'suit.html',
      vimeo:'https://vimeo.com/201934581'
    },
    {
      title:'THE ANIMAL PARTY',
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:'./assets/img/party/party.jpg',
      href:'party-animal.html',
      vimeo:'https://vimeo.com/201934333'
    },
    {
      title:'THE CULTURE JUNKIE',
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:'./assets/img/junkie/junkie.jpg',
      href:'culture-junkie.html',
      vimeo:'https://vimeo.com/201934419'
    },
    {
      title:'THE SHOPAHOLIC',
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img:'./assets/img/shop/shop.jpg',
      href:'shopaholic.html',
      vimeo:'https://vimeo.com/201934132'
    },
  ]

  //THE ROVER
  $scope.img_rover = './assets/img/rover/rover.jpg'
  $scope.vimeo_rover = 'https://vimeo.com/201933803'
  $scope.rover_activities = [
    {
      title:'HORSEBACK RIDING',
      info:'Duration: 4 - 5 hours',
      text:"Crossing the ridge of Bogotá's eastern mountains is a surreal experience, transporting you in a matter of minutes from the urban jungle of the country's capital to rolling green hills dotted with cows and farmhouses. Tucked away among the meadows lies the town of La Calera, an ideal spot for horse riding with great views, both of the country's capital, and of the nearby San Rafael reservoir. Transportation, tour guide, and - of course - the horse are all included.",
      img:'./assets/img/rover/horse.jpg'
    },
    {
      title:'Paragliding',
      info:'Duration: 4 hours (weather permitting)',
      text:"The lush green hills and meadows surrounding Bogotá are known as 'la Sabana'. The beautiful natural scenery features unique landscapes called 'páramos', misty moor-like ecosystems found only in a few corners of the planet, with their own bizarre flora and fauna. The best way to see it for yourself? From the air, of course! After the initial adrenaline rush of taking off, the surreal calm of gliding through the air will leave you tingly all over and keen to do it all again. This tour includes transportation, tour guide, flight instructor, safety equipment and insurance coverage.",
      img:'./assets/img/rover/paragliding.jpg'
    },
    {
      title:'Zipaquira and Guatavita',
      info:'Duration: 9 hours',
      text:"Spoiler alert: the legend of El Dorado did not arise from our creatively named local airport. Its origins lie in the nearby town of Guatavita, where we'll happily fill you in on the real story while you chow down on some local cuisine. But before we reach our destination, we'll stop by Zipaquirá and its spectacular Salt Cathedral - an impressive feat of ecclesiastical architecture carved into an underground salt mine. This tour includes transportation, tour guide and entrance to the cathedral. All you need to bring are some hiking shoes and comfortable clothes.",
      img:'./assets/img/rover/zipaquira.jpg'
    },
    {
      title:'Guatavita',
      info:'Duration: 4 hours',
      text:"The charming town of Guatavita and its peaceful lake don't look like they've seen much drama over the years. But this was once the site of spectacular sacrificial rituals, with vast quantities of gold sent plunging into the depths of the dark lake. Hear the story of the Muisca people and their ancient magic, from the heart of this untouched, traditional Colombian town. Includes transportation, tour guide, and entrance fees for the lake visit.",
      img:'./assets/img/rover/guatavita.jpg'
    },
    {
      title:'Ecological',
      info:'Duration: 7 hours',
      text:"You might not believe it when you're sat in the middle of some heavy Bogotá traffic, but you're actually not far from one of the region's largest cloud forests. Many of the stunning plants and animals to be found at the Chicaque National Park are unique to this country. Colombia is home to a greater number of bird species than any other country on the planet, and Chicaque is the perfect place for you to indulge in a little ornithology. You're gonna need a change of clothes for this one - plus some hiking boots and a rucksack (backpack). Transportation, tour guide and park entrance fee are all included.",
      img:'./assets/img/rover/eco.jpg'
    },
  ]

  //THE SUIT
  $scope.img_suit = './assets/img/suit/suit.jpg'
  $scope.vimeo_suit = 'https://vimeo.com/201934581'
  $scope.suit_activities = [
    {
      title:'RIDE IN STYLE',
      info:'Phone: + 57 1 743 0404 ext 106   E-mail: guestservice@clickclackhotel.com',
      text:"Let's face it: nobody likes a traffic jam. Nobody, that is, except the happy occupant of our gorgeous BMW 320i, guzzling down the in-car wi-fi and minibar snacks. Our 24-hour Big Shot service will take you to and from the airport, or wherever else you need to go around town.",
      img:'./assets/img/suit/car.jpg'
    },
    {
      title:'Work and Go',
      info:'Phone: + 57 1 675 7573   Address: Avenida 82 #11-40',
      text:"Working can be a lonely business. So why not head over to our favourite nearby co-working space? At Work & Go's beautiful installations you'll find everything you need to get the job done, including private meeting rooms, individual work stations, a concierge service, super comfy chairs - oh, and it just happens to be located right above a Starbucks.",
      img:'./assets/img/suit/work.jpg'
    },
    {
      title:'In-room massage',
      info:'Phone: + 57 1 743 0404 ext 106   E-mail: guestservice@clickclackhotel.com',
      text:"There's no need to leave your room. Just give reception a buzz and order up your favourite flavour of pampering. We offer relaxing massages for the stressed, sports massages for the gym-obsessed, body-shaping massages for the vain (a Colombian speciality - they really do work!), reflexology massages for those with specific aches and pains, and pre-natal massages for those with a little one on the way.",
      img:'./assets/img/suit/massage.jpg'
    }
  ]

  //THE PARTY ANIMAL
  $scope.img_party = './assets/img/party/party.jpg'
  $scope.vimeo_party = 'https://vimeo.com/201934333'
  $scope.party_activities = [
    {
      title:'El Titicó',
      info:'',
      text:"When it comes to salsa dancing, you want to experience the real deal. El Titicó is a classic old-school salsa joint, and the perfect spot to see some breath-takingly exciting and contagiously energetic moves, to the sound of Colombia's all-time favourite salsa tracks and fantastic live bands. This is not a touristy bar, so be prepared to raise some eyebrows - and perhaps be asked for a dance.",
      img:'./assets/img/party/titico.jpg'
    },
    {
      title:'Andrés Carne de Res',
      info:'Phone: +57 (1) 8637880    Address: Calle 3 #11A - 56, Chía, Cundinamarca',
      text:"Ah, Andrés. Where do we start? This Colombian institution is unparalleled on a global level. More of a village than a restaurant, the sheer size of the place is almost as impressive as its mind-bogglingly intricate and authentic décor, theatrical service and downright delicious traditional Colombian cuisine - and one hell of a party. Invariably filled with locals and tourists alike, Andrés seamlessly blurs the line between dinner and fiesta with fantastic Latin music, indoor and outdoor dance floors and seating, and numerous themed areas. This is a rite of passage for anyone visiting the city. Here are some recommendations to bear in mind if you find yourself getting lost in the extensive menu. For a large group, try the 'tostón con todo', a pizza-sized piece of fried plantain, topped with avocado, Colombian frijoles, chicharrones, and more national delicacies. Then there's the unmissable 'lomo al trapo', a choice cut of local beef, coated with condiments and wrapped in a cloth, then thrown straight onto the fire. The result is some of the most tender, flavoursome and unorthodox beef you've ever tried. To wash all that down, you want to order some 'cerveza michelada', lager freshened up with lime juice, salt and optional hot sauce. Or, if you need some Dutch courage before trying out your Latin dance moves, order a bottle of aguardiente, our local spirit, flavoured with aniseed and packing quite a punch.",
      img:'./assets/img/party/andres.jpg'
    },
    {
      title:'Asilo',
      info:'Phone: +57 311 2493453    Address: Cra 14 # 40-66',
      text:"Asilo is not a place you'll find in the travel guides. Located in what used to be a brothel, this place is, in a word, eclectic. Shabby chic and unpredictable playlists rule the roost at this trash-tactic bar, perfect for witnessing the amusing spectacle of a roomful of Colombians dancing to 80s punk rock. If you're keen to blend in with the locals, we recommend donning the unofficial uniform of Bogotá nightlife: a black leather jacket.",
      img:'./assets/img/party/asilo.jpg'
    },
    {
      title:'Theatron',
      info:'Phone: +57 (1) 2356879    Address: Calle 58 Bis #10-18',
      text:"Theatron is quite the experience. Thirteen clubs built into one, this vast labyrinth of dance halls, model villages, disco-amphitheatres and rooftop bars has long been considered the glittering hub of Bogota's gay nightlife scene. With a capacity of 4,000 people and a diverse range of music (you can stroll from rock 'n' roll to old-school salsa to Miley Cyrus), anyone and everyone can have a good time under this roof. Its size makes it a little more anonymous than most clubs, so it's best to go in a group and not accept any candy from strangers.",
      img:'./assets/img/party/theatron.jpg'
    },
    {
      title:'Smoking Molly',
      info:'Phone: +57 (1) 560 9680    Address: Calle 29 Bis # 5 - 74',
      text:"If live music is your thing, then you're sure to enjoy a stage-side seat at Smoking Molly. This intimate venue hosts some of the city's best blues, rock and jazz bands, in a cosy setting made all the cosier by a delicious selection of burgers. Check out their website to see what the line-up is, and head downtown for a chilled evening.",
      img:'./assets/img/party/smoking.jpg'
    },
    {
      title:'Playing "Tejo"',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"Tourists rarely set foot on the tejo courts of Bogotá, yet this is a favourite evening activity for locals. Tejo is a quintessentially Colombian game, a bit like boules but with two important twists: namely, beer and explosives. The bottle of beer in one hand is essential for balance and focus, we're told (and is preferably renewed between rounds). The explosives are harmless but certainly make things pretty exciting. The combination makes for a hilarious evening - and who knows, maybe you've got a hidden talent for it? We can organise it all for you, with transportation, tour guide and local beer included.",
      img:'./assets/img/party/tejo.jpg'
    },
  ]

  //THE CULTURE JUNKIE
  $scope.img_junkie = './assets/img/junkie/junkie.jpg'
  $scope.vimeo_junkie = 'https://vimeo.com/201934419'
  $scope.junkie_activities = [
    {
      title:'Local eats',
      info:'Address: Calle 73 # 15 - 55 AP 102',
      text:"Colombian cuisine includes a wide array of little-known delights, humble staples of the traditional diet that are often overlooked by tourists and gourmands. They are sadly underrated - and perhaps the most underrated of all is the exquisite arepa de choclo. A soft, sweet and salty cornbread filled with lashings of delicious cheese, the first-time addiction rate is pretty high on this one, we'll admit. But not all arepas de choclo are made equal. If you want to try the real deal, head over to an unassuming little spot called Don Ja (calle 73 #15-51). For more low-key but totally authentic local delicacies, head to Caracol Rojo for ceviche de camarones, Empanadas de Pipián for Colombian empanadas, and la Puerta Falsa for tamales and ajiaco.",
      img:'./assets/img/junkie/eats.jpg'
    },
    {
      title:'tonala',
      info:'Address: Cra. 6 #35-37',
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img:'./assets/img/junkie/tonala.jpg'
    },
    {
      title:'Villa de Leyva',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"Asilo is not a place you'll find in the travel guides. Located in what used to be a brothel, this place is, in a word, eclectic. Shabby chic and unpredictable playlists rule the roost at this trash-tactic bar, perfect for witnessing the amusing spectacle of a roomful of Colombians dancing to 80s punk rock. If you're keen to blend in with the locals, we recommend donning the unofficial uniform of Bogotá nightlife: a black leather jacket.",
      img:'./assets/img/junkie/villa.jpg'
    },
    {
      title:'Hacienda Santa Coloma',
      duration:'Duration: 9 hours',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"There are a lot of reasons to visit this incredible country, but great coffee tends to be pretty high up the list for a lot of people. If you've ever wondered where your coffee comes from, or you just want a first-hand experience of this key facet of Colombia's culture, development and economy, then you should definitely check out the traditional coffee plantation at Santa Coloma. And we promise, once you've seen how your coffee is cultivated, harvested and processed, your morning cup of Colombia's finest will taste just that little bit better. Transportation, tour guide and entrance fee to the Hacienda are included.",
      img:'./assets/img/junkie/hacienda.jpg'
    },
    {
      title:'Guatavita',
      duration:'Duration: 4 hours',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"The legend of El Dorado originated in the amazing, authentic town of Guatavita. Legend says underneath the Guatavita lake lays the entire town of El Dorado, we won't spoil the rest of the story just because it's worth listening to the entire story while standing in the middle of the small, colonial town. Includes: transportation, tour guide, entrance to the Secret Lake Guatavita",
      img:'./assets/img/junkie/guatavita.jpg'
    },
    {
      title:'Zipaquira',
      duration:'Duration: 5 hours',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"The sleepy town of Zipaquirá is home to a spectacularly quirky piece of architecture: an underground cathedral, carved into the walls of an abandoned salt mine. Let your tour guide explain how this feat was achieved and drink in the atmosphere at this imposing - and somewhat bizarre - site. Transportation, tour guide and entrance fee are included.",
      img:'./assets/img/junkie/zipaquira.jpg'
    },
    {
      title:'City Tour',
      duration:'Duration: 6 hours',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"Start the morning with a cable car trip up to Monserrate, the magnificent white church crowning Bogota's lush eastern peaks. Enjoy the best view the city has to offer, get a sense of the cultural importance of Catholicism in Colombia, and maybe wash it down with a quick drink of 'canelazo' (a warming cinnamon drink with a dash of aguardiente intended to help you cope with the altitude). Then head back down into the city's historic centre to enjoy a glorious display of colourful colonial architecture, and delve into the secrets of Colombian history at the Gold Museum, the Emerald Museum and the Botero Museum. And of course, you'll have the chance to indulge in some traditional Colombian fare at the many authentic restaurants in the area (we recommend la Puerta Falsa and La Florida bakery). Transportation, tour guide, insurance and museum entrance fees are included.",
      img:'./assets/img/junkie/city.jpg'
    },
    {
      title:'Historic Bogotá',
      duration:'',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"To get to grips with Colombian culture, Bogotá's historic city centre is probably the best place to start. Not only will you find most of the city's museums and art galleries concentrated in this area, you'll also be walking the streets and exploring the plazas where the most defining moments of the country's history were played out - indeed, where Colombia as a country was officially born. The Gold Museum will take you further back and give you a glimpse of pre-Colombian culture over the centuries, through a showcase of staggeringly beautiful and intricate indigenous handiwork. Delicious traditional eateries and colourful colonial architecture will immerse you in Colombian culture and give you a taste of where this nation came from and what it's all about. Included in this tour are transportation, tour guide, and entrance fees to the Gold Museum, the Emerald Museum and the Botero Museum.",
      img:'./assets/img/junkie/historic.jpg'
    },
    {
      title:'Monserrate',
      duration:'',
      info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
      text:"It's hard to miss Monserrate. A gleaming white church high up on the green Andean mountains flanking Bogota's eastern edge, it can be accessed either by cable car or by funicular (or, if you're feeling pumped, you can head up on foot). Not only will you be rewarded by the best views the city has to offer, but you'll also be able to explore the church and understand the relevance of Catholicism in this country. Should the fresh Andean air start to feel a little too fresh, you can duck into the quirky 1920s-style restaurant perched elegantly on the mountainside to continue enjoying the vista from a cosier spot, with a drink in hand. Or if you prefer something more low-key, a mini-market behind the church offers local delicacies such as 'canelazo', a sort of cinnamon-infused Colombian hot toddy. It's intended to cure any altitude sickness you may have. We can't vouch for that, but we will agree that a dash of aguardiente tends to cure most things. Ask at reception for the funicular and cable car timetables.",
      img:'./assets/img/junkie/monserrate.jpg'
    },
  ]

  //THE SHOPAHOLIC
  $scope.img_shop = './assets/img/shop/shop.jpg'
  $scope.vimeo_shop = 'https://vimeo.com/201934132'
  $scope.shop_activities = [
    {
      title:'Casa Précis',
      info:'Phone: (57) 318 7421010    Address: Calle 79A #8-45 Bogota',
      text:"Colombian fashion is at an incredibly exciting moment in its development. Myriad young designers with strikingly unique aesthetic visions are creating their own brands - and some of the most talented and adventurous among them can be found under one roof at Casa Précis. From handbags and shoes to jewellery and swimwear, each piece found at this impeccably curated multi-brand boutique is a work of art in its own right that will certainly turn heads wherever you take it.",
      img:'./assets/img/shop/casa.jpg'
    },
    {
      title:'Zona Andino',
      info:'Phone: (1) 6213111    Address: Cra 11 #82-71',
      text:"A 10-minute walk from the hotel will land you right between two of the city's favourite shopping centres: el Andino and el Retiro. Here you will be able to find both international classics, such as Coach, Louis Vuitton and Dolce & Gabbana, as well as top local brands, including Mario Hernández for leather goods (a Colombian speciality), Agua Bendita (head-turning bikinis are another national strong suit) and Arturo Calle (for quality menswear). Explore a little further in the streets surrounding these shopping centres, and you'll discover smaller independent local brands, such as Silvia Tscherassi, Olga Piedrahita, Argento & Bourbon and Juan Studios (as well as a couple of multinational giants - a shopping district isn't a shopping district without Zara and Forever 21).",
      img:'./assets/img/shop/andino.jpg'
    }
  ]

});
