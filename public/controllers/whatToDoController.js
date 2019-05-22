var app = angular.module('App', []);
app.controller('whatToDoController', function($scope, $http) {
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

    //THE ROVER
    $scope.img_rover = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226163401_rover.jpg?alt=media'
    $scope.vimeo_rover = 'https://vimeo.com/201933803'
    $scope.text_rover = "We know our rooms are comfy and all, but it's a shame to find yourself in one of the planet's most biodiverse countries and not go and explore. So let us deal with the arrangements while you get your boots on and discover Colombia's best spots through a range of experiences exclusive to Click Clack guests."
    $scope.text_rover_es = 'Sabemos que nuestras habitaciones son muy cómodas, pero sería una lástima que vinieras a uno de los países con mayor biodiversidad del planeta y no salieras a explorar un poco. Así que déjanos que organicemos todo mientras tú te pones los zapatos - o el bikini, y descubre lo que la geografía andina tiene para ti en Bogotá y sus alrededores, tras una selección de experiencias exclusivas de The Click Clack Hotel.'
    $scope.rover_activities = [
      {
        title:'Horseback Riding (5 hours)',
        title_es:'Cabalgata (5 horas)',
        text:"Crossing the ridge of Bogotá's eastern mountains is a surreal experience, transporting you in a matter of minutes from the urban jungle of the country's capital to rolling green hills dotted with cows and farmhouses. Tucked away among the meadows lies the town of La Calera, an ideal spot for horse riding with great views, both of the country's capital, and of the nearby San Rafael reservoir. Transportation, tour guide, and - of course - the horse are all included.",
        text_es:"En un pueblo a una hora de Bogotá, donde a las personas les gusta ir a montar a caballo por la vista tan increíble que hay de la ciudad. Después de una hora de cabalgar alrededor de La Calera, disfrutarán de otra gran vista en la presa de San Rafael.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226148862_horse.jpg?alt=media'
      },
      {
        title:'Paragliding (6 hours)',
        title_es:'Parapente (6 horas)',
        text:"The lush green hills and meadows surrounding Bogotá are known as 'la Sabana'. The beautiful natural scenery features unique landscapes called 'páramos', misty moor-like ecosystems found only in a few corners of the planet, with their own bizarre flora and fauna. The best way to see it for yourself? From the air, of course! After the initial adrenaline rush of taking off, the surreal calm of gliding through the air will leave you tingly all over and keen to do it all again. This tour includes transportation, tour guide, flight instructor, safety equipment and insurance coverage.",
        text_es:"¡La sabana colombiana es uno de nuestros orgullos más grandes! Las montañas, los pastos verdes y la vista casi surreal hacen que sea uno de los paseos en carro más bonitos del país. Sin embargo, hay una mejor forma de disfrutar el escenario Cundiboyacense: ¡En parapente! Flotar por encima de las montañas es algo casi indescriptible: la paz y la calma que se siente hacen de esta una experiencia única. - Sujeto a condiciones climáticas.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226112246_paragliding.jpg?alt=media'
      },
      {
        title:'Zipaquira & Guatavita (10 hours)',
        title_es:'Zipaquira & Guatavita (10 horas)',
        text:"Spoiler alert: the legend of El Dorado did not arise from our creatively named local airport. Its origins lie in the nearby town of Guatavita, where we'll happily fill you in on the real story while you chow down on some local cuisine. But before we reach our destination, we'll stop by Zipaquirá and its spectacular Salt Cathedral - an impressive feat of ecclesiastical architecture carved into an underground salt mine. This tour includes transportation, tour guide and entrance to the cathedral. All you need to bring are some hiking shoes and comfortable clothes.",
        text_es:"Saliendo de Bogotá, muy temprano en la mañana, vamos en dirección al pueblo de Zipaquirá para visitar la famosa Catedral de Sal, un monumento arquitectónico construido al interior de una mina de sal abandonada. Después de salir de la mina, paramos en Guatavita a almorzar comida típica y escuchar las historias de la leyenda de El Dorado en el pueblo donde se originó.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226079392_zipaquira.jpg?alt=media'
      },
      {
        title:'Guatavita (7 hours)',
        title_es:"Guatavita (7 horas)",
        text:"The charming town of Guatavita and its peaceful lake don't look like they've seen much drama over the years. But this was once the site of spectacular sacrificial rituals, with vast quantities of gold sent plunging into the depths of the dark lake. Hear the story of the Muisca people and their ancient magic, from the heart of this untouched, traditional Colombian town. Includes transportation, tour guide, and entrance fees for the lake visit.",
        text_es:"La famosa leyenda de El Dorado es original de este increíble y auténtico pueblo llamado Guatavita. Dice la leyenda que debajo del lago yace el antiguo pueblo El Dorado y no les vamos a contar si eso es cierto o no, porque vale la pena escuchar la historia completa estando en el pueblo.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226064939_guatavita.jpg?alt=media'
      },
      {
        title:'Chicaque Natural Park - Ecotourism (7 horas)',
        title_es:'Chicaque Parque Natural - Ecoturismo (7 horas)',
        text:"You might not believe it when you're sat in the middle of some heavy Bogotá traffic, but you're actually not far from one of the region's largest cloud forests. Many of the stunning plants and animals to be found at the Chicaque National Park are unique to this country. Colombia is home to a greater number of bird species than any other country on the planet, and Chicaque is the perfect place for you to indulge in a little ornithology. You're gonna need a change of clothes for this one - plus some hiking boots and a rucksack (backpack). Transportation, tour guide and park entrance fee are all included.",
        text_es:"El parque Chicaque es casa de uno de los bosques de niebla más espectaculares de la zona, con una gran variedad de pájaros y otros animales que se pueden observar viviendo en su ambiente natural.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226045825_eco.jpg?alt=media'
      },
      {
        title:'Villa de Leyva (1 or 2 days)',
        title_es:"Villa de Leyva (1 o 2 dias)",
        info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
        text_es:"El pueblo de Villa de Leyva es uno de los pocos pueblos que conserva su arquitectura colonial casi intacta. Recomendamos mucho este paseo para personas que les gusta recorrer calles empedradas, llenas de historias que han inspirado a poetas y escritores a través del tiempo. El pueblo tiene el tamaño perfecto recorrerlo caminando o para recorrer su alrededores en bicicleta.",
        text:"The colonial architecture and charm of this historic settlement have been lovingly preserved by its proud residents. Let us take you on a walking tour through its cobbled streets to discover the history behind the most beautiful town in the Boyaca region, or you can hop on a bike if you prefer. Among the white-washed walls, terracotta roofing, colonial churches and plenty of locals on horseback, you can't help but feel you've travelled back in time.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226648119_villa.jpg?alt=media'
      },
      {
        title:'City Tour & Monserrate (6 hours)',
        title_es:'Paseo por la Ciudad & Monserrate (6 horas)',
        info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
        text:"Start the morning with a cable car trip up to Monserrate, the magnificent white church crowning Bogota's lush eastern peaks. Enjoy the best view the city has to offer, get a sense of the cultural importance of Catholicism in Colombia, and maybe wash it down with a quick drink of 'canelazo' (a warming cinnamon drink with a dash of aguardiente intended to help you cope with the altitude). Then head back down into the city's historic centre to enjoy a glorious display of colourful colonial architecture, and delve into the secrets of Colombian history at the Gold Museum, the Emerald Museum and the Botero Museum. And of course, you'll have the chance to indulge in some traditional Colombian fare at the many authentic restaurants in the area (we recommend la Puerta Falsa and La Florida bakery). Transportation, tour guide, insurance and museum entrance fees are included.",
        text_es:'Visita Monserrate, un lugar con una vista de la ciudad sorprendente y aprende la importancia que tiene la religión en la cultura colombiana, entrando a una de los santuarios más importantes de la ciudad. Después de Monserrate, visita el centro de Bogotá: Hoy en día una de las áreas más ricas culturalmente de la ciudad. La arquitectura colonial, teatros, museos y restaurantes típicos – Personalmente, recomendamos el restaurante La Puerta Falsa y la pastelería La Florida – hacen que La Candelaria sea una de las áreas más importantes de visitar en la ciudad.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226631352_city.jpg?alt=media'
      },
      {
        title:'Monserrate(4 hours)',
        title_es:"Monserrate (4 horas)",
        info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
        text:"It's hard to miss Monserrate. A gleaming white church high up on the green Andean mountains flanking Bogota's eastern edge, it can be accessed either by cable car or by funicular (or, if you're feeling pumped, you can head up on foot). Not only will you be rewarded by the best views the city has to offer, but you'll also be able to explore the church and understand the relevance of Catholicism in this country. Should the fresh Andean air start to feel a little too fresh, you can duck into the quirky 1920s-style restaurant perched elegantly on the mountainside to continue enjoying the vista from a cosier spot, with a drink in hand. Or if you prefer something more low-key, a mini-market behind the church offers local delicacies such as 'canelazo', a sort of cinnamon-infused Colombian hot toddy. It's intended to cure any altitude sickness you may have. We can't vouch for that, but we will agree that a dash of aguardiente tends to cure most things. Ask at reception for the funicular and cable car timetables.",
        text_es:"La religión es una parte muy importante para la cultura colombiana y Monserrate es uno de los santuarios más icónicos para la ciudad. La iglesia de Monserrate está localizada en la punta de unas de las montañas más importantes de Los Andes y desde allí se puede apreciar una vista increíble de la cordillera.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226637635_monserrate.jpg?alt=media'
      },
      {
        title:'Historic Bogotá (4 hours)',
        title_es:"Bogotá Histórica (4 horas)",
        info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
        text:"To get to grips with Colombian culture, Bogotá's historic city centre is probably the best place to start. Not only will you find most of the city's museums and art galleries concentrated in this area, you'll also be walking the streets and exploring the plazas where the most defining moments of the country's history were played out - indeed, where Colombia as a country was officially born. The Gold Museum will take you further back and give you a glimpse of pre-Colombian culture over the centuries, through a showcase of staggeringly beautiful and intricate indigenous handiwork. Delicious traditional eateries and colourful colonial architecture will immerse you in Colombian culture and give you a taste of where this nation came from and what it's all about. Included in this tour are transportation, tour guide, and entrance fees to the Gold Museum, the Emerald Museum and the Botero Museum.",
        text_es:"Todo comenzó en el Chorro de Quevedo, por lo menos toda Colombia como la conocemos hoy en día. Para entender la cultura Bogotana, es importante conocer el centro de la ciudad: La Candelaria, el lugar donde se fundó Bogotá y hoy en día es una de las áreas más ricas culturalmente de la ciudad. La arquitectura colonial, teatros, museos y restaurantes típicos – Personalmente, recomendamos el restaurante La Puerta Falsa y la pastelería La Florida – hacen que La Candelaria sea una de las áreas más importantes de visitar en la ciudad.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226626049_historic.jpg?alt=media'
      },
      {
        title:'Hacienda Coloma (7 hours)',
        title_es:"Hacienda Coloma (7 horas)",
        info:'Phone: + 57 1 743 0404 ext 106    E-mail: guestservice@clickclackhotel.com',
        text:"There are a lot of reasons to visit this incredible country, but great coffee tends to be pretty high up the list for a lot of people. If you've ever wondered where your coffee comes from, or you just want a first-hand experience of this key facet of Colombia's culture, development and economy, then you should definitely check out the traditional coffee plantation at Santa Coloma. And we promise, once you've seen how your coffee is cultivated, harvested and processed, your morning cup of Colombia's finest will taste just that little bit better. Transportation, tour guide and entrance fee to the Hacienda are included.",
        text_es:"La Hacienda Coloma es una hacienda cafetera donde sus visitantes pueden aprender sobre el proceso de hacer café: La hacienda es una gran aventura, si el café es una de las razones por las que estás visitando Colombia. Para llegar a la hacienda debes dirigirte a Fusagasugá, un pueblo típico cercano a Bogotá, donde disfrutarás de una vista inigualable de la Sabana.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226622982_hacienda.jpg?alt=media'
      },
    ]

    //THE SUIT
    $scope.img_suit = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media'
    $scope.vimeo_suit = 'https://vimeo.com/201934581'
    $scope.text_suit = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    $scope.text_suit_es = 'Encontraste la sección  donde te ayudamos a mantener tu trabajo marchando bien, tus amigos felices de que no llegues tarde a sus citas y tu salud justo donde la deseaste en año nuevo. Todo lo que necesitas para mantener la vida contemporánea andando como es demandado socialmente.'
    $scope.suit_activities = [
      /*{
        title:'title',
        title_es:'titulo',
        info:'info',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        text_es:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226551220_massage.jpg?alt=media'
      },*/
      {
        title:'RIDE IN STYLE',
        title_es:'Transporte',
        info:'Phone: + 57 1 743 0404 ext 106   E-mail: guestservice@clickclackhotel.com',
        text:"Let's face it: nobody likes a traffic jam. Nobody, that is, except the happy occupant of our gorgeous BMW 320i, guzzling down the in-car wi-fi and minibar snacks. Our 24-hour Big Shot service will take you to and from the airport, or wherever else you need to go around town.",
        text_es:"Sin tiempo para llamar taxi o abrir tu app y pedir un carro. Tranquilo, lo hacemos por ti. ",
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226555005_car.jpg?alt=media'
      },
      {
        title:'Work and Go',
        title_es:'Meeting room',
        info:'Phone: + 57 1 675 7573   Address: Avenida 82 #11-40',
        text:"Working can be a lonely business. So why not head over to our favourite nearby co-working space? At Work & Go's beautiful installations you'll find everything you need to get the job done, including private meeting rooms, individual work stations, a concierge service, super comfy chairs - oh, and it just happens to be located right above a Starbucks.",
        text_es:'Sabemos que tienes mucho que hacer y en qué pensar. Cuéntanos, ¿cómo podemos ayudarte? ¿un espacio tranquilo para trabajar? Lo tenemos. Reserva con nuestro equipo. Tel: + 57 1 743 0404 ext 106 E-mail: guestservice@clickclackhotel.com',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226553202_work.jpg?alt=media'
      }
    ]

    //THE PARTY ANIMAL
    $scope.img_party = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226597506_party.jpg?alt=media'
    $scope.vimeo_party = 'https://vimeo.com/201934333'
    $scope.text_party = 'Nobody parties like Colombia parties. You have to experience this for yourself.'
    $scope.text_party_es = 'Sí. Importante salir a conocer el nightlife bogotano. No puedes dejar de saber cómo se va de fiesta en la capital colombiana. Ponte un buen outfit, pide un carro - También te ayudamos con esto- ¡y a la calle!'
    $scope.party_activities = [
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

    //THE CULTURE JUNKIE
    $scope.img_junkie = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
    $scope.vimeo_junkie = 'https://vimeo.com/201934419'
    $scope.text_junkie = 'You want to make sure you sound sufficiently refined when you report your travels back to your friends, so make room for some cultural pursuits in between hangovers. Here are a few to try'
    $scope.text_junkie_es = 'Importante tener comentarios para hacerle a tus amigos cosmopolitas cuando vuelvas a casa: Encuentra planes culturales para realizar y armarte de buenas historias para tu vuelta a casa.'

    $scope.junkie_activities = [
      {
        title:'Teatro Mayor Julio Mario Santo Domingo',
        info:'',
        text:" A well-sized theatre with local and international performances covering opera, contemporary dance, ballet, theatre, musicals and concerts of a range of genres.",
        text_es:'Espacio cultural con una capacidad máxima de 1.303 espectadores que presenta temporadas de espectáculos de ópera,  musicales, conciertos, ballet clásico, danza contemporánea y obras de teatro. ',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
      },
      {
        title:'Teatro Colón',
        info:'',
        text:"The BBC reckons this is one of the world’s most impressive theatres thanks to its unexpectedly opulent architecture. We heartily agree. With a programme covering theatre, dance, circus, opera, classical music and more, the home of the Colombian National Symphonic Orchestra has plenty to offer.",
        text_es:'Catalogado por la BBC de Londres como uno de los teatros más sorprendentes del mundo por su imponente arquitectura. Danza, teatro, espectáculos infantiles, circo, música urbana y tradicional, ópera y música clásica, entre otros géneros.  El Colón es la casa de la Orquesta Sinfónica Nacional de Colombia.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
      },
      {
        title:'Museo del Oro',
        info:'',
        text:"An unmissable experience for those who want to truly understand this country’s pre-columbian roots, Bogota’s Gold Museum will tell you the tale of this nation through breathtaking ancient treasures, beautifully preserved and presented.",
        text_es:'Catalogado por la BBC de Londres como uno de los teatros más sorprendentes del mundo por su imponente arquitectura. Danza, teatro, espectáculos infantiles, circo, música urbana y tradicional, ópera y música clásica, entre otros géneros.  El Colón es la casa de la Orquesta Sinfónica Nacional de Colombia.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
      }
    ]

    //THE SHOPAHOLIC
    $scope.img_shop = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
    $scope.vimeo_shop = 'https://vimeo.com/201934132'
    $scope.text_shop = 'Retail therapy works, guys. And if you don’t need to take gifts back for anyone at home - it’s time to treat yo’ self.'
    $scope.text_shop_es = 'Sabemos que tienes a alguien en casa esperando su regalo de tu visita a Bogotá. Encuentra en esta sección varias opciones para hacerlo. ¡Recuerda que seguramente el cambio a divisa local te ayuda!'

    $scope.shop_activities = [
      {
        title:'Casa Précis',
        info:'Phone: (57) 318 7421010    Address: Calle 79A #8-45 Bogota',
        text:"Colombian fashion is at an incredibly exciting moment in its development. Myriad young designers with strikingly unique aesthetic visions are creating their own brands - and some of the most talented and adventurous among them can be found under one roof at Casa Précis. From handbags and shoes to jewellery and swimwear, each piece found at this impeccably curated multi-brand boutique is a work of art in its own right that will certainly turn heads wherever you take it.",
        text_es:'Es un espacio donde el arte se convierte en moda. Es esta tienda encontrarás las marcas emergentes más representativas del país.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226732573_casa.jpg?alt=media'
      },
      {
        title:'Centro Comercial Andino',
        info:'Phone: (1) 6213111    Address: Cra 11 #82-71',
        text:"A 10-minute walk from the hotel will land you right between two of the city's favourite shopping centres: el Andino and el Retiro. Here you will be able to find both international classics, such as Coach, Louis Vuitton and Dolce & Gabbana, as well as top local brands, including Mario Hernández for leather goods (a Colombian speciality), Agua Bendita (head-turning bikinis are another national strong suit) and Arturo Calle (for quality menswear). Explore a little further in the streets surrounding these shopping centres, and you'll discover smaller independent local brands, such as Silvia Tscherassi, Olga Piedrahita, Argento & Bourbon and Juan Studios (as well as a couple of multinational giants - a shopping district isn't a shopping district without Zara and Forever 21).",
        text_es:'A diez minutos del hotel se encuentra uno de los centros comerciales más tradicionales de la ciudad. Cuenta con 22 tiendas de marcas entre internacionales como Louis Vuitton, Coach, Dolce and Gabbana y colombianas como Mario Hernández, Arturo Calle y Vélez.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226730496_andino.jpg?alt=media'
      },
      {
        title:'Atlantis Plaza',
        info:'',
        text:" Here you can find local and international design, home decor, accessories, jewellery, fragrances and more.",
        text_es:'Encuentra aquí un lugar con variedad de tiendas de diseño local e internacional, accesorios, decoración, hogar y perfumería. Claro, también joyería, relojería, salud y belleza. Muy cerca al Centro Comercial Andino. En esta zona encontrarás seguro todo lo que necesitas. ',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
      },
      {
        title:'Parque La Colina',
        info:'',
        text:"Because shopping is always better with a food court, cinemas and games area.",
        text_es:'Cuenta con un diseño moderno y ofrece a sus clientes un mix comercial único, marcas semi-anclas, un boulevard gastronómico, plazoleta de comidas, cines y juegos. ',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
      },
      {
        title:'El Retiro',
        info:'',
        text:"Brimming with exclusive national and international brands, this shopping centre has plenty to offer in terms of fashion, accessories and food. It’s right opposite the Andino, so this is the best area to begin your shopping spree.",
        text_es:'El Centro Comercial de más alto perfil en Bogotá. Con una ubicación estratégica, de fácil acceso por las principales vías y en una zona caracterizada por su alta actividad gastronómica y comercial. Reconocido como un centro comercial con marcas exclusivas locales e internacionales.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
      },
      {
        title:'Unicentro',
        info:'',
        text:"With 312 stores, you’re bound to find what you’re looking for at this shopping centre, equipped with cinema, games area, food court and more.",
        text_es:'Uno de los centros comerciales más visitado por los bogotanos, con plazoleta de comida, 312 tiendas, 3200 parqueaderos y un diseño moderno vanguardista.',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
      },
    ]

    //THE FOODIE RAPTOR
    $scope.img_raptor = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media'
    $scope.vimeo_raptor = 'https://vimeo.com/201934581'
    $scope.text_raptor = 'There are fruits and vegetables in this country that you won’t find anywhere else in the world. And unless you fancy heading to a national park or a wholesale market place, the best way to sample them is to head to a restaurant where top chefs use local ingredients to make exquisite dishes from various national cuisines and fusions. Here are a few of our favourites'
    $scope.text_raptor_es = 'Hay tres formas de comprobar la biodiversidad colombiana: Yendo a una plaza de mercado, yendo una reserva natural o eligiendo un buen restaurante para probar los platos que reconocidos chefs elaboran con nuestros tubérculos, cereales, frutas y hortalizas. Acá un par de opciones.'

    $scope.raptor_activities = [
      {
        title:'Mesa Franca',
        info:"",
        text:"",
        text_es:"",
        img:"https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media"
      },
      {
        title:'Bandido',
        info:"",
        text:"",
        text_es:"",
        img:"https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media"
      },
      {
        title:'El Chato',
        info:"",
        text:"",
        text_es:"",
        img:"https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media"
      },
      {
        title:'Insurgentes',
        info:"",
        text:"",
        text_es:"",
        img:"https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media"
      },
      {
        title:'Siete Cabras',
        info:"",
        text:"",
        text_es:"",
        img:"https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media"
      },
      {
        title:'Emilia Grace',
        info:"",
        text:"",
        text_es:"",
        img:"https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media"
      },
      {
        title:'Andrés Carne de Res',
        info:'Phone: +57 (1) 8637880    Address: Calle 3 #11A - 56, Chía, Cundinamarca',
        text:"Ah, Andrés. Where do we start? This Colombian institution is unparalleled on a global level. More of a village than a restaurant, the sheer size of the place is almost as impressive as its mind-bogglingly intricate and authentic décor, theatrical service and downright delicious traditional Colombian cuisine - and one hell of a party. Invariably filled with locals and tourists alike, Andrés seamlessly blurs the line between dinner and fiesta with fantastic Latin music, indoor and outdoor dance floors and seating, and numerous themed areas. This is a rite of passage for anyone visiting the city. Here are some recommendations to bear in mind if you find yourself getting lost in the extensive menu. For a large group, try the 'tostón con todo', a pizza-sized piece of fried plantain, topped with avocado, Colombian frijoles, chicharrones, and more national delicacies. Then there's the unmissable 'lomo al trapo', a choice cut of local beef, coated with condiments and wrapped in a cloth, then thrown straight onto the fire. The result is some of the most tender, flavoursome and unorthodox beef you've ever tried. To wash all that down, you want to order some 'cerveza michelada', lager freshened up with lime juice, salt and optional hot sauce. Or, if you need some Dutch courage before trying out your Latin dance moves, order a bottle of aguardiente, our local spirit, flavoured with aniseed and packing quite a punch.",
        text_es:'Una fiesta como ninguna otra en el mundo. Con su servicio  casi teatral, es el favorito de locales y extranjeros. El menú de Andrés es realmente extenso y con tantas opciones a veces es muy fácil confundirse, pero si lo que quieres es vivir la experiencia más local, acá te dejamos una lista de sugerencias: 1. Tostón con todo:; es una ¨pizza¨ a base de plátano verde crocante, con queso gratinado que viene con distintas adiciones colombianas como aguacate, carne desmechada, chicharrones, fríjoles, entre otras. Lo armas a tu gusto. 2. Micheladas: muy parecidas a la mexicanas, es una cerveza ligera helada con tabasco, limón, salsa inglesa y sal) 3. Lomo al trapo; Un corte de carne cubierto totalmente en sal, envuelto en un trapo y cocido al fuego directo. El resultado es un pedazo de carne extremadamente jugoso. 4. Arepa de choclo: Es una arepa salada hecha de maíz dulce rellena de queso (es un acompañante) 5. Aguardiente: Es el trago más tomado en Colombia, es fuerte y se toma en shots. Les recomendamos pedir un trago inicialmente, si les gusta: ¡pidan una botella entera y disfruten la fiesta! ',
        img:'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226581458_andres.jpg?alt=media'
      }
    ]

})
