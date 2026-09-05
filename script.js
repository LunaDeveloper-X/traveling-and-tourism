/* =========================================================
   EXPLORE THE WORLD
   PROFESSIONAL TRAVEL WEBSITE
========================================================= */


/* =========================================================
   COUNTRY DATA
========================================================= */

const countries = {

    "Turkey": {
        title: "Turkey 🇹🇷",
        image: "https://images.unsplash.com/photo-1541432901042-2d8a0d8e2d0a",
        introduction:
            "Turkey is a fascinating destination where Europe and Asia meet, offering ancient history, beautiful coastlines, colorful markets and rich traditions.",
        information:
            "Turkey is famous for Istanbul, Cappadocia, ancient ruins, Mediterranean beaches and delicious Turkish cuisine.",

        places: [
            {
                name: "Istanbul",
                image: "https://images.unsplash.com/photo-1541432901042-2d8a0d8e2d0a",
                description: "Explore mosques, palaces, markets and beautiful Bosphorus views.",
                details: "Istanbul is Turkey's largest city and a unique destination connecting Europe and Asia.",
                gallery: [
                    "https://images.unsplash.com/photo-1541432901042-2d8a0d8e2d0a",
                    "https://images.unsplash.com/photo-1524230572899-a752b3835840"
                ]
            },
            {
                name: "Cappadocia",
                image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
                description: "Discover fairy chimneys, valleys and famous hot-air balloon experiences.",
                details: "Cappadocia is famous for its unusual rock formations, underground cities and spectacular landscapes.",
                gallery: [
                    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                ]
            },
            {
                name: "Antalya",
                image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
                description: "Enjoy beautiful beaches and the Mediterranean coastline.",
                details: "Antalya is one of Turkey's most popular coastal destinations and offers beaches, resorts and historic areas.",
                gallery: [
                    "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                ]
            },
            {
                name: "Pamukkale",
                image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
                description: "See spectacular white terraces formed by thermal waters.",
                details: "Pamukkale is famous for its white travertine terraces and nearby ancient ruins.",
                gallery: [
                    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
                    "https://images.unsplash.com/photo-1530789253388-582c481c54b0"
                ]
            }
        ],

        historical: [
            {
                name: "Hagia Sophia",
                image: "https://images.unsplash.com/photo-1541432901042-2d8a0d8e2d0a",
                description: "A world-famous historic landmark in Istanbul.",
                details: "Hagia Sophia has played an important role in the religious and architectural history of Istanbul for centuries.",
                gallery: [
                    "https://images.unsplash.com/photo-1541432901042-2d8a0d8e2d0a",
                    "https://images.unsplash.com/photo-1524230572899-a752b3835840"
                ]
            },
            {
                name: "Ephesus",
                image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
                description: "Explore the remains of an important ancient city.",
                details: "Ephesus contains impressive ancient ruins including the Library of Celsus and large archaeological areas.",
                gallery: [
                    "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
                    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200"
                ]
            }
        ],

        restaurants: [
            {
                name: "Mikla",
                location: "Istanbul",
                type: "Modern Turkish",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "A stylish destination for modern Turkish cuisine.",
                details: "Mikla is known for creative Turkish dishes and an elegant dining atmosphere.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
                ]
            },
            {
                name: "Çiya Sofrası",
                location: "Istanbul",
                type: "Traditional Turkish",
                image: "https://images.unsplash.com/photo-1547592180-85f173990554",
                description: "Enjoy traditional regional Turkish flavors.",
                details: "Çiya Sofrası is well known for traditional regional dishes and diverse Turkish flavors.",
                gallery: [
                    "https://images.unsplash.com/photo-1547592180-85f173990554",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            }
        ],

        foods: [
            {
                name: "Turkish Kebab",
                image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
                description: "Grilled meat prepared with traditional spices and methods.",
                location: "Restaurants and food markets throughout Turkey",
                details: "Kebab has many regional varieties and is one of Turkey's most recognizable foods.",
                gallery: [
                    "https://images.unsplash.com/photo-1529042410759-befb1204b468",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Baklava",
                image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7",
                description: "Sweet pastry made with filo, nuts and syrup.",
                location: "Dessert shops across Turkey",
                details: "Baklava is one of the most famous desserts associated with Turkish cuisine.",
                gallery: [
                    "https://images.unsplash.com/photo-1519671282429-b44660ead0a7",
                    "https://images.unsplash.com/photo-1551024506-0bccd828d307"
                ]
            }
        ]
    },


    "United Kingdom": {
        title: "United Kingdom 🇬🇧",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
        introduction:
            "The United Kingdom is known for royal heritage, historic cities, beautiful countryside, castles and world-famous landmarks.",
        information:
            "The United Kingdom includes England, Scotland, Wales and Northern Ireland and offers a mixture of history, culture and modern city life.",

        places: [
            {
                name: "London",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
                description: "Discover Big Ben, Buckingham Palace and Tower Bridge.",
                details: "London is the capital of the United Kingdom and one of the world's most visited cities.",
                gallery: [
                    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
                    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383"
                ]
            },
            {
                name: "Edinburgh",
                image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc",
                description: "Explore Edinburgh Castle and historic Scottish streets.",
                details: "Edinburgh is Scotland's capital and is famous for its historic Old Town and castle.",
                gallery: [
                    "https://images.unsplash.com/photo-1506377585622-bedcbb027afc",
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                ]
            },
            {
                name: "Lake District",
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                description: "Enjoy peaceful lakes, hills and beautiful landscapes.",
                details: "The Lake District is a popular destination for walking, nature and outdoor activities.",
                gallery: [
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                ]
            },
            {
                name: "Stonehenge",
                image: "https://images.unsplash.com/photo-1599833975787-5a2b5d6b4f8a",
                description: "Visit Britain's famous prehistoric stone monument.",
                details: "Stonehenge is an ancient monument in England with a history stretching back thousands of years.",
                gallery: [
                    "https://images.unsplash.com/photo-1599833975787-5a2b5d6b4f8a",
                    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
                ]
            }
        ],

        historical: [
            {
                name: "Tower of London",
                image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
                description: "A historic fortress beside the River Thames.",
                details: "The Tower of London has served as a royal palace, fortress and prison.",
                gallery: [
                    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
                    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
                ]
            },
            {
                name: "Westminster Abbey",
                image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
                description: "A famous historic church in London.",
                details: "Westminster Abbey has been closely connected with British royal ceremonies and history.",
                gallery: [
                    "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
                    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383"
                ]
            }
        ],

        restaurants: [
            {
                name: "Rules Restaurant",
                location: "London",
                type: "British Cuisine",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "Traditional British dining in a historic atmosphere.",
                details: "Rules is known for classic British cuisine and its historic character.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
                ]
            },
            {
                name: "The Ivy",
                location: "London",
                type: "Modern British",
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                description: "Elegant dining with a wide variety of dishes.",
                details: "The Ivy is known for stylish interiors and a varied modern menu.",
                gallery: [
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            }
        ],

        foods: [
            {
                name: "Fish and Chips",
                image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc",
                description: "Crispy fried fish served with golden chips.",
                location: "Across the United Kingdom",
                details: "Fish and chips is one of Britain's best-known traditional meals.",
                gallery: [
                    "https://images.unsplash.com/photo-1579208030886-b937da0925dc",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "English Breakfast",
                image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
                description: "A hearty breakfast with eggs, sausages, beans and toast.",
                location: "Cafes and hotels throughout the UK",
                details: "A full English breakfast is a classic morning meal with several traditional components.",
                gallery: [
                    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            }
        ]
    },


    "Switzerland": {
        title: "Switzerland 🇨🇭",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        introduction:
            "Switzerland offers spectacular Alpine scenery, peaceful lakes, charming villages and unforgettable mountain experiences.",
        information:
            "Switzerland is popular for hiking, skiing, scenic train journeys, beautiful lakes and traditional Alpine culture.",

        places: [
            {
                name: "Interlaken",
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                description: "A beautiful town surrounded by mountains and lakes.",
                details: "Interlaken is a popular base for exploring the Swiss Alps and enjoying outdoor adventures.",
                gallery: [
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                ]
            },
            {
                name: "Zermatt",
                image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
                description: "A famous mountain resort near the Matterhorn.",
                details: "Zermatt is one of Switzerland's most famous Alpine destinations.",
                gallery: [
                    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                ]
            },
            {
                name: "Lucerne",
                image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
                description: "A charming city beside a beautiful lake.",
                details: "Lucerne is known for its historic old town, lake and mountain scenery.",
                gallery: [
                    "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                ]
            },
            {
                name: "Jungfrau",
                image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518",
                description: "A spectacular Alpine region with snow-covered mountains.",
                details: "The Jungfrau region offers breathtaking scenery and outdoor experiences.",
                gallery: [
                    "https://images.unsplash.com/photo-1521292270410-a8c4d716d518",
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                ]
            }
        ],

        historical: [
            {
                name: "Chillon Castle",
                image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
                description: "A medieval castle beside Lake Geneva.",
                details: "Chillon Castle is one of Switzerland's best-known historic landmarks.",
                gallery: [
                    "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
                    "https://images.unsplash.com/photo-1521292270410-a8c4d716d518"
                ]
            },
            {
                name: "Bern Old Town",
                image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
                description: "A beautifully preserved historic city center.",
                details: "Bern's Old Town is known for medieval architecture, arcades and historic streets.",
                gallery: [
                    "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
                    "https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                ]
            }
        ],

        restaurants: [
            {
                name: "Zeughauskeller",
                location: "Zurich",
                type: "Swiss Cuisine",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "A traditional destination for Swiss dishes.",
                details: "Zeughauskeller is known for traditional Swiss meals and historic atmosphere.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1547592180-85f173990554"
                ]
            },
            {
                name: "Swiss Chuchi",
                location: "Zurich",
                type: "Traditional Swiss",
                image: "https://images.unsplash.com/photo-1547592180-85f173990554",
                description: "Experience classic Swiss flavors.",
                details: "Swiss Chuchi is a popular choice for visitors wanting to experience traditional Swiss food.",
                gallery: [
                    "https://images.unsplash.com/photo-1547592180-85f173990554",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            }
        ],

        foods: [
            {
                name: "Cheese Fondue",
                image: "https://images.unsplash.com/photo-1547592180-85f173990554",
                description: "Melted cheese traditionally served with bread.",
                location: "Restaurants throughout Switzerland",
                details: "Cheese fondue is one of Switzerland's most recognizable traditional dishes.",
                gallery: [
                    "https://images.unsplash.com/photo-1547592180-85f173990554",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Rösti",
                image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
                description: "A crispy traditional grated potato dish.",
                location: "Swiss restaurants and homes",
                details: "Rösti is a classic Swiss potato dish that can be served as a side or main meal.",
                gallery: [
                    "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            }
        ]
    },


    "Italy": {
        title: "Italy 🇮🇹",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        introduction:
            "Italy is a dream destination filled with ancient history, beautiful cities, famous art, romantic landscapes and delicious cuisine.",
        information:
            "Italy is famous for Rome, Venice, Florence, the Amalfi Coast, historic architecture, museums and world-famous food.",

        places: [
            {
                name: "Rome",
                image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
                description: "Explore the Colosseum, Roman Forum and historic streets.",
                details: "Rome is the capital of Italy and is filled with ancient monuments and cultural attractions.",
                gallery: [
                    "https://images.unsplash.com/photo-1529260830199-42c24126f198",
                    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                ]
            },
            {
                name: "Venice",
                image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
                description: "Enjoy canals, bridges and beautiful historic buildings.",
                details: "Venice is famous for its canals, gondolas and unique architecture.",
                gallery: [
                    "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
                    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                ]
            },
            {
                name: "Florence",
                image: "https://images.unsplash.com/photo-1543429258-7b7f5e9f4a9a",
                description: "Discover Renaissance art and beautiful architecture.",
                details: "Florence is strongly associated with Renaissance art, architecture and culture.",
                gallery: [
                    "https://images.unsplash.com/photo-1543429258-7b7f5e9f4a9a",
                    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                ]
            },
            {
                name: "Amalfi Coast",
                image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
                description: "Enjoy dramatic coastlines and colorful seaside towns.",
                details: "The Amalfi Coast is famous for spectacular coastal scenery and charming towns.",
                gallery: [
                    "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
                    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                ]
            }
        ],

        historical: [
            {
                name: "Colosseum",
                image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
                description: "One of ancient Rome's most famous monuments.",
                details: "The Colosseum is an iconic Roman amphitheater and one of Italy's most recognized landmarks.",
                gallery: [
                    "https://images.unsplash.com/photo-1529260830199-42c24126f198",
                    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                ]
            },
            {
                name: "Pompeii",
                image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
                description: "Explore the preserved remains of an ancient Roman city.",
                details: "Pompeii provides a remarkable look into ancient Roman daily life.",
                gallery: [
                    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
                    "https://images.unsplash.com/photo-1529260830199-42c24126f198"
                ]
            }
        ],

        restaurants: [
            {
                name: "Roscioli",
                location: "Rome",
                type: "Italian Cuisine",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "A popular destination for traditional Italian flavors.",
                details: "Roscioli is associated with Roman-style dishes and Italian dining culture.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
                ]
            },
            {
                name: "Trattoria da Burde",
                location: "Florence",
                type: "Tuscan Cuisine",
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                description: "Traditional Tuscan-style dining.",
                details: "Trattorias are a classic way to experience regional Italian cooking.",
                gallery: [
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
                ]
            }
        ],

        foods: [
            {
                name: "Pizza",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                description: "A world-famous Italian dish with countless regional styles.",
                location: "Pizzerias throughout Italy",
                details: "Italian pizza is particularly associated with Naples and has become popular around the world.",
                gallery: [
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
                ]
            },
            {
                name: "Pasta",
                image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
                description: "Traditional pasta prepared in many regional varieties.",
                location: "Restaurants throughout Italy",
                details: "Italy has a huge variety of pasta shapes, sauces and regional recipes.",
                gallery: [
                    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                ]
            }
        ]
    },


    "Japan": {
        title: "Japan 🇯🇵",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
        introduction:
            "Japan combines modern cities, ancient temples, peaceful gardens, traditional culture and incredible food.",
        information:
            "Japan is famous for Tokyo, Kyoto, Mount Fuji, cherry blossoms, temples, technology and traditional cuisine.",

        places: [
            {
                name: "Tokyo",
                image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
                description: "Experience modern city life, temples and world-famous attractions.",
                details: "Tokyo is Japan's capital and one of the world's most dynamic metropolitan areas.",
                gallery: [
                    "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
                    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8"
                ]
            },
            {
                name: "Kyoto",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
                description: "Discover temples, gardens and traditional Japanese streets.",
                details: "Kyoto is famous for traditional architecture, temples, gardens and cultural heritage.",
                gallery: [
                    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
                    "https://images.unsplash.com/photo-1528360983277-13d401cdc186"
                ]
            },
            {
                name: "Mount Fuji",
                image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65",
                description: "See Japan's iconic mountain and beautiful surrounding scenery.",
                details: "Mount Fuji is one of Japan's most recognizable natural landmarks.",
                gallery: [
                    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65",
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                ]
            },
            {
                name: "Osaka",
                image: "https://images.unsplash.com/photo-1590559899731-a382839e5549",
                description: "Enjoy food, shopping and lively city culture.",
                details: "Osaka is known for its energetic atmosphere, food culture and modern attractions.",
                gallery: [
                    "https://images.unsplash.com/photo-1590559899731-a382839e5549",
                    "https://images.unsplash.com/photo-1528360983277-13d401cdc186"
                ]
            }
        ],

        historical: [
            {
                name: "Fushimi Inari Shrine",
                image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36",
                description: "Famous for its long paths of traditional torii gates.",
                details: "Fushimi Inari is one of Kyoto's best-known Shinto shrine complexes.",
                gallery: [
                    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36",
                    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
                ]
            },
            {
                name: "Himeji Castle",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
                description: "A magnificent historic Japanese castle.",
                details: "Himeji Castle is one of Japan's most famous surviving castles.",
                gallery: [
                    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
                    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
                ]
            }
        ],

        restaurants: [
            {
                name: "Sukiyabashi Jiro",
                location: "Tokyo",
                type: "Japanese Sushi",
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "A destination associated with traditional sushi culture.",
                details: "Tokyo is internationally recognized for its high-quality sushi restaurants.",
                gallery: [
                    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            },
            {
                name: "Nishiazabu Sushi",
                location: "Tokyo",
                type: "Traditional Japanese",
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Enjoy carefully prepared Japanese dishes.",
                details: "Traditional Japanese restaurants often emphasize seasonal ingredients and presentation.",
                gallery: [
                    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            }
        ],

        foods: [
            {
                name: "Sushi",
                image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                description: "Fresh ingredients combined with carefully prepared rice.",
                location: "Sushi restaurants throughout Japan",
                details: "Sushi is one of Japan's most internationally famous foods.",
                gallery: [
                    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Ramen",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
                description: "A comforting noodle soup available in many regional styles.",
                location: "Ramen shops throughout Japan",
                details: "Ramen comes in many regional styles and is one of Japan's most popular casual foods.",
                gallery: [
                    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
                    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
                ]
            }
        ]
    },


    "France": {
        title: "France 🇫🇷",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        introduction:
            "France offers romantic cities, historic monuments, beautiful countryside, famous art and world-renowned cuisine.",
        information:
            "France is famous for Paris, the Eiffel Tower, museums, castles, villages, fashion and French food.",

        places: [
            {
                name: "Paris",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                description: "Explore the Eiffel Tower, Louvre and charming Parisian streets.",
                details: "Paris is the capital of France and one of the world's most famous cultural destinations.",
                gallery: [
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
                ]
            },
            {
                name: "Nice",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                description: "Enjoy Mediterranean beaches and beautiful coastal views.",
                details: "Nice is a popular French Riviera destination known for its coastline and old town.",
                gallery: [
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                    "https://images.unsplash.com/photo-1530789253388-582c481c54b0"
                ]
            },
            {
                name: "French Alps",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
                description: "Discover spectacular mountain landscapes.",
                details: "The French Alps offer skiing, hiking and beautiful mountain scenery.",
                gallery: [
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                ]
            },
            {
                name: "Bordeaux",
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                description: "Explore elegant architecture and French regional culture.",
                details: "Bordeaux is known for architecture, history and its important regional food and wine culture.",
                gallery: [
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                ]
            }
        ],

        historical: [
            {
                name: "Eiffel Tower",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                description: "France's most recognizable landmark.",
                details: "The Eiffel Tower has become a global symbol of Paris and France.",
                gallery: [
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
                ]
            },
            {
                name: "Palace of Versailles",
                image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
                description: "A magnificent historic royal palace.",
                details: "The Palace of Versailles is closely connected with the history of the French monarchy.",
                gallery: [
                    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                ]
            }
        ],

        restaurants: [
            {
                name: "Le Jules Verne",
                location: "Paris",
                type: "French Cuisine",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "Elegant French dining in Paris.",
                details: "Paris is famous for its fine dining culture and traditional French cuisine.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
                ]
            },
            {
                name: "L'Ambroisie",
                location: "Paris",
                type: "Classic French",
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                description: "A classic French dining experience.",
                details: "French cuisine is known for technique, presentation and regional ingredients.",
                gallery: [
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            }
        ],

        foods: [
            {
                name: "Croissant",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
                description: "A buttery, flaky French pastry.",
                location: "Bakeries throughout France",
                details: "Croissants are a classic French breakfast pastry and are especially associated with Parisian cafes.",
                gallery: [
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Crêpe",
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                description: "Thin French pancakes served sweet or savory.",
                location: "Cafes and creperies throughout France",
                details: "Crêpes are popular across France and can be filled with many different ingredients.",
                gallery: [
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff"
                ]
            }
        ]
    },


    "South Korea": {
        title: "South Korea 🇰🇷",
        image: "https://images.unsplash.com/photo-1538485399081-7c8970f8f2c1",
        introduction:
            "South Korea combines modern cities, traditional palaces, mountain landscapes, pop culture and exciting food traditions.",
        information:
            "South Korea is famous for Seoul, historic palaces, traditional markets, technology, entertainment and Korean cuisine.",

        places: [
            {
                name: "Seoul",
                image: "https://images.unsplash.com/photo-1538485399081-7c8970f8f2c1",
                description: "Experience modern city life and traditional Korean culture.",
                details: "Seoul is the capital of South Korea and combines modern architecture with historic neighborhoods.",
                gallery: [
                    "https://images.unsplash.com/photo-1538485399081-7c8970f8f2c1",
                    "https://images.unsplash.com/photo-1517154421773-0529f29ea451"
                ]
            },
            {
                name: "Busan",
                image: "https://images.unsplash.com/photo-1552799446-159ba9523315",
                description: "Enjoy beaches, markets and coastal scenery.",
                details: "Busan is South Korea's famous coastal city with beaches, seafood markets and mountain views.",
                gallery: [
                    "https://images.unsplash.com/photo-1552799446-159ba9523315",
                    "https://images.unsplash.com/photo-1538485399081-7c8970f8f2c1"
                ]
            },
            {
                name: "Jeju Island",
                image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b",
                description: "Discover volcanic landscapes and beautiful coastal scenery.",
                details: "Jeju Island is known for volcanic landscapes, beaches and natural attractions.",
                gallery: [
                    "https://images.unsplash.com/photo-1578895101408-1a36b834405b",
                    "https://images.unsplash.com/photo-1552799446-159ba9523315"
                ]
            },
            {
                name: "Gyeongju",
                image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
                description: "Explore Korea's historic heritage.",
                details: "Gyeongju is famous for historic sites and remains from Korea's ancient kingdoms.",
                gallery: [
                    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
                    "https://images.unsplash.com/photo-1538485399081-7c8970f8f2c1"
                ]
            }
        ],

        historical: [
            {
                name: "Gyeongbokgung Palace",
                image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451",
                description: "A famous historic royal palace in Seoul.",
                details: "Gyeongbokgung is one of Seoul's most important traditional landmarks.",
                gallery: [
                    "https://images.unsplash.com/photo-1517154421773-0529f29ea451",
                    "https://images.unsplash.com/photo-1538485399081-7c8970f8f2c1"
                ]
            },
            {
                name: "Bulguksa Temple",
                image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
                description: "A famous historic Buddhist temple.",
                details: "Bulguksa is an important Korean cultural and Buddhist heritage site.",
                gallery: [
                    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
                    "https://images.unsplash.com/photo-1578895101408-1a36b834405b"
                ]
            }
        ],

        restaurants: [
            {
                name: "Jungsik",
                location: "Seoul",
                type: "Modern Korean",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "Modern Korean dining with creative presentation.",
                details: "Seoul has a diverse restaurant scene ranging from traditional markets to modern fine dining.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Gwangjang Market",
                location: "Seoul",
                type: "Korean Street Food",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                description: "A lively place to experience Korean food culture.",
                details: "Traditional markets offer visitors opportunities to experience local Korean dishes and snacks.",
                gallery: [
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            }
        ],

        foods: [
            {
                name: "Bibimbap",
                image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
                description: "Rice served with vegetables and flavorful toppings.",
                location: "Restaurants throughout South Korea",
                details: "Bibimbap is one of Korea's most recognizable traditional rice dishes.",
                gallery: [
                    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Korean BBQ",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                description: "Grilled meat enjoyed with a variety of side dishes.",
                location: "Korean BBQ restaurants",
                details: "Korean barbecue is a popular social dining experience featuring grilled meats and side dishes.",
                gallery: [
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
                ]
            }
        ]
    },


    "Dubai": {
        title: "Dubai 🇦🇪",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        introduction:
            "Dubai is a spectacular destination in the United Arab Emirates, famous for modern architecture, luxury experiences, shopping and desert adventures.",
        information:
            "Dubai combines futuristic architecture, beautiful resorts, traditional markets, desert landscapes and international cuisine.",

        places: [
            {
                name: "Burj Khalifa",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                description: "See the world's famous skyline and visit the iconic Burj Khalifa.",
                details: "Burj Khalifa is one of Dubai's most recognizable landmarks and dominates the city's skyline.",
                gallery: [
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090"
                ]
            },
            {
                name: "Palm Jumeirah",
                image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
                description: "Explore Dubai's famous palm-shaped island.",
                details: "Palm Jumeirah is a major Dubai landmark known for resorts, beaches and waterfront views.",
                gallery: [
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090",
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                ]
            },
            {
                name: "Dubai Marina",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                description: "Enjoy waterfront views, restaurants and modern skyscrapers.",
                details: "Dubai Marina is a popular modern waterfront district with towers, restaurants and leisure activities.",
                gallery: [
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090"
                ]
            },
            {
                name: "Dubai Desert",
                image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",
                description: "Experience beautiful desert landscapes and adventures.",
                details: "The Dubai desert offers dune landscapes, cultural experiences and outdoor activities.",
                gallery: [
                    "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0",
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                ]
            }
        ],

        historical: [
            {
                name: "Al Fahidi Historical District",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                description: "Discover traditional architecture and Dubai's heritage.",
                details: "Al Fahidi provides visitors with a glimpse into Dubai's traditional urban history.",
                gallery: [
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                    "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0"
                ]
            },
            {
                name: "Dubai Creek",
                image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
                description: "Explore the historic waterway at the heart of old Dubai.",
                details: "Dubai Creek has historically been important to trade and the development of the city.",
                gallery: [
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090",
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
                ]
            }
        ],

        restaurants: [
            {
                name: "Al Fanar Restaurant",
                location: "Dubai",
                type: "Emirati Cuisine",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "A place to experience traditional Emirati flavors.",
                details: "Traditional Emirati cuisine includes rice dishes, grilled meats, seafood and regional spices.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Pierchic",
                location: "Dubai",
                type: "Seafood",
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                description: "Elegant dining with seafood and waterfront atmosphere.",
                details: "Dubai has a large international restaurant scene with seafood, Middle Eastern and global cuisines.",
                gallery: [
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            }
        ],

        foods: [
            {
                name: "Shawarma",
                image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
                description: "Seasoned meat served with bread, vegetables and sauces.",
                location: "Restaurants and food stalls throughout Dubai",
                details: "Shawarma is a popular Middle Eastern street food widely enjoyed in Dubai.",
                gallery: [
                    "https://images.unsplash.com/photo-1529042410759-befb1204b468",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Machboos",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                description: "A traditional rice dish prepared with spices and meat or seafood.",
                location: "Emirati restaurants",
                details: "Machboos is a traditional Gulf rice dish associated with Emirati cuisine.",
                gallery: [
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                    "https://images.unsplash.com/photo-1529042410759-befb1204b468"
                ]
            }
        ]
    },


    "Germany": {
        title: "Germany 🇩🇪",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        introduction:
            "Germany combines historic cities, medieval castles, beautiful forests, modern architecture and rich cultural traditions.",
        information:
            "Germany is famous for Berlin, Munich, castles, museums, scenic countryside and traditional German food.",

        places: [
            {
                name: "Berlin",
                image: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
                description: "Explore historic landmarks, museums and modern city life.",
                details: "Berlin is Germany's capital and an important center of history, art and culture.",
                gallery: [
                    "https://images.unsplash.com/photo-1560969184-10fe8719e047",
                    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
                ]
            },
            {
                name: "Munich",
                image: "https://images.unsplash.com/photo-1595867818082-083862f3d630",
                description: "Discover Bavarian culture and beautiful architecture.",
                details: "Munich is the capital of Bavaria and is known for its museums, architecture and cultural traditions.",
                gallery: [
                    "https://images.unsplash.com/photo-1595867818082-083862f3d630",
                    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
                ]
            },
            {
                name: "Black Forest",
                image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
                description: "Enjoy forests, villages and peaceful natural scenery.",
                details: "The Black Forest is a scenic region known for forests, villages and outdoor activities.",
                gallery: [
                    "https://images.unsplash.com/photo-1448375240586-882707db888b",
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                ]
            },
            {
                name: "Neuschwanstein Castle",
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                description: "See one of Europe's most famous fairy-tale castles.",
                details: "Neuschwanstein Castle is one of Germany's most recognizable architectural attractions.",
                gallery: [
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
                    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
                ]
            }
        ],

        historical: [
            {
                name: "Brandenburg Gate",
                image: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
                description: "A famous historic landmark in Berlin.",
                details: "The Brandenburg Gate is one of Berlin's best-known landmarks and a symbol of German history.",
                gallery: [
                    "https://images.unsplash.com/photo-1560969184-10fe8719e047",
                    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
                ]
            },
            {
                name: "Cologne Cathedral",
                image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
                description: "A spectacular Gothic cathedral.",
                details: "Cologne Cathedral is one of Germany's most famous religious and architectural landmarks.",
                gallery: [
                    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
                    "https://images.unsplash.com/photo-1560969184-10fe8719e047"
                ]
            }
        ],

        restaurants: [
            {
                name: "Hofbräuhaus",
                location: "Munich",
                type: "Bavarian Cuisine",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                description: "A famous destination for traditional Bavarian food.",
                details: "Munich has a strong Bavarian food culture with hearty traditional dishes.",
                gallery: [
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            },
            {
                name: "Zur Letzten Instanz",
                location: "Berlin",
                type: "Traditional German",
                image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                description: "A traditional-style Berlin dining destination.",
                details: "Berlin offers a mixture of classic German restaurants and international cuisine.",
                gallery: [
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                ]
            }
        ],

        foods: [
            {
                name: "Bratwurst",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                description: "A traditional German sausage served in many regional styles.",
                location: "Food markets and restaurants across Germany",
                details: "Bratwurst is one of the best-known traditional German foods.",
                gallery: [
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
                ]
            },
            {
                name: "Pretzel",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
                description: "A popular baked snack with a distinctive twisted shape.",
                location: "Bakeries and markets throughout Germany",
                details: "Pretzels are especially associated with Bavarian food culture.",
                gallery: [
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                ]
            }
        ]
    }

};


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", function () {

    console.log(
        "Explore the World website loaded successfully!"
    );

});


/* =========================================================
   SHOW COUNTRY
========================================================= */

function showCountry(countryName) {

    const country =
        countries[countryName];

    const container =
        document.querySelector("#places-container");

    if (!country || !container) {

        return;

    }


    let html = `

        <div class="country-details">

            <div class="country-hero">

                <button
                    class="close-country"
                    onclick="closeCountry()">

                    ✕ Close

                </button>

                <img
                    src="${country.image}"
                    alt="${countryName}">

                <div class="country-hero-content">

                    <span>Explore</span>

                    <h2>${country.title}</h2>

                    <p>
                        ${country.introduction}
                    </p>

                </div>

            </div>


            <div class="country-info">

                <h3>About ${countryName}</h3>

                <p>
                    ${country.information}
                </p>

            </div>

    `;


    /* =====================================================
       FAMOUS PLACES
    ===================================================== */

    html += createSection(
        "⭐ Famous Places",
        country.places,
        countryName,
        "places"
    );


    /* =====================================================
       HISTORICAL PLACES
    ===================================================== */

    html += createSection(
        "🏛️ Historical Places",
        country.historical,
        countryName,
        "historical"
    );


    /* =====================================================
       RESTAURANTS
    ===================================================== */

    html += createSection(
        "🍽️ Famous Restaurants",
        country.restaurants,
        countryName,
        "restaurants"
    );


    /* =====================================================
       FOOD
    ===================================================== */

    html += createSection(
        "🍴 Famous Food",
        country.foods,
        countryName,
        "foods"
    );


    html += `

        </div>

    `;


    container.innerHTML = html;

    container.classList.add("show");

    container.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   CREATE COUNTRY SECTION
========================================================= */

function createSection(
    title,
    items,
    countryName,
    category
) {

    let html = `

        <div class="detail-section">

            <h3>${title}</h3>

            <div class="detail-grid">

    `;


    items.forEach(function (item, index) {

        let extraInfo = "";


        if (item.location) {

            extraInfo += `
                <p>
                    📍 ${item.location}
                </p>
            `;

        }


        if (item.type) {

            extraInfo += `
                <p>
                    🍴 ${item.type}
                </p>
            `;

        }


        html += `

            <div class="detail-card">

                <img
                    src="${item.image}"
                    alt="${item.name}">

                <div class="detail-card-content">

                    <h4>
                        ${item.name}
                    </h4>

                    ${extraInfo}

                    <p>
                        ${item.description}
                    </p>

                    <button
                        class="details-button"
                        onclick="showPlaceDetails(
                            '${countryName}',
                            '${category}',
                            ${index}
                        )">

                        View Details

                    </button>

                </div>

            </div>

        `;

    });


    html += `

            </div>

        </div>

    `;


    return html;

}


/* =========================================================
   SHOW MORE DETAILS POPUP
========================================================= */

function showPlaceDetails(
    countryName,
    category,
    index
) {

    const country =
        countries[countryName];

    if (!country) {
        return;
    }


    const item =
        country[category][index];

    if (!item) {
        return;
    }


    const oldPopup =
        document.querySelector(".popup-details");

    if (oldPopup) {
        oldPopup.remove();
    }


    let locationHTML = "";

    if (item.location) {

        locationHTML += `

            <p>
                <strong>📍 Location:</strong>
                ${item.location}
            </p>

        `;

    }


    if (item.type) {

        locationHTML += `

            <p>
                <strong>🍴 Type:</strong>
                ${item.type}
            </p>

        `;

    }


    let galleryHTML = "";


    if (item.gallery && item.gallery.length) {

        galleryHTML = `

            <div class="popup-gallery">

        `;

        item.gallery.forEach(function (image) {

            galleryHTML += `

                <img
                    src="${image}"
                    alt="${item.name}">

            `;

        });

        galleryHTML += `

            </div>

        `;

    }


    const popup =
        document.createElement("div");

    popup.className =
        "popup-details";


    popup.innerHTML = `

        <div class="popup-box">

            <button
                class="popup-close"
                onclick="closeDetails()">

                ✕

            </button>


            <img
                class="popup-main-image"
                src="${item.image}"
                alt="${item.name}">


            <div class="popup-content">

                <span>
                    Explore More
                </span>

                <h2>
                    ${item.name}
                </h2>

                ${locationHTML}

                <p>
                    ${item.description}
                </p>

                <p>
                    ${item.details}
                </p>

                ${galleryHTML}

            </div>

        </div>

    `;


    document.body.appendChild(popup);


    popup.addEventListener(
        "click",
        function (event) {

            if (event.target === popup) {

                closeDetails();

            }

        }
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE POPUP
========================================================= */

function closeDetails() {

    const popup =
        document.querySelector(".popup-details");

    if (popup) {

        popup.remove();

    }

    document.body.style.overflow =
        "";

}


/* =========================================================
   CLOSE COUNTRY
========================================================= */

function closeCountry() {

    const container =
        document.querySelector("#places-container");

    if (!container) {
        return;
    }


    container.classList.remove("show");

    container.innerHTML = "";

}


/* =========================================================
   COUNTRY SEARCH
========================================================= */

const countrySearch =
    document.querySelector("#countrySearch");


if (countrySearch) {

    countrySearch.addEventListener(
        "input",
        function () {

            const searchText =
                countrySearch.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".country-card"
                );

            let visibleCards = 0;


            cards.forEach(function (card) {

                const countryName =
                    card.dataset.country
                        .toLowerCase();

                if (
                    countryName.includes(
                        searchText
                    )
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                    visibleCards++;

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });


            const noResults =
                document.querySelector(
                    ".no-results"
                );


            if (
                noResults &&
                visibleCards === 0
            ) {

                noResults.classList.add(
                    "show"
                );

            } else if (noResults) {

                noResults.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =========================================================
   DESTINATION BUTTONS
========================================================= */

const destinationButtons =
    document.querySelectorAll(
        "#destinations .card-button"
    );


destinationButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const card =
                button.closest(".card");

            const name =
                card.querySelector("h3")
                    .textContent;

            alert(
                "You selected " +
                name +
                " 🌍"
            );

        }
    );

});


/* =========================================================
   HOTEL BUTTON
========================================================= */

const hotelButton =
    document.querySelector(
        ".hotel-box .hero-button"
    );


if (hotelButton) {

    hotelButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Hotel booking information will be added soon! 🏨"
            );

        }
    );

}


/* =========================================================
   ACTIVITIES
========================================================= */

const activities =
    document.querySelectorAll(
        ".activity"
    );


activities.forEach(function (activity) {

    activity.addEventListener(
        "click",
        function () {

            const activityName =
                activity.querySelector("h3")
                    .textContent;

            alert(
                "Great choice! You selected " +
                activityName +
                " 🌟"
            );

        }
    );

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector(
        "#contact form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you for contacting Explore the World! 🌍✈️"
            );

            contactForm.reset();

        }
    );

}


/* =========================================================
   NAVIGATION LOG
========================================================= */

const navigationLinks =
    document.querySelectorAll("nav a");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            console.log(
                "You selected: " +
                link.textContent
            );

        }
    );

});


/* =========================================================
   FOOTER YEAR
========================================================= */

const footerParagraphs =
    document.querySelectorAll(
        "footer p"
    );


if (footerParagraphs.length > 1) {

    footerParagraphs[
        footerParagraphs.length - 1
    ].textContent =
        "© " +
        new Date().getFullYear() +
        " Explore the World. All Rights Reserved.";

}


/* =========================================================
   ESC KEY CLOSES POPUP
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeDetails();

        }

    }
);