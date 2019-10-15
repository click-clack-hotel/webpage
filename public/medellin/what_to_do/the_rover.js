var app = angular.module('app', []);
app.controller('the_rover', function($scope, $http) {

  $scope.id = 'what_to_do';
  //THE ROVER
  $scope.img_suit = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226549367_suit.jpg?alt=media'
  $scope.img_party = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226597506_party.jpg?alt=media'
  $scope.img_junkie = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226656685_junkie.jpg?alt=media'
  $scope.img_shop = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226735490_shop.jpg?alt=media'
  $scope.img = 'https://firebasestorage.googleapis.com/v0/b/click-clack-5db9f.appspot.com/o/flamelink%2Fmedia%2F1547226163401_rover.jpg?alt=media'
  
  $scope.name = 'THE ROVER'
  $scope.vimeo = 'https://vimeo.com/201933803'
  $scope.text = "We know our rooms are comfy and all, but it's a shame to find yourself in one of the planet's most biodiverse countries and not go and explore. So let us deal with the arrangements while you get your boots on and discover Colombia's best spots through a range of experiences exclusive to Click Clack guests."
  $scope.text_es = 'Sabemos que nuestras habitaciones son muy cómodas, pero sería una lástima que vinieras a uno de los países con mayor biodiversidad del planeta y no salieras a explorar un poco. Así que déjanos que organicemos todo mientras tú te pones los zapatos - o el bikini, y descubre lo que la geografía andina tiene para ti en Bogotá y sus alrededores, tras una selección de experiencias exclusivas de The Click Clack Hotel.'
  $scope.activities = [
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
