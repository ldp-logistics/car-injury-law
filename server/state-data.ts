export interface StateData {
  name: string;
  abbr: string;
  slug: string;
  statute: string;
  faultSystem: string;
  minInsurance: string;
  avgSettlement: string;
  cityList: string[];
  nearbyStates: string[];
  warning?: {
    title: string;
    text: string;
  };
  faq?: {
    question: string;
    answer: string;
  }[];
  bgImage: string;
}

export const STATE_DATA: Record<string, StateData> = {
  "alabama": {
    name: "Alabama",
    abbr: "AL",
    slug: "alabama-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Contributory Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Birmingham", "Montgomery", "Huntsville", "Mobile"],
    nearbyStates: ["georgia", "florida", "tennessee", "mississippi"],
    bgImage: "https://images.unsplash.com/photo-1590185250166-a75b4379c909?q=80&w=2070&auto=format&fit=crop"
  },
  "alaska": {
    name: "Alaska",
    abbr: "AK",
    slug: "alaska-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$50,000 / $100,000",
    avgSettlement: "$45,000 - $140,000",
    cityList: ["Anchorage", "Fairbanks", "Juneau", "Wasilla"],
    nearbyStates: [],
    bgImage: "https://images.unsplash.com/photo-1516941064208-ff53436630ba?q=80&w=2070&auto=format&fit=crop"
  },
  "arizona": {
    name: "Arizona",
    abbr: "AZ",
    slug: "arizona-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $125,000",
    cityList: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"],
    nearbyStates: ["california", "nevada", "utah", "new-mexico"],
    bgImage: "https://images.unsplash.com/photo-1499088513455-78ed88b475e9?q=80&w=2076&auto=format&fit=crop"
  },
  "arkansas": {
    name: "Arkansas",
    abbr: "AR",
    slug: "arkansas-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative (50% Bar)",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $110,000",
    cityList: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"],
    nearbyStates: ["texas", "oklahoma", "missouri", "tennessee"],
    bgImage: "https://images.unsplash.com/photo-1568438492569-47742d15b1d2?q=80&w=2070&auto=format&fit=crop"
  },
  "california": {
    name: "California",
    abbr: "CA",
    slug: "california-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$30,000 / $60,000",
    avgSettlement: "$40,000 - $160,000",
    cityList: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento"],
    nearbyStates: ["nevada", "arizona", "oregon"],
    bgImage: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop",
    warning: {
      title: "2025 Insurance Update",
      text: "California INCREASED minimum liability limits to 30/60/15 starting Jan 1, 2025. This means more coverage is now available for your injuries."
    }
  },
  "colorado": {
    name: "Colorado",
    abbr: "CO",
    slug: "colorado-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative (50% Bar)",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $130,000",
    cityList: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"],
    nearbyStates: ["wyoming", "nebraska", "kansas", "utah"],
    bgImage: "https://images.unsplash.com/photo-1582296744385-8938b2911422?q=80&w=2070&auto=format&fit=crop"
  },
  "connecticut": {
    name: "Connecticut",
    abbr: "CT",
    slug: "connecticut-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative (51% Bar)",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$45,000 - $140,000",
    cityList: ["Bridgeport", "New Haven", "Stamford", "Hartford"],
    nearbyStates: ["new-york", "massachusetts", "rhode-island"],
    bgImage: "https://images.unsplash.com/photo-1583327529684-2e0c9c3c3c5d?q=80&w=2070&auto=format&fit=crop"
  },
  "delaware": {
    name: "Delaware",
    abbr: "DE",
    slug: "delaware-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative (51% Bar)",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $125,000",
    cityList: ["Wilmington", "Dover", "Newark", "Middletown"],
    nearbyStates: ["maryland", "pennsylvania", "new-jersey"],
    bgImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
  },
  "florida": {
    name: "Florida",
    abbr: "FL",
    slug: "florida-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "No-Fault (Pure)",
    minInsurance: "$10,000 / $20,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale"],
    nearbyStates: ["georgia", "alabama"],
    bgImage: "https://images.unsplash.com/photo-1535498730771-e735b998cd29?q=80&w=2070&auto=format&fit=crop",
     warning: {
      title: "CRITICAL WARNING: Law Change",
      text: "Effective March 2023, Florida reduced the Statute of Limitations from 4 years to just 2 years. If you wait, your case will be thrown out."
    }
  },
  "georgia": {
    name: "Georgia",
    abbr: "GA",
    slug: "georgia-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $135,000",
    cityList: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah"],
    nearbyStates: ["florida", "alabama", "tennessee", "south-carolina"],
    bgImage: "https://images.unsplash.com/photo-1575909812264-2a2a92f54718?q=80&w=2070&auto=format&fit=crop"
  },
  "hawaii": {
    name: "Hawaii",
    abbr: "HI",
    slug: "hawaii-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$20,000 / $40,000",
    avgSettlement: "$45,000 - $140,000",
    cityList: ["Honolulu", "Hilo", "Kailua", "Kapolei"],
    nearbyStates: [],
    bgImage: "https://images.unsplash.com/photo-1542259048-c2d326875f48?q=80&w=2069&auto=format&fit=crop"
  },
  "idaho": {
    name: "Idaho",
    abbr: "ID",
    slug: "idaho-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Boise", "Meridian", "Nampa", "Idaho Falls"],
    nearbyStates: ["washington", "oregon", "nevada", "utah"],
    bgImage: "https://images.unsplash.com/photo-1591805711618-518063908d02?q=80&w=2070&auto=format&fit=crop"
  },
  "illinois": {
    name: "Illinois",
    abbr: "IL",
    slug: "illinois-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $140,000",
    cityList: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford"],
    nearbyStates: ["wisconsin", "indiana", "missouri", "iowa"],
    bgImage: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop"
  },
  "indiana": {
    name: "Indiana",
    abbr: "IN",
    slug: "indiana-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative (51% Bar)",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    nearbyStates: ["illinois", "kentucky", "ohio", "michigan"],
    bgImage: "https://images.unsplash.com/photo-1629155750983-d5a4f46611f0?q=80&w=2070&auto=format&fit=crop"
  },
  "iowa": {
    name: "Iowa",
    abbr: "IA",
    slug: "iowa-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$20,000 / $40,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"],
    nearbyStates: ["illinois", "nebraska", "minnesota", "missouri"],
    bgImage: "https://images.unsplash.com/photo-1555429672-1d79f4857745?q=80&w=2070&auto=format&fit=crop"
  },
  "kansas": {
    name: "Kansas",
    abbr: "KS",
    slug: "kansas-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Wichita", "Overland Park", "Kansas City", "Olathe"],
    nearbyStates: ["missouri", "oklahoma", "colorado", "nebraska"],
    bgImage: "https://images.unsplash.com/photo-1628625132232-657559397233?q=80&w=2070&auto=format&fit=crop"
  },
  "kentucky": {
    name: "Kentucky",
    abbr: "KY",
    slug: "kentucky-car-accident-lawyer",
    statute: "1 Year",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $125,000",
    cityList: ["Louisville", "Lexington", "Bowling Green", "Owensboro"],
    nearbyStates: ["indiana", "ohio", "tennessee", "missouri"],
    bgImage: "https://images.unsplash.com/photo-1559104023-77144441e828?q=80&w=2070&auto=format&fit=crop"
  },
  "louisiana": {
    name: "Louisiana",
    abbr: "LA",
    slug: "louisiana-car-accident-lawyer",
    statute: "1 Year",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$15,000 / $30,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"],
    nearbyStates: ["texas", "mississippi", "arkansas"],
    bgImage: "https://images.unsplash.com/photo-1592859623820-f248d16b4589?q=80&w=2070&auto=format&fit=crop"
  },
  "maine": {
    name: "Maine",
    abbr: "ME",
    slug: "maine-car-accident-lawyer",
    statute: "6 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$50,000 / $100,000",
    avgSettlement: "$40,000 - $130,000",
    cityList: ["Portland", "Lewiston", "Bangor", "South Portland"],
    nearbyStates: ["new-hampshire"],
    bgImage: "https://images.unsplash.com/photo-1566996694954-7b2923d72598?q=80&w=2070&auto=format&fit=crop"
  },
  "maryland": {
    name: "Maryland",
    abbr: "MD",
    slug: "maryland-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Contributory Negligence",
    minInsurance: "$30,000 / $60,000",
    avgSettlement: "$40,000 - $135,000",
    cityList: ["Baltimore", "Columbia", "Germantown", "Silver Spring"],
    nearbyStates: ["virginia", "pennsylvania", "delaware"],
    bgImage: "https://images.unsplash.com/photo-1621947196713-9261f6124976?q=80&w=2070&auto=format&fit=crop"
  },
  "massachusetts": {
    name: "Massachusetts",
    abbr: "MA",
    slug: "massachusetts-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$20,000 / $40,000",
    avgSettlement: "$45,000 - $145,000",
    cityList: ["Boston", "Worcester", "Springfield", "Cambridge"],
    nearbyStates: ["connecticut", "rhode-island", "new-hampshire"],
    bgImage: "https://images.unsplash.com/photo-1503405457242-413b2347f57a?q=80&w=2070&auto=format&fit=crop"
  },
  "michigan": {
    name: "Michigan",
    abbr: "MI",
    slug: "michigan-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "No-Fault (Modified)",
    minInsurance: "$50,000 / $100,000",
    avgSettlement: "$50,000 - $160,000",
    cityList: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"],
    nearbyStates: ["ohio", "indiana"],
    bgImage: "https://images.unsplash.com/photo-1618591367676-15e181e56f65?q=80&w=2070&auto=format&fit=crop"
  },
  "minnesota": {
    name: "Minnesota",
    abbr: "MN",
    slug: "minnesota-car-accident-lawyer",
    statute: "6 Years",
    faultSystem: "No-Fault (Modified)",
    minInsurance: "$30,000 / $60,000",
    avgSettlement: "$40,000 - $130,000",
    cityList: ["Minneapolis", "Saint Paul", "Rochester", "Duluth"],
    nearbyStates: ["wisconsin", "iowa", "north-dakota", "south-dakota"],
    bgImage: "https://images.unsplash.com/photo-1541347521-4a4874693983?q=80&w=2070&auto=format&fit=crop"
  },
  "mississippi": {
    name: "Mississippi",
    abbr: "MS",
    slug: "mississippi-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Jackson", "Gulfport", "Southaven", "Biloxi"],
    nearbyStates: ["alabama", "louisiana", "tennessee", "arkansas"],
    bgImage: "https://images.unsplash.com/photo-1626708743828-0064a9086113?q=80&w=2070&auto=format&fit=crop"
  },
  "missouri": {
    name: "Missouri",
    abbr: "MO",
    slug: "missouri-car-accident-lawyer",
    statute: "5 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Kansas City", "St. Louis", "Springfield", "Columbia"],
    nearbyStates: ["illinois", "kansas", "arkansas", "iowa"],
    bgImage: "https://images.unsplash.com/photo-1623073242417-894c13f4a468?q=80&w=2070&auto=format&fit=crop"
  },
  "montana": {
    name: "Montana",
    abbr: "MT",
    slug: "montana-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $125,000",
    cityList: ["Billings", "Missoula", "Great Falls", "Bozeman"],
    nearbyStates: ["idaho", "wyoming", "north-dakota"],
    bgImage: "https://images.unsplash.com/photo-1560035331-28241df36828?q=80&w=2070&auto=format&fit=crop"
  },
  "nebraska": {
    name: "Nebraska",
    abbr: "NE",
    slug: "nebraska-car-accident-lawyer",
    statute: "4 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Omaha", "Lincoln", "Bellevue", "Grand Island"],
    nearbyStates: ["iowa", "kansas", "colorado", "wyoming"],
    bgImage: "https://images.unsplash.com/photo-1588689954522-202c63200716?q=80&w=2070&auto=format&fit=crop"
  },
  "nevada": {
    name: "Nevada",
    abbr: "NV",
    slug: "nevada-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $140,000",
    cityList: ["Las Vegas", "Henderson", "Reno", "North Las Vegas"],
    nearbyStates: ["california", "arizona", "utah", "oregon"],
    bgImage: "https://images.unsplash.com/photo-1548567117-0231a975eb69?q=80&w=2069&auto=format&fit=crop"
  },
  "new-hampshire": {
    name: "New Hampshire",
    abbr: "NH",
    slug: "new-hampshire-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $130,000",
    cityList: ["Manchester", "Nashua", "Concord", "Derry"],
    nearbyStates: ["massachusetts", "maine", "vermont"],
    bgImage: "https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=2070&auto=format&fit=crop"
  },
  "new-jersey": {
    name: "New Jersey",
    abbr: "NJ",
    slug: "new-jersey-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$15,000 / $30,000",
    avgSettlement: "$45,000 - $150,000",
    cityList: ["Newark", "Jersey City", "Paterson", "Elizabeth"],
    nearbyStates: ["new-york", "pennsylvania", "delaware"],
    bgImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
  },
  "new-mexico": {
    name: "New Mexico",
    abbr: "NM",
    slug: "new-mexico-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"],
    nearbyStates: ["arizona", "texas", "colorado"],
    bgImage: "https://images.unsplash.com/photo-1506104494993-632d7e710d3e?q=80&w=2070&auto=format&fit=crop"
  },
  "new-york": {
    name: "New York",
    abbr: "NY",
    slug: "new-york-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "No-Fault (Serious Injury Threshold)",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$50,000 - $175,000",
    cityList: ["New York City", "Buffalo", "Rochester", "Yonkers"],
    nearbyStates: ["new-jersey", "connecticut", "pennsylvania"],
    bgImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop"
  },
  "north-carolina": {
    name: "North Carolina",
    abbr: "NC",
    slug: "north-carolina-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Contributory Negligence",
    minInsurance: "$30,000 / $60,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Charlotte", "Raleigh", "Greensboro", "Durham"],
    nearbyStates: ["south-carolina", "virginia", "tennessee"],
    bgImage: "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1978&auto=format&fit=crop",
    warning: {
      title: "Strict Negligence Law",
      text: "NC is one of the few states with 'Contributory Negligence,' meaning if you are even 1% at fault, you may be barred from recovering anything. You need a lawyer."
    }
  },
  "north-dakota": {
    name: "North Dakota",
    abbr: "ND",
    slug: "north-dakota-car-accident-lawyer",
    statute: "6 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $120,000",
    cityList: ["Fargo", "Bismarck", "Grand Forks", "Minot"],
    nearbyStates: ["minnesota", "south-dakota", "montana"],
    bgImage: "https://images.unsplash.com/photo-1532299241948-5c4b820b1c09?q=80&w=2070&auto=format&fit=crop"
  },
  "ohio": {
    name: "Ohio",
    abbr: "OH",
    slug: "ohio-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $125,000",
    cityList: ["Columbus", "Cleveland", "Cincinnati", "Toledo"],
    nearbyStates: ["michigan", "pennsylvania", "kentucky", "indiana"],
    bgImage: "https://images.unsplash.com/photo-1520223297774-89a56e961201?q=80&w=2070&auto=format&fit=crop"
  },
  "oklahoma": {
    name: "Oklahoma",
    abbr: "OK",
    slug: "oklahoma-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"],
    nearbyStates: ["texas", "kansas", "arkansas", "missouri"],
    bgImage: "https://images.unsplash.com/photo-1556900830-7a79d85a3a2d?q=80&w=2070&auto=format&fit=crop"
  },
  "oregon": {
    name: "Oregon",
    abbr: "OR",
    slug: "oregon-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $135,000",
    cityList: ["Portland", "Salem", "Eugene", "Gresham"],
    nearbyStates: ["washington", "california", "idaho"],
    bgImage: "https://images.unsplash.com/photo-1463413236178-df3f96c5c453?q=80&w=2070&auto=format&fit=crop"
  },
  "pennsylvania": {
    name: "Pennsylvania",
    abbr: "PA",
    slug: "pennsylvania-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Choice No-Fault",
    minInsurance: "$15,000 / $30,000",
    avgSettlement: "$30,000 - $110,000",
    cityList: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"],
    nearbyStates: ["new-jersey", "ohio", "new-york", "maryland"],
    bgImage: "https://images.unsplash.com/photo-1516236994532-93663e302940?q=80&w=2070&auto=format&fit=crop"
  },
  "rhode-island": {
    name: "Rhode Island",
    abbr: "RI",
    slug: "rhode-island-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $130,000",
    cityList: ["Providence", "Warwick", "Cranston", "Pawtucket"],
    nearbyStates: ["massachusetts", "connecticut"],
    bgImage: "https://images.unsplash.com/photo-1546619332-67e6fb618604?q=80&w=2069&auto=format&fit=crop"
  },
  "south-carolina": {
    name: "South Carolina",
    abbr: "SC",
    slug: "south-carolina-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant"],
    nearbyStates: ["north-carolina", "georgia"],
    bgImage: "https://images.unsplash.com/photo-1512666765373-5c01c426e686?q=80&w=2070&auto=format&fit=crop"
  },
  "south-dakota": {
    name: "South Dakota",
    abbr: "SD",
    slug: "south-dakota-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Slight/Gross Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"],
    nearbyStates: ["north-dakota", "minnesota", "nebraska", "iowa"],
    bgImage: "https://images.unsplash.com/photo-1625687428057-70044f53d658?q=80&w=2070&auto=format&fit=crop"
  },
  "tennessee": {
    name: "Tennessee",
    abbr: "TN",
    slug: "tennessee-car-accident-lawyer",
    statute: "1 Year",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    nearbyStates: ["kentucky", "georgia", "mississippi", "alabama"],
    bgImage: "https://images.unsplash.com/photo-1561222787-b21746c27371?q=80&w=2070&auto=format&fit=crop"
  },
  "texas": {
    name: "Texas",
    abbr: "TX",
    slug: "texas-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative (51% Bar)",
    minInsurance: "$30,000 / $60,000",
    avgSettlement: "$35,000 - $130,000",
    cityList: ["Houston", "San Antonio", "Dallas", "Austin"],
    nearbyStates: ["louisiana", "oklahoma", "new-mexico", "arkansas"],
    bgImage: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2070&auto=format&fit=crop"
  },
  "utah": {
    name: "Utah",
    abbr: "UT",
    slug: "utah-car-accident-lawyer",
    statute: "4 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $65,000",
    avgSettlement: "$40,000 - $125,000",
    cityList: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"],
    nearbyStates: ["nevada", "arizona", "colorado", "idaho"],
    bgImage: "https://images.unsplash.com/photo-1532560980432-94d64393e31c?q=80&w=2070&auto=format&fit=crop"
  },
  "vermont": {
    name: "Vermont",
    abbr: "VT",
    slug: "vermont-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$40,000 - $120,000",
    cityList: ["Burlington", "South Burlington", "Rutland", "Barre"],
    nearbyStates: ["new-hampshire", "new-york", "massachusetts"],
    bgImage: "https://images.unsplash.com/photo-1513415564515-763d99881321?q=80&w=2070&auto=format&fit=crop"
  },
  "virginia": {
    name: "Virginia",
    abbr: "VA",
    slug: "virginia-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Contributory Negligence",
    minInsurance: "$30,000 / $60,000",
    avgSettlement: "$40,000 - $130,000",
    cityList: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"],
    nearbyStates: ["maryland", "north-carolina", "west-virginia"],
    bgImage: "https://images.unsplash.com/photo-1532444458054-a1a4362a26a4?q=80&w=2070&auto=format&fit=crop"
  },
  "washington": {
    name: "Washington",
    abbr: "WA",
    slug: "washington-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Pure Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$45,000 - $145,000",
    cityList: ["Seattle", "Spokane", "Tacoma", "Vancouver"],
    nearbyStates: ["oregon", "idaho"],
    bgImage: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=2070&auto=format&fit=crop"
  },
  "west-virginia": {
    name: "West Virginia",
    abbr: "WV",
    slug: "west-virginia-car-accident-lawyer",
    statute: "2 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Charleston", "Huntington", "Morgantown", "Parkersburg"],
    nearbyStates: ["virginia", "pennsylvania", "ohio", "kentucky"],
    bgImage: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=2070&auto=format&fit=crop"
  },
  "wisconsin": {
    name: "Wisconsin",
    abbr: "WI",
    slug: "wisconsin-car-accident-lawyer",
    statute: "3 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $120,000",
    cityList: ["Milwaukee", "Madison", "Green Bay", "Kenosha"],
    nearbyStates: ["illinois", "minnesota", "iowa", "michigan"],
    bgImage: "https://images.unsplash.com/photo-1577023385067-57eb7296b736?q=80&w=2070&auto=format&fit=crop"
  },
  "wyoming": {
    name: "Wyoming",
    abbr: "WY",
    slug: "wyoming-car-accident-lawyer",
    statute: "4 Years",
    faultSystem: "Modified Comparative Negligence",
    minInsurance: "$25,000 / $50,000",
    avgSettlement: "$35,000 - $115,000",
    cityList: ["Cheyenne", "Casper", "Laramie", "Gillette"],
    nearbyStates: ["colorado", "montana", "nebraska", "utah"],
    bgImage: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?q=80&w=2067&auto=format&fit=crop"
  }
};