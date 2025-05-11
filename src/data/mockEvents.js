export const mockEvents = [
  {
    id: "1",
    title: "Sydney Opera House Symphony",
    description: "Experience the majestic sounds of the Sydney Symphony Orchestra performing classical masterpieces in the iconic Sydney Opera House. This evening features works by Mozart, Beethoven, and Tchaikovsky under the direction of renowned conductor Sarah Johnson.\n\nThe program includes Mozart's Overture to 'The Marriage of Figaro,' Beethoven's Piano Concerto No. 5 'Emperor' with guest soloist David Chen, and Tchaikovsky's Symphony No. 5.\n\nDoors open 45 minutes before the performance. Smart casual attire is recommended.",
    imageUrl: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-01-15",
    startTime: "19:30",
    endTime: "21:30",
    location: "Sydney Opera House",
    locationSlug: "cbd",
    category: "Music",
    price: 89.99,
    featured: true,
    ticketUrl: "https://www.sydneyoperahouse.com",
    capacity: 2000,
    organizer: {
      name: "Sydney Symphony Orchestra",
      description: "Official orchestra of the Sydney Opera House"
    },
    coordinates: [151.2153, -33.8568]
  },
  {
    id: "2",
    title: "Bondi Beach Food Festival",
    description: "Join us at the annual Bondi Beach Food Festival, celebrating the diverse culinary scene of Sydney. Sample delicious food from over 50 local restaurants, enjoy cooking demonstrations from celebrity chefs, and sip on craft beers and local wines while enjoying the beautiful beach views.\n\nThis year's festival features themed zones including Asian Street Food, Mediterranean Delights, and Aussie BBQ Classics. There will be live music performances throughout the day and activities for children in the Family Zone.\n\nEntry ticket includes 5 food sample tokens and a reusable festival cup.",
    imageUrl: "https://images.pexels.com/photos/5718014/pexels-photo-5718014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-02-10",
    startTime: "11:00",
    endTime: "21:00",
    location: "Bondi Beach Pavilion",
    locationSlug: "bondi",
    category: "Food",
    price: 45.00,
    featured: true,
    ticketUrl: "https://www.bondifoodfestival.com.au",
    capacity: 5000,
    organizer: {
      name: "Sydney Food Events",
      description: "Premier food festival organizers in NSW"
    },
    coordinates: [151.2747, -33.8914]
  },
  {
    id: "3",
    title: "Vivid Sydney Light Show",
    description: "Experience the spectacular Vivid Sydney, an annual festival of light, music and ideas. Marvel at the stunning light installations and projections that transform the Sydney Harbour and surrounding landmarks into a magical canvas of creativity.\n\nThis year's theme is 'Connections' and features works from local and international artists. The light walk takes approximately 2-3 hours to complete at a leisurely pace and includes interactive installations where visitors can become part of the art.\n\nDon't miss the synchronized light and music shows at Circular Quay every hour on the hour.",
    imageUrl: "https://images.pexels.com/photos/20613422/pexels-photo-20613422/free-photo-of-opera-house-in-sydney.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-05-22",
    startTime: "18:00",
    endTime: "23:00",
    location: "Sydney Harbour",
    locationSlug: "cbd",
    category: "Arts",
    price: 0,
    featured: false,
    ticketUrl: "https://www.vividsydney.com",
    capacity: 50000,
    organizer: {
      name: "Destination NSW",
      description: "NSW Government tourism agency"
    },
    coordinates: [151.2100, -33.8600]
  },
  {
    id: "4",
    title: "Manly Craft Beer Festival",
    description: "Celebrate the best craft breweries of Australia at the Manly Craft Beer Festival. With over 30 breweries participating, you'll have the opportunity to taste unique and innovative brews while enjoying the beautiful Manly Beach surroundings.\n\nThe festival includes beer tasting sessions, brewery talks, food pairing demonstrations, and live music from local bands. Each brewery will offer special festival-exclusive beers that you won't find elsewhere.\n\nTicket includes entry, a festival glass, and 10 tasting tokens.",
    imageUrl: "https://images.pexels.com/photos/1269043/pexels-photo-1269043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-03-08",
    startTime: "12:00",
    endTime: "20:00",
    location: "Manly Beach",
    locationSlug: "manly",
    category: "Food",
    price: 55.00,
    featured: false,
    ticketUrl: "https://www.manlybeer.com.au",
    capacity: 3000,
    organizer: {
      name: "Craft Beer Australia",
      description: "Promoting craft brewing across Australia"
    },
    coordinates: [151.2853, -33.7969]
  },
  {
    id: "5",
    title: "Sydney Marathon",
    description: "Take part in one of Australia's most scenic running events, the Sydney Marathon. The course takes you across the iconic Sydney Harbour Bridge, past the Opera House, through the Royal Botanic Gardens, and along the stunning harbour foreshore.\n\nChoose from the full marathon (42.2km), half marathon (21.1km), 10km run, or 5km fun run. All participants receive a medal, t-shirt, and post-race recovery pack. Spectators can enjoy entertainment and food stalls at the finish line in the Royal Botanic Gardens.\n\nRegistration closes two weeks before the event date.",
    imageUrl: "https://images.pexels.com/photos/2526671/pexels-photo-2526671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-09-15",
    startTime: "07:00",
    endTime: "14:00",
    location: "Sydney Harbour Bridge",
    locationSlug: "cbd",
    category: "Sports",
    price: 120.00,
    featured: false,
    ticketUrl: "https://www.sydneymarathon.com",
    capacity: 15000,
    organizer: {
      name: "Athletics Australia",
      description: "National governing body for athletics"
    },
    coordinates: [151.2111, -33.8523]
  },
  {
    id: "6",
    title: "Newtown Street Art Festival",
    description: "Celebrate urban creativity at the Newtown Street Art Festival, where local and international artists transform walls and spaces into stunning works of art. Watch live painting demonstrations, participate in workshops, and enjoy the vibrant atmosphere of Sydney's most artistic neighborhood.\n\nThe festival includes guided street art tours, artist talks, screen printing workshops, and a marketplace selling prints, merchandise, and art supplies. Food trucks and local cafes will be serving throughout the event.\n\nSome workshops require advance booking due to limited space.",
    imageUrl: "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-04-05",
    startTime: "10:00",
    endTime: "18:00",
    location: "Newtown King Street",
    locationSlug: "newtown",
    category: "Arts",
    price: 10.00,
    featured: true,
    ticketUrl: "https://www.newtownfestival.org",
    capacity: 8000,
    organizer: {
      name: "Inner West Council",
      description: "Local government for Sydney's Inner West"
    },
    coordinates: [151.1786, -33.8982]
  },
  {
    id: "7",
    title: "Darling Harbour Fireworks",
    description: "Experience the magic of fireworks reflected in the waters of Darling Harbour at this weekly spectacular event. The 10-minute show features choreographed fireworks synchronized to a soundtrack of popular and classical music.\n\nBefore and after the fireworks, enjoy dining at one of the many restaurants around the harbour, visit the nearby attractions, or simply relax by the water. The best viewing spots are from Cockle Bay, the Pyrmont Bridge, or the outdoor terraces of harbourside restaurants.\n\nThis is a free event with no ticketing required.",
    imageUrl: "https://images.pexels.com/photos/3755442/pexels-photo-3755442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-01-25",
    startTime: "21:00",
    endTime: "21:15",
    location: "Darling Harbour",
    locationSlug: "darlingharbour",
    category: "Family",
    price: 0,
    featured: false,
    ticketUrl: "https://www.darlingharbour.com",
    capacity: 10000,
    organizer: {
      name: "Property NSW",
      description: "Government agency managing Darling Harbour"
    },
    coordinates: [151.2012, -33.8739]
  },
  {
    id: "8",
    title: "Sydney Film Festival",
    description: "Join cinema enthusiasts at the prestigious Sydney Film Festival, showcasing the best in international and Australian films. The program includes feature films, documentaries, short films, and retrospectives, with many Australian premieres and Q&A sessions with filmmakers.\n\nScreenings take place at multiple venues across Sydney, with the State Theatre serving as the festival hub. The competition section features 12 films competing for the Sydney Film Prize, awarded to bold, courageous and cutting-edge cinema.\n\nTickets available for individual screenings or as festival passes for multiple films.",
    imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-06-10",
    startTime: "09:00",
    endTime: "23:00",
    location: "State Theatre",
    locationSlug: "cbd",
    category: "Arts",
    price: 22.50,
    featured: true,
    ticketUrl: "https://www.sff.org.au",
    capacity: 2000,
    organizer: {
      name: "Sydney Film Festival",
      description: "Non-profit organization dedicated to screen culture"
    },
    coordinates: [151.2071, -33.8708]
  },
  {
    id: "9",
    title: "Taronga Zoo Twilight Concerts",
    description: "Experience live music in the unique setting of Taronga Zoo with the Sydney Harbour as a backdrop. The Twilight at Taronga concert series brings top Australian and international acts to perform intimate shows in this spectacular location.\n\nTickets include zoo entry from 5:30pm, allowing you to explore parts of the zoo before the concert begins. Food and drinks are available for purchase, or you can pre-order a gourmet picnic hamper. All proceeds from the concerts go towards Taronga's conservation work.\n\nThis is an all-weather event; please check weather conditions beforehand.",
    imageUrl: "https://images.pexels.com/photos/6334040/pexels-photo-6334040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-02-18",
    startTime: "18:00",
    endTime: "22:00",
    location: "Taronga Zoo",
    locationSlug: "manly",
    category: "Music",
    price: 99.00,
    featured: false,
    ticketUrl: "https://www.twilightattaronga.org.au",
    capacity: 1800,
    organizer: {
      name: "Taronga Conservation Society",
      description: "Zoo and wildlife conservation organization"
    },
    coordinates: [151.2417, -33.8430]
  },
  {
    id: "10",
    title: "Royal Easter Show",
    description: "Join the celebration of Australian agriculture at the iconic Royal Easter Show. This annual event brings the country to the city with animal exhibitions, agricultural competitions, carnival rides, show bags, and entertainment for the whole family.\n\nHighlights include the Grand Parade, woodchopping competitions, the District Exhibits display of regional produce, and nightly fireworks. The show also features sheep shearing demonstrations, horse events, and arts and crafts exhibitions.\n\nTickets include entry to all pavilions, arena events, and entertainment. Carnival rides and show bags are available for additional purchase.",
    imageUrl: "https://images.pexels.com/photos/7782677/pexels-photo-7782677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-04-10",
    startTime: "09:00",
    endTime: "21:30",
    location: "Sydney Showground",
    locationSlug: "cbd",
    category: "Family",
    price: 45.00,
    featured: true,
    ticketUrl: "https://www.eastershow.com.au",
    capacity: 90000,
    organizer: {
      name: "Royal Agricultural Society of NSW",
      description: "Agricultural organization promoting rural excellence"
    },
    coordinates: [151.0696, -33.8471]
  },
  {
    id: "11",
    title: "Sydney Comedy Festival",
    description: "Laugh until it hurts at the Sydney Comedy Festival, featuring the best local and international comedians. With performances spanning stand-up, sketch, improv, and theatrical comedy, there's something to tickle everyone's funny bone.\n\nShows take place at multiple venues across Sydney, including the Sydney Opera House, Enmore Theatre, and Factory Theatre. The festival kicks off with a gala event featuring short sets from a variety of performers, giving you a taste of what's to come throughout the festival.\n\nAge restrictions apply to many shows; please check individual event details.",
    imageUrl: "https://images.pexels.com/photos/7991156/pexels-photo-7991156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-04-22",
    startTime: "19:00",
    endTime: "23:00",
    location: "Various Venues",
    locationSlug: "cbd",
    category: "Arts",
    price: 35.00,
    featured: false,
    ticketUrl: "https://www.sydneycomedyfest.com.au",
    capacity: 1000,
    organizer: {
      name: "Sydney Comedy Festival",
      description: "Organization dedicated to comedy in Australia"
    },
    coordinates: [151.1952, -33.8893]
  },
  {
    id: "12",
    title: "Sculpture by the Sea",
    description: "Take a coastal walk with a difference at Sculpture by the Sea, the world's largest free public sculpture exhibition. The spectacular Bondi to Tamarama coastal walk is transformed into a 2km long temporary sculpture park featuring over 100 sculptures by artists from around the world.\n\nThe exhibition includes sculptures of all sizes and media, from large-scale installations to delicate works that interact with the natural environment. Free guided tours are available daily, and a sculpture-making workshop for children runs on weekends.\n\nVisitors can vote for the People's Choice Award and purchase artwork from the exhibition.",
    imageUrl: "https://images.pexels.com/photos/4344418/pexels-photo-4344418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-10-21",
    startTime: "07:00",
    endTime: "20:00",
    location: "Bondi to Tamarama Coastal Walk",
    locationSlug: "bondi",
    category: "Arts",
    price: 0,
    featured: true,
    ticketUrl: "https://www.sculpturebythesea.com",
    capacity: 25000,
    organizer: {
      name: "Sculpture by the Sea Inc",
      description: "Non-profit organization promoting public art"
    },
    coordinates: [151.2732, -33.8991]
  }
];