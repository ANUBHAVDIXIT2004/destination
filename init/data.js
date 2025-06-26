const sampleListings = [
  {
    title: "New York Public Library",
    description: "A classic NYC venue with marble columns, grand staircases, and soaring ceilings—ideal for a glamorous wedding.",
    image: { filename: "listingimage", url: "https://hips.hearstapps.com/hmg-prod/images/gallery-1483118155-hbz-real-wedding-ann-brady-23-1563915431.jpg" },
    price: 1500,
    location: "New York, NY",
    country: "USA"
  },
  {
    title: "Villa Balbiano",
    description: "A historic villa on Lake Como with romantic gardens, vintage interiors, and lakeside views for a fairy-tale wedding.",
    image: { filename: "listingimage", url: "https://hips.hearstapps.com/hmg-prod/images/5922589353-dfdd4568c3-b-1573665418.jpg" },
    price: 1200,
    location: "Ossuccio, Lake Como",
    country: "Italy"
  },
  {
    title: "Historic Royal Palaces",
    description: "Choose from iconic venues like Kensington Palace or Hampton Court for a wedding with royal grandeur.",
    image: { filename: "listingimage", url: "https://hips.hearstapps.com/hmg-prod/images/https-historicroyalpalaces-picturepark-com-go-inyf4kvh-v-740-29-1573666815.jpeg" },
    price: 1000,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Blackberry Farm",
    description: "A 4,200-acre luxury estate in the Smoky Mountains with pastoral charm, fine dining, and natural beauty.",
    image: { filename: "listingimage", url: "https://hips.hearstapps.com/hmg-prod/images/09-blackberry-farm-wedding-ceremony-1000x681at2x-1573161120.jpg" },
    price: 2500,
    location: "Walland, TN",
    country: "USA"
  },
  {
    title: "Hotel du Cap-Eden-Roc",
    description: "An exclusive resort on the French Riviera offering waterfront ceremonies and lush gardens.",
    image: { filename: "listingimage", url: "https://hips.hearstapps.com/hmg-prod/images/hotel-du-cap-eden-roc-instagram-1573663101.png" },
    price: 800,
    location: "Antibes",
    country: "France"
  },
  {
    title: "Hayfield Catskills",
    description: "Rustic-meets-modern barn venue nestled in the scenic Catskills with wide fields and wood-beamed halls.",
    image: { filename: "listingimage", url: "https://hips.hearstapps.com/hmg-prod/images/hbz-real-weddings-olivia-matt-31-1524678088.jpg" },
    price: 2000,
    location: "Maplecrest, NY",
    country: "USA"
  },
  {
    title: "The Little Nell",
    description: "A mountain-top venue with gondola access and stunning views of Colorado’s Maroon Bells.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQmyZLaB7liOc8X2X5OYt646ABSSHeqcbg&s" },
    price: 900,
    location: "Aspen, CO",
    country: "USA"
  },
  {
    title: "San Ysidro Ranch",
    description: "A secluded Santa Barbara estate with rose gardens, ocean views, and old-Hollywood glamour.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Cag7UUWDJ3WZyaIOCnI8KovESb33VVTNtg&s" },
    price: 3500,
    location: "Santa Barbara, CA",
    country: "USA"
  },
  {
    title: "The Ranch at Rock Creek",
    description: "Montana luxury ranch with wide-open skies, rivers, and barn receptions under the stars.",
    image: { filename: "listingimage", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/db/22/fb/the-ranch-at-rock-creek.jpg?w=900&h=500&s=1" },
    price: 3000,
    location: "Philipsburg, MT",
    country: "USA"
  },
  {
    title: "Glenmere Mansion",
    description: "Elegant villa with Hudson Valley views, terraced gardens, and spa amenities.",
    image: { filename: "listingimage", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f0/0e/06/glenmere-mansion.jpg?w=700&h=-1&s=1" },
    price: 4000,
    location: "Chester, NY",
    country: "USA"
  },
  {
    title: "Oheka Castle",
    description: "A French-style chateau on Long Island with grand ballrooms and manicured gardens.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjbCXE9M9T4kb0wXjwaZuTT4MvWE50LDAPw&s" },
    price: 1800,
    location: "Huntington, NY",
    country: "USA"
  },
  {
    title: "Il Borro",
    description: "A Tuscan estate with medieval charm, vineyards, and rustic-luxe villas for guests.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZFqMf86pW8E4HASSQQBA37Rm0VkebbSX0g&s" },
    price: 10000,
    location: "San Giustino Valdarno",
    country: "Italy"
  },
  {
    title: "The Breakers Palm Beach",
    description: "Gilded Age glamour meets tropical scenery at this beachfront resort.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWZGjhMU8ngc064uYg8S72VTMFaPKOuHWDg&s" },
    price: 1200,
    location: "Palm Beach, FL",
    country: "USA"
  },
  {
    title: "Rosecliff Mansion",
    description: "Newport mansion modeled after Versailles, perfect for elegant ballroom ceremonies.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2W18Rvn40sxBzO8af6-xMTbmIh8nkXH9Zg&s" },
    price: 2200,
    location: "Newport, RI",
    country: "USA"
  },
  {
    title: "The Biltmore Estate",
    description: "America’s largest private home offers mountain backdrops and 19th-century grandeur.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZeoA-ThItj9BqmLbs18bWPhDzjA70hjLSw&s" },
    price: 1800,
    location: "Asheville, NC",
    country: "USA"
  },
  {
    title: "Cal-a-Vie Health Spa",
    description: "A Provence-inspired wellness retreat with lavender fields and Mediterranean charm.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTcrYAbPIpAjEqQoDw6D95y4O6nFvUYM0jg&s" },
    price: 1500,
    location: "Vista, CA",
    country: "USA"
  },
  {
    title: "Aman Venice",
    description: "Lavish palazzo on the Grand Canal with chandeliers, frescoed ceilings, and a private garden.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmxeK_juIosOlGhAYHvWe9XYDWHTeoiCXvw&s" },
    price: 1600,
    location: "Venice",
    country: "Italy"
  },
  {
    title: "Amangiri",
    description: "Minimalist desert hideaway with sandstone canyons and surreal sunsets.",
    image: { filename: "listingimage", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/54/4c/a2/amangiri-pavilion-and.jpg?w=900&h=500&s=1" },
    price: 3000,
    location: "Canyon Point, UT",
    country: "USA"
  },
  {
    title: "Kualoa Ranch",
    description: "A Hawaiian paradise featured in Hollywood films, with rainforest mountains and ocean views.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJ-LN-hD-y_cDt1H9xS5p0XmcD23qBVtNWg&s" },
    price: 4000,
    location: "Oahu, HI",
    country: "USA"
  },
  {
    title: "Alila Villas Uluwatu",
    description: "Cliffside Balinese resort with dramatic ocean backdrops and sleek architecture.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKpYVEgDC82096viOLl3GeN5Vza2urSTosg&s" },
    price: 5000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "The Greenbrier",
    description: "Historic resort with Southern elegance, a grand ballroom, and mountain views.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOC12ffyFi2ssBV-m0547dtg04r0LTv8U2jQ&s" },
    price: 1100,
    location: "White Sulphur Springs, WV",
    country: "USA"
  },
  {
    title: "Ashford Castle",
    description: "A storybook Irish castle with lakeside ceremonies and medieval towers.",
    image: { filename: "listingimage", url: "https://mshanken.imgix.net/cao/16_9/glg-0915-8-1600.jpg?w=900&q=72" },
    price: 2500,
    location: "Cong, County Mayo",
    country: "Ireland"
  },
  {
    title: "Andaz Maui at Wailea",
    description: "Modern Hawaiian luxury on a private cove with beach ceremonies and local flavors.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-SFNIzegWGNTv6ET32eespQgRmSFojJpvA&s" },
    price: 750,
    location: "Maui, HI",
    country: "USA"
  },
  {
    title: "The Plaza Hotel",
    description: "Iconic NYC hotel with the famed Grand Ballroom and timeless elegance.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yFx3_X3vXLtqT-OirwyNkvhA1wWdur-pyg&s" },
    price: 1600,
    location: "New York, NY",
    country: "USA"
  },
  {
    title: "Borgo Santo Pietro",
    description: "Tuscan countryside resort with organic gardens, Michelin-starred dining, and 5-star service.",
    image: { filename: "listingimage", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/29/02/9f/borgo-santo-pietro-property.jpg?w=900&h=-1&s=1" },
    price: 2000,
    location: "Palazzetto, Tuscany",
    country: "Italy"
  },
  {
    title: "Château de Villette",
    description: "A lavish 17th-century chateau near Paris with landscaped gardens and historic interiors.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYruOtFPIFO0t7qIUtbfNcj-vnnVnIY9ct7A&s" },
    price: 1200,
    location: "Condécourt",
    country: "France"
  },
  {
    title: "Viceroy Los Cabos",
    description: "Ultra-modern beach resort with infinity pools, sunset decks, and luxe villas.",
    image: { filename: "listingimage", url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/5d/c3/f3/viceroy-los-cabos.jpg?w=900&h=500&s=1" },
    price: 6000,
    location: "Los Cabos",
    country: "Mexico"
  },
  {
    title: "Skibo Castle",
    description: "Scottish Highlands estate that hosted Madonna’s wedding—privacy, moors, and magnificence.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCPSrgP2ZXsLrrusb43uy-HFIpY04bmTiPg&s" },
    price: 4000,
    location: "Dornoch",
    country: "Scotland"
  },
  {
    title: "Necker Island",
    description: "Richard Branson’s private Caribbean island offering exclusivity and barefoot luxury.",
    image: { filename: "listingimage", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3vBroSCoIKVqMER-2AqLsjXDY-lC48an1Q&s" },
    price: 1800,
    location: "British Virgin Islands",
    country: "UK"
  }
];

module.exports = { data: sampleListings };
