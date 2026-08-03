import { TourDay, PackingItem } from '../types/tour';

export const TOUR_DAYS: TourDay[] = [
  {
    dayNumber: 1,
    isTravelDay: true,
    title: "Australia (or New Zealand) - London, England",
    subTitle: "Depart for London, England! First flight from Sydney departs at 2:05pm.",
    country: "In Transit",
    countryCode: "AU",
    flag: "✈️",
    coords: { lat: 51.5074, lng: -0.1278, cityName: "In Transit Flight" },
    destinationName: "Australia to London Flight",
    highlights: [
      "Depart Sydney Airport at 2:05 PM on international long-haul flight",
      "In-flight meals, entertainment, and overnight flight",
      "Adjust watch to UK time (GMT/BST) in preparation for landing"
    ],
    timeline: {
      morning: ["Final check of travel documents and passport in hand", "Arrive Sydney Airport for check-in & international security"],
      afternoon: ["Board flight departing Sydney at 2:05 PM", "In-flight lunch & movies"],
      evening: ["Transit stopover & connecting flight", "Rest and sleep on board overnight"]
    },
    meals: { breakfast: false, lunch: false, dinner: true, notes: "In-Flight Catering" },
    hotel: "In Flight (Overnight)",
    walkingEffort: "Easy",
    clothingTip: "Wear loose, comfortable clothing and flight compression socks.",
    currency: "In-Flight",
    currencyCode: "AUD",
    drivingTimeApprox: "Long-haul flight",
    didYouKnow: "Flights from Sydney to London cover roughly 17,000 km across continents!",
    parentProTip: "Drink plenty of water on board and set your watch to UK time as soon as you board.",
    photoUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 2,
    isTravelDay: false,
    title: "Welcome to London",
    subTitle: "Land at 6:15am (UK time) Wednesday 12/08/2026. Check in & explore London solo!",
    country: "England",
    countryCode: "GB",
    flag: "🇬🇧",
    coords: { lat: 51.5074, lng: -0.1278, cityName: "London" },
    destinationName: "London, England",
    highlights: [
      "Land at London Heathrow at 6:15 AM (UK time) Wednesday 12 Aug 2026",
      "Store luggage at President Hotel and explore London solo at leisure",
      "Discover historic Covent Garden, Royal Parks, museums, or shopping"
    ],
    timeline: {
      morning: ["Touch down in London at 6:15 AM, clear border control & transfer to hotel", "Store luggage at President Hotel before official check-in"],
      afternoon: ["Explore historic Covent Garden, stroll through Royal Parks or visit free museums", "Shopping along Oxford Street or Regent Street"],
      evening: ["Check into room at President Hotel", "Enjoy a relaxed solo dinner at a local West End pub"]
    },
    meals: { breakfast: false, lunch: false, dinner: false, notes: "Meals at leisure" },
    hotel: "President Hotel or similar, London",
    walkingEffort: "Moderate",
    clothingTip: "Light jacket or cardigan for breezy London morning weather.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "Airport transfer & local London strolls",
    didYouKnow: "Covent Garden was originally an 1200s fruit and vegetable market for Westminster Abbey!",
    parentProTip: "Stay active outdoors in the daylight today to beat jet lag quickly before the official tour starts tomorrow!",
    photoUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 3,
    isTravelDay: false,
    title: "London City Tour & Windsor Castle",
    subTitle: "First official day of tour! Buckingham Palace, Big Ben & Queen Elizabeth II's resting place.",
    country: "England",
    countryCode: "GB",
    flag: "🇬🇧",
    coords: { lat: 51.4839, lng: -0.6044, cityName: "London & Windsor" },
    destinationName: "London & Windsor Castle",
    highlights: [
      "Guided London city tour: Buckingham Palace, Big Ben, Parliament & Trafalgar Square",
      "Journey to magnificent Windsor Castle, the world's oldest & largest inhabited castle",
      "Visit St. George's Chapel, the final resting place of Queen Elizabeth II"
    ],
    timeline: {
      morning: ["Enjoy hotel breakfast & meet your Tour Director and group", "Panoramic coach tour seeing London's famous capital landmarks"],
      afternoon: ["Journey to Windsor Castle", "Explore grand State Apartments & exquisite art collections", "Visit St. George's Chapel"],
      evening: ["Return to London", "Remainder of the evening at leisure for dinner near President Hotel"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "President Hotel or similar, London",
    walkingEffort: "Moderate",
    clothingTip: "Comfortable walking shoes for castle grounds and historic chapel.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "City tour & 45 mins drive to Windsor",
    didYouKnow: "Windsor Castle has been the family home of British monarchs for over 1,000 years!",
    parentProTip: "Keep your camera charged for the changing of the guard at Windsor Castle if scheduled!",
    photoUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 4,
    isTravelDay: false,
    title: "London - Stonehenge - Bath - Bristol",
    subTitle: "Ancient stone circle mysteries, Georgian architecture in Bath, and Bristol.",
    country: "England",
    countryCode: "GB",
    flag: "🇬🇧",
    coords: { lat: 51.4545, lng: -2.5879, cityName: "Bristol" },
    destinationName: "Stonehenge, Bath & Bristol (~215 km)",
    highlights: [
      "Marvel at ancient, mysterious 5,000-year-old Stonehenge monoliths",
      "Free afternoon in Bath to explore Georgian architecture & historic sites",
      "Travel onward to Bristol and check into hotel"
    ],
    timeline: {
      morning: ["Depart London and journey approximately 215km to Bristol", "Visit iconic Stonehenge on Salisbury Plain"],
      afternoon: ["Uncover mysteries of the ancient stone circle", "Continue to elegant city of Bath for free afternoon"],
      evening: ["Travel onward to Bristol", "Check into hotel & evening at leisure"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Ibis Bristol Temple Meads or similar, Bristol",
    walkingEffort: "Moderate",
    clothingTip: "Windproof coat for Stonehenge on Salisbury Plain.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "~215 km (~3.5 hours driving total)",
    didYouKnow: "Bath's honey-colored limestone buildings inspired famous author Jane Austen!",
    parentProTip: "The Stonehenge shuttle bus takes you straight to the stones if you prefer not to walk across the turf.",
    photoUrl: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 5,
    isTravelDay: false,
    title: "Bristol - Oxford - York",
    subTitle: "Prestigious Christ Church College in Oxford & medieval northern city of York.",
    country: "England",
    countryCode: "GB",
    flag: "🇬🇧",
    coords: { lat: 53.9600, lng: -1.0873, cityName: "York" },
    destinationName: "Oxford & York (~450 km)",
    highlights: [
      "Stop in historic Oxford, home to one of the world's most prestigious universities",
      "Visit Christ Church College and its magnificent cathedral",
      "Journey north to historic York and check into hotel"
    ],
    timeline: {
      morning: ["Depart Bristol and travel approximately 450km to York", "Stop in historic city of Oxford"],
      afternoon: ["Visit Christ Church College & Cathedral, admiring rich academic heritage", "Continue journey north across England"],
      evening: ["Arrive in York & check into hotel", "Evening at leisure in York"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Hampton by Hilton York or similar, York",
    walkingEffort: "Moderate",
    clothingTip: "Layered clothing for walking around university quadrangle.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "~450 km (~5.5 hours driving total)",
    didYouKnow: "Christ Church Great Hall inspired the famous Hogwarts Dining Hall in the Harry Potter films!",
    parentProTip: "York is famous for traditional pubs — try a Yorkshire Pudding dish tonight!",
    photoUrl: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 6,
    isTravelDay: false,
    title: "York - Durham - Hadrian's Wall - Edinburgh, Scotland",
    subTitle: "Leisure morning in York, Durham Cathedral walk, Roman frontier, and Scottish capital.",
    country: "Scotland",
    countryCode: "GB-SCT",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    coords: { lat: 55.9533, lng: -3.1883, cityName: "Edinburgh" },
    destinationName: "Durham, Hadrian's Wall & Edinburgh (~365 km)",
    highlights: [
      "Leisurely morning in York to explore charming streets & landmarks",
      "Orientation walk in Durham admiring cathedral & picturesque riverside",
      "Views of legendary Hadrian's Wall, Roman Empire's northern frontier"
    ],
    timeline: {
      morning: ["Leisurely morning in York to explore streets at your own pace", "Start journey north approximately 365km to Edinburgh"],
      afternoon: ["Stop in Durham for orientation walk around cathedral & river", "Take in views of Hadrian's Wall"],
      evening: ["Cross Anglo-Scottish border and arrive in Edinburgh", "Check into hotel & settle in for evening at leisure"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Braid Hills Hotel or similar, Edinburgh",
    walkingEffort: "Moderate",
    clothingTip: "Sturdy footwear for cobblestones in York and Durham.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "~365 km (~4.5 hours driving total)",
    didYouKnow: "Hadrian's Wall stretched 117 kilometres across Northern England from coast to coast!",
    parentProTip: "Braid Hills Hotel has wonderful elevated views across Edinburgh skyline!",
    photoUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 7,
    isTravelDay: false,
    title: "Edinburgh City Tour & Edinburgh Castle",
    subTitle: "Panoramic architecture tour, Castle Rock fortress, and Royal Mile strolls.",
    country: "Scotland",
    countryCode: "GB-SCT",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    coords: { lat: 55.9486, lng: -3.1999, cityName: "Edinburgh Castle" },
    destinationName: "Edinburgh, Scotland",
    highlights: [
      "Panoramic tour of Edinburgh's stunning architecture & landmarks",
      "Visit iconic Edinburgh Castle perched atop Castle Rock",
      "Free afternoon to stroll the Royal Mile, discover hidden closes & shops"
    ],
    timeline: {
      morning: ["Panoramic Edinburgh tour taking in historic landmarks", "Visit Edinburgh Castle & explore Crown Jewels & Great Hall"],
      afternoon: ["Free afternoon to walk the Royal Mile, visit cafes or Princes Street Gardens"],
      evening: ["Evening at leisure in Scotland's vibrant capital"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Braid Hills Hotel or similar, Edinburgh",
    walkingEffort: "Active",
    clothingTip: "Comfortable shoes for steep cobblestones on Castle Hill.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "Panoramic city coach tour",
    didYouKnow: "Edinburgh Castle sits on top of Castle Rock, an extinct volcano that erupted 350 million years ago!",
    parentProTip: "Listen out for the One O'Clock Gun fired daily from the castle ramparts (except Sundays)!",
    photoUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 8,
    isTravelDay: false,
    title: "Edinburgh - St Andrews - Highlands",
    subTitle: "Birthplace of golf, St Andrews Cathedral ruins, and Highland mountains.",
    country: "Scotland",
    countryCode: "GB-SCT",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    coords: { lat: 57.0792, lng: -4.0531, cityName: "Kingussie Highlands" },
    destinationName: "St Andrews & Highlands (~258 km)",
    highlights: [
      "Journey approximately 258km into the stunning Scottish Highlands",
      "Visit majestic ruins of 12th-century St Andrews Cathedral",
      "Explore St Andrews famous golf course, coastline & charming streets"
    ],
    timeline: {
      morning: ["Depart Edinburgh and journey into Scottish Highlands", "Stop in historic seaside town of St Andrews"],
      afternoon: ["Visit St Andrews Cathedral ruins & Old Course golf views", "Continue journey through breathtaking Highland mountain scenery"],
      evening: ["Check into hotel in the Highlands for a restful evening"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Duke of Gordon Kingussie or similar, Highlands",
    walkingEffort: "Moderate",
    clothingTip: "Warm jacket and scarf for fresh Highland coastal breeze.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "~258 km (~3.5 hours driving total)",
    didYouKnow: "Golf has been played on the Old Course at St Andrews since the 15th century!",
    parentProTip: "St Andrews has delightful local ice cream parlors near the town square!",
    photoUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 9,
    isTravelDay: false,
    title: "Highlands - Loch Ness",
    subTitle: "Great Glen scenic drive, Fort Augustus loch shores, and Highland Folk Museum.",
    country: "Scotland",
    countryCode: "GB-SCT",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    coords: { lat: 57.3229, lng: -4.4244, cityName: "Loch Ness" },
    destinationName: "Loch Ness & Highland Folk Museum",
    highlights: [
      "Scenic drive along legendary Loch Ness in the Great Glen",
      "Free time in picturesque Fort Augustus on the shores of Loch Ness",
      "Visit open-air Highland Folk Museum showing traditional Highland life"
    ],
    timeline: {
      morning: ["Scenic drive along Loch Ness in the Great Glen", "Stop in Fort Augustus for loch views & monster hunting!"],
      afternoon: ["Visit open-air Highland Folk Museum living history experience", "Explore traditional thatched crofts & blacksmith shops"],
      evening: ["Transfer back to Highland hotel for evening at leisure"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Duke of Gordon Kingussie or similar, Highlands",
    walkingEffort: "Moderate",
    clothingTip: "Layered clothing and outdoor walking shoes.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "Full day scenic Highland touring drive",
    didYouKnow: "Loch Ness is 230 metres deep — deeper than the height of London's Gherkin skyscraper!",
    parentProTip: "The Highland Folk Museum was featured in the TV series Outlander!",
    photoUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 10,
    isTravelDay: false,
    title: "Fort William - Glencoe - Stirling - Glasgow",
    subTitle: "Traditional Scotch whisky distillery, rugged Glencoe, Stirling Castle, and Glasgow.",
    country: "Scotland",
    countryCode: "GB-SCT",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    coords: { lat: 55.8642, lng: -4.2518, cityName: "Glasgow" },
    destinationName: "Fort William, Glencoe & Glasgow (~277 km)",
    highlights: [
      "Visit traditional whisky distillery to learn whisky-making & enjoy a dram",
      "Free time in Fort William at the foot of Ben Nevis & photo at dramatic Glencoe",
      "Photo stop at Stirling Castle before continuing to Glasgow"
    ],
    timeline: {
      morning: ["Journey south approximately 277km towards Glasgow", "Visit traditional Scotch whisky distillery for tour & dram tasting"],
      afternoon: ["Free time in Fort William & photo stop at rugged Glencoe pass", "Scenic photo stop at Stirling Castle"],
      evening: ["Arrive in Glasgow & check into hotel for a well-earned rest"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Ibis Styles Glasgow Central or similar, Glasgow",
    walkingEffort: "Moderate",
    clothingTip: "Camera handy for dramatic mountain glens.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "~277 km (~4 hours driving total)",
    didYouKnow: "Glencoe was carved by ice age glaciers and is one of Scotland's most dramatic glens!",
    parentProTip: "Glasgow is famous for its warm hospitality — 'People Make Glasgow'!",
    photoUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 11,
    isTravelDay: false,
    title: "Glasgow Half-Day City Tour",
    subTitle: "Striking Victorian architecture, Kelvingrove Art Gallery & Museum, and shopping.",
    country: "Scotland",
    countryCode: "GB-SCT",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    coords: { lat: 55.8642, lng: -4.2518, cityName: "Glasgow City" },
    destinationName: "Glasgow, Scotland",
    highlights: [
      "Half-day panoramic tour discovering Glasgow's architecture & culture",
      "Visit renowned Kelvingrove Art Gallery and Museum",
      "Remainder of day at leisure for shopping, parks & dynamic food scene"
    ],
    timeline: {
      morning: ["Panoramic city tour showing Glasgow Cathedral & George Square", "Visit Kelvingrove Art Gallery & Museum"],
      afternoon: ["Free afternoon to explore Buchanan Street shopping or Botanic Gardens"],
      evening: ["Evening at leisure in Glasgow"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Ibis Styles Glasgow Central or similar, Glasgow",
    walkingEffort: "Easy",
    clothingTip: "Comfortable urban walking shoes.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "Half-day city touring",
    didYouKnow: "Kelvingrove Museum has 22 galleries featuring everything from Salvador Dalí to dinosaur fossils!",
    parentProTip: "The organ recital at Kelvingrove at 1:00 PM is a wonderful magical experience!",
    photoUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 12,
    isTravelDay: false,
    title: "Glasgow - The Lake District - Liverpool",
    subTitle: "English lakes scenic drive, famous Grasmere Gingerbread shop, and Liverpool.",
    country: "England",
    countryCode: "GB",
    flag: "🇬🇧",
    coords: { lat: 53.4084, lng: -2.9916, cityName: "Liverpool" },
    destinationName: "The Lake District & Liverpool (~377 km)",
    highlights: [
      "Journey south through breathtaking Lake District past Thirlmere, Grasmere & Rydal Water",
      "Free time in beautiful Grasmere village for lunch & famous 1854 Gingerbread shop",
      "Arrive in historic Liverpool, home of the Beatles"
    ],
    timeline: {
      morning: ["Journey south approximately 377km towards Liverpool through the Lake District"],
      afternoon: ["Scenic drive past lakes & stop in Grasmere village for lunch and gingerbread", "Continue south to Liverpool"],
      evening: ["Check into hotel in Liverpool & evening at leisure to discover Albert Dock"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Village Hotel Liverpool or similar, Liverpool",
    walkingEffort: "Easy",
    clothingTip: "Comfortable casual wear.",
    currency: "GBP (£)",
    currencyCode: "GBP",
    drivingTimeApprox: "~377 km (~4.5 hours driving total)",
    didYouKnow: "Grasmere Gingerbread has been baked to its secret original recipe in a former schoolhouse since 1854!",
    parentProTip: "Buy a parcel of Sarah Nelson's Grasmere Gingerbread — it makes a great souvenir snack!",
    photoUrl: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 13,
    isTravelDay: false,
    title: "Liverpool - Holyhead, Wales - Galway, Ireland",
    subTitle: "Irish Sea ferry crossing to Dublin & cross emerald heartland to Galway.",
    country: "Ireland",
    countryCode: "IE",
    flag: "🇮🇪",
    coords: { lat: 53.2707, lng: -9.0568, cityName: "Galway" },
    destinationName: "Holyhead Ferry to Dublin & Galway (~220 km)",
    highlights: [
      "Drive to Holyhead port in Wales and board passenger ferry across Irish Sea",
      "Arrive in Dublin and drive approximately 220km west across Ireland to Galway",
      "Panoramic tour of Galway taking in colorful streets & rich cultural heritage"
    ],
    timeline: {
      morning: ["Drive to Holyhead, Wales and board Irish Sea ferry crossing to Dublin"],
      afternoon: ["Disembark ferry in Dublin & drive west to Galway", "Panoramic tour of Galway city"],
      evening: ["Check into hotel in Galway area & evening at leisure"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Lady Gregory Hotel or similar, Galway Area",
    walkingEffort: "Easy",
    clothingTip: "Keep sweater handy on the ferry deck.",
    currency: "EUR (€)",
    currencyCode: "EUR",
    drivingTimeApprox: "Drive to ferry + 3.5 hrs ferry + ~220 km drive",
    didYouKnow: "Switch to Euros (€) currency today as you enter the Republic of Ireland!",
    parentProTip: "Galway's Latin Quarter features street musicians (buskers) playing traditional fiddles!",
    photoUrl: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 14,
    isTravelDay: false,
    title: "Galway - Cliffs of Moher - Dublin",
    subTitle: "Dramatic 214m Atlantic cliffs, Limerick historic city, and Dublin.",
    country: "Ireland",
    countryCode: "IE",
    flag: "🇮🇪",
    coords: { lat: 53.3498, lng: -6.2603, cityName: "Dublin" },
    destinationName: "Cliffs of Moher, Limerick & Dublin (~357 km)",
    highlights: [
      "Visit stunning 214-metre Cliffs of Moher towering over the Atlantic Ocean",
      "Brief stop in historic city of Limerick",
      "Travel approximately 357km to Dublin and settle in for evening at leisure"
    ],
    timeline: {
      morning: ["Travel to County Clare to visit the breathtaking Cliffs of Moher"],
      afternoon: ["Head to Limerick for brief orientation stop", "Continue travel day to Dublin"],
      evening: ["Arrive in Dublin, check into hotel & rest of evening at leisure"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Clayton Leopardstown Hotel or Similar",
    walkingEffort: "Moderate",
    clothingTip: "Windproof jacket for Atlantic ocean cliff edge.",
    currency: "EUR (€)",
    currencyCode: "EUR",
    drivingTimeApprox: "~357 km (~4.5 hours driving total)",
    didYouKnow: "The Cliffs of Moher rise up to 214 metres (702 feet) above the crashing Atlantic waves!",
    parentProTip: "Visit O'Brien's Tower at the highest point of the cliffs for panoramic vistas!",
    photoUrl: "https://images.unsplash.com/photo-1564959130747-897fb406b9af?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 15,
    isTravelDay: false,
    title: "Dublin - St Patrick’s Cathedral & Trinity College",
    subTitle: "Gothic St. Patrick's Cathedral, Trinity College, and the famous Book of Kells.",
    country: "Ireland",
    countryCode: "IE",
    flag: "🇮🇪",
    coords: { lat: 53.3498, lng: -6.2603, cityName: "Dublin City" },
    destinationName: "Dublin, Ireland",
    highlights: [
      "Visit iconic St. Patrick's Cathedral with beautiful stained-glass & Gothic architecture",
      "Explore historic Trinity College campus, Book of Kells & Long Room Library",
      "Afternoon at leisure to stroll Dublin's streets, shops & parks"
    ],
    timeline: {
      morning: ["Visit St. Patrick's Cathedral & admire its serene gardens", "Tour Trinity College & view illuminated Book of Kells manuscript"],
      afternoon: ["Free time to explore Grafton Street shopping or cafes"],
      evening: ["Evening at leisure in Dublin"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Clayton Leopardstown Hotel or Similar",
    walkingEffort: "Moderate",
    clothingTip: "Comfortable urban walking shoes.",
    currency: "EUR (€)",
    currencyCode: "EUR",
    drivingTimeApprox: "City tour transfer",
    didYouKnow: "The Book of Kells was crafted by Celtic monks around the year 800 AD!",
    parentProTip: "The Long Room in Trinity College Library holds 200,000 of the college's oldest books!",
    photoUrl: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 16,
    isTravelDay: false,
    title: "Dublin - Day at Leisure",
    subTitle: "Full day at leisure in Dublin! Guinness Storehouse, Temple Bar, or Grafton Street.",
    country: "Ireland",
    countryCode: "IE",
    flag: "🇮🇪",
    coords: { lat: 53.3498, lng: -6.2603, cityName: "Dublin City" },
    destinationName: "Dublin, Ireland",
    highlights: [
      "Full day at leisure to explore Dublin's landmarks, lively pubs & modern attractions",
      "Optional visits to Guinness Storehouse or Temple Bar cultural district",
      "Stroll along River Liffey, Grafton Street or unwind in St. Stephen's Green"
    ],
    timeline: {
      morning: ["Leisurely breakfast before a free day exploring Dublin", "Visit Guinness Storehouse or national museums"],
      afternoon: ["Stroll Grafton Street shops, Ha'penny Bridge & St. Stephen's Green park"],
      evening: ["Enjoy traditional Irish stew, live fiddle music & local pub atmosphere"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Breakfast included at hotel" },
    hotel: "Clayton Leopardstown Hotel or Similar",
    walkingEffort: "Easy",
    clothingTip: "Casual clothes and comfortable footwear.",
    currency: "EUR (€)",
    currencyCode: "EUR",
    drivingTimeApprox: "At leisure in Dublin city",
    didYouKnow: "Arthur Guinness signed a 9,000-year lease for St. James's Gate Brewery in 1759!",
    parentProTip: "Gravity Bar at the top of Guinness Storehouse offers 360-degree views of Dublin!",
    photoUrl: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 17,
    isTravelDay: true,
    title: "Dublin, Ireland - Australia (or New Zealand)",
    subTitle: "Airport transfer for return flight home (departing 8:20pm Friday 28th August).",
    country: "In Transit",
    countryCode: "AU",
    flag: "✈️",
    coords: { lat: 53.4264, lng: -6.2499, cityName: "Dublin Airport" },
    destinationName: "Dublin Airport / Flight Departure",
    highlights: [
      "Transfer to airport at appropriate time for return flight home",
      "Flight departs at 8:20 PM Friday 28th August 2026",
      "In-flight meals, relaxation & overnight flight across time zones"
    ],
    timeline: {
      morning: ["Final breakfast in Dublin & pack bags", "Hotel check-out"],
      afternoon: ["Transfer to airport & international departure check-in"],
      evening: ["Board return flight departing at 8:20 PM with in-flight dinner & rest"]
    },
    meals: { breakfast: true, lunch: false, dinner: true, notes: "Breakfast & In-Flight meals" },
    hotel: "In Flight (Overnight)",
    walkingEffort: "Easy",
    clothingTip: "Comfortable flight layers and warm socks.",
    currency: "In-Flight",
    currencyCode: "AUD",
    drivingTimeApprox: "Airport transfer & flight departure",
    didYouKnow: "You've explored England, Wales, Scotland, and Ireland across 18 wonderful days!",
    parentProTip: "Keep souvenir receipts handy in case you claim tax refund at the airport.",
    photoUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    dayNumber: 18,
    isTravelDay: true,
    title: "Arrive Australia (or New Zealand)",
    subTitle: "Arrive home safe and sound with unforgettable photos and stories to share!",
    country: "In Transit",
    countryCode: "AU",
    flag: "🏡",
    coords: { lat: -33.8688, lng: 151.2093, cityName: "Home Australia" },
    destinationName: "Arrive Home Australia / NZ",
    highlights: [
      "Touchdown safely back home in Australia / New Zealand",
      "Clear passport control, collect luggage & reunite with family",
      "Unpack bags and enjoy a peaceful rest in your own bed!"
    ],
    timeline: {
      morning: ["In-flight breakfast as aircraft approaches Australia"],
      afternoon: ["Land at home airport, clear customs & head home"],
      evening: ["Unpack souvenirs, show photos to family & get a great night's sleep!"]
    },
    meals: { breakfast: true, lunch: false, dinner: false, notes: "Welcome Home!" },
    hotel: "Home Sweet Home",
    walkingEffort: "Easy",
    clothingTip: "Casual clothing for home arrival.",
    currency: "In-Flight",
    currencyCode: "AUD",
    drivingTimeApprox: "Home transfer",
    didYouKnow: "There's no feeling quite like opening your own front door after an incredible journey!",
    parentProTip: "Drink lots of water today to stay hydrated as your body adjusts back home.",
    photoUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  }
];

export const INITIAL_PACKING_ITEMS: PackingItem[] = [
  { id: 'p1', category: 'Documents', name: 'Valid Passport (at least 6 months validity)', checked: true, note: 'Keep in hand luggage' },
  { id: 'p2', category: 'Documents', name: 'TripADeal Tour Vouchers & Flight E-Tickets', checked: true, note: 'Flight dep Sydney 2:05pm Aug 11' },
  { id: 'p3', category: 'Documents', name: 'Travel Insurance Certificate', checked: true, note: 'Emergency policy info' },
  { id: 'p4', category: 'Electronics', name: 'UK/Ireland 3-Pin Plug Adapter (Type G)', checked: false, note: 'Used in UK & Ireland' },
  { id: 'p5', category: 'Electronics', name: 'Mobile phone & Long charging cable', checked: false, note: 'For photos & maps' },
  { id: 'p6', category: 'Clothing', name: 'Lightweight Waterproof Rain Jacket with Hood', checked: false, note: 'Essential for UK weather' },
  { id: 'p7', category: 'Clothing', name: 'Comfortable Broken-In Walking Shoes', checked: false, note: 'For castle grounds & cobblestones' },
  { id: 'p8', category: 'Clothing', name: 'Layered tops / Sweaters / Cardigans', checked: false, note: 'Weather changes quickly' },
  { id: 'p9', category: 'Health', name: 'Personal Medications (in original boxes)', checked: false, note: 'Bring 3-4 extra days supply' },
  { id: 'p10', category: 'Comfort', name: 'Small Day Backpack / Crossbody Purse', checked: false, note: 'For daily sightseeing' },
  { id: 'p11', category: 'Comfort', name: 'Compact Folding Umbrella', checked: false, note: 'Keep in day bag' },
  { id: 'p12', category: 'Comfort', name: 'Flight Compression Socks & Neck Pillow', checked: false, note: 'For flight from Sydney' }
];

export const CULTURE_TIPS = [
  { phrase: "Cheers!", meaning: "Thank you / Toast when having a drink", context: "Used everywhere in UK & Ireland!" },
  { phrase: "Mind the Gap", meaning: "Be careful when stepping off train or bus", context: "Famous London Underground safety phrase" },
  { phrase: "Cuppa", meaning: "A warm cup of black tea with milk", context: "Offered warmly whenever visiting anywhere" },
  { phrase: "Grand", meaning: "Fine, good, or excellent (e.g. 'That's grand!')", context: "Used constantly across Ireland" },
  { phrase: "Loo / Bathroom", meaning: "Public toilet", context: "Ask 'Where is the loo please?'" },
  { phrase: "Ta!", meaning: "Short for 'Thank you'", context: "Common in England and Scotland" }
];
