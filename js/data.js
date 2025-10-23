// Données du voyage avec géocodage automatique et distinction points certains/options
const voyageData = {
    jours: [
        {
            date: "2026-02-20",
            lieu: "Vol Paris → Istanbul",
            pays: "International",
            location: "Aéroport Paris CDG, France",
            hotel: "Nuit à bord",
            activites: [
                { time: "18:50", title: "Départ de Paris CDG", description: "Vol TK1828 Paris → Istanbul", location: "Aéroport Paris CDG, France" }
            ],
            pointsInteret: []
        },
        {
            date: "2026-02-21",
            lieu: "Tokyo",
            pays: "Japon",
            location: "Tokyo, Japon",
            hotel: "The B Ginza",
            activites: [
                { time: "00:30", title: "Arrivée Istanbul", description: "Escale à l'aéroport d'Istanbul", location: "Aéroport d'Istanbul, Turquie" },
                { time: "02:30", title: "Décollage d'Istanbul", description: "Vol TK198 Istanbul → Tokyo", location: "Aéroport d'Istanbul, Turquie" },
                { time: "19:45", title: "Arrivée à Tokyo Haneda", description: "Atterrissage à l'aéroport de Tokyo Haneda", location: "Aéroport de Tokyo Haneda, Japon" }
            ],
            pointsInteret: [
                { nom: "The B Ginza", description: "Hôtel situé dans le quartier chic de Ginza", location: "The B Ginza, Ginza, Tokyo", type: "hotel", planned: true },
                { nom: "Ginza", description: "Quartier commerçant luxueux de Tokyo", location: "Ginza, Tokyo, Japon", type: "shopping", planned: true },
                { nom: "Tsukiji Outer Market", description: "Marché aux poissons et cuisine de rue", location: "Tsukiji Outer Market, Tokyo, Japon", type: "food", planned: false },
                { nom: "Hamarikyu Gardens", description: "Jardins japonais traditionnels avec maison de thé", location: "Hamarikyu Gardens, Tokyo, Japon", type: "nature", planned: false }
            ]
        },
        {
            date: "2026-02-22",
            lieu: "Tokyo",
            pays: "Japon",
            location: "Tokyo, Japon",
            hotel: "The B Ginza",
            activites: [
                { time: "09:00", title: "Temple Senso-ji à Asakusa", description: "Visite du plus ancien temple de Tokyo", location: "Temple Senso-ji, Asakusa, Tokyo" },
                { time: "13:30", title: "Parc Ueno et ses musées", description: "Découverte du parc et des musées", location: "Parc Ueno, Tokyo, Japon" },
                { time: "18:00", title: "Découverte du quartier d'Ueno", description: "Exploration du quartier et dîner", location: "Ueno, Tokyo, Japon" }
            ],
            pointsInteret: [
                { nom: "Temple Senso-ji", description: "Plus ancien temple bouddhiste de Tokyo", location: "Temple Senso-ji, Asakusa, Tokyo", type: "culture", planned: true },
                { nom: "Nakamise-dori", description: "Rue commerçante traditionnelle menant au temple", location: "Nakamise-dori, Asakusa, Tokyo", type: "shopping", planned: true },
                { nom: "Parc d'Ueno", description: "Grand parc avec musées, zoo et temples", location: "Parc Ueno, Tokyo, Japon", type: "nature", planned: true },
                { nom: "Musée National de Tokyo", description: "Plus ancien et plus grand musée du Japon", location: "Musée National de Tokyo, Parc Ueno, Tokyo", type: "culture", planned: false }
            ]
        },
        {
            date: "2026-02-23",
            lieu: "Tokyo",
            pays: "Japon",
            location: "Tokyo, Japon",
            hotel: "The B Ginza",
            activites: [
                { time: "09:30", title: "Jardins du Palais Impérial", description: "Visite des jardins extérieurs du Palais", location: "Palais Impérial de Tokyo, Japon" },
                { time: "14:00", title: "TeamLab Planets", description: "Expérience artistique numérique immersive", location: "TeamLab Planets, Tokyo, Japon" },
                { time: "18:30", title: "Odaiba et vue sur la baie", description: "Découverte d'Odaiba et vue sur la baie de Tokyo", location: "Statue of Liberty - Odaiba, Tokyo, Japon" }
            ],
            pointsInteret: [
                { nom: "Palais Impérial", description: "Résidence principale de l'Empereur du Japon", location: "Palais Impérial de Tokyo, Japon", type: "culture", planned: true },
                { nom: "TeamLab Planets", description: "Expérience artistique numérique immersive", location: "TeamLab Planets, Tokyo, Japon", type: "art", planned: true },
                { nom: "Odaiba", description: "Île artificielle avec centres commerciaux et divertissements", location: "Odaiba, Tokyo, Japon", type: "entertainment", planned: true },
                { nom: "Rainbow Bridge", description: "Pont illuminé offrant une vue magnifique sur Tokyo", location: "Rainbow Bridge, Tokyo, Japon", type: "viewpoint", planned: false }
            ]
        },
        {
            date: "2026-02-24",
            lieu: "Tokyo",
            pays: "Japon",
            location: "Tokyo, Japon",
            hotel: "The B Ginza",
            activites: [
                { time: "09:30", title: "Sanctuaire Hie-jinja", description: "Visite du sanctuaire aux torii rouges", location: "Sanctuaire Hie-jinja, Tokyo, Japon" },
                { time: "13:00", title: "Sunshine 60 Observatory", description: "Vue panoramique depuis l'observatoire", location: "Sunshine 60 Observatory, Ikebukuro, Tokyo" },
                { time: "18:00", title: "Quartier de Shinjuku et ses néons", description: "Exploration du quartier et ses illuminations", location: "Shinjuku, Tokyo, Japon" }
            ],
            pointsInteret: [
                { nom: "Sanctuaire Hie-jinja", description: "Sanctuaire shintoïste connu pour ses torii rouges", location: "Sanctuaire Hie-jinja, Tokyo, Japon", type: "culture", planned: true },
                { nom: "Ikebukuro", description: "Quartier commerçant et de divertissement", location: "Ikebukuro, Tokyo, Japon", type: "shopping", planned: true },
                { nom: "Sunshine 60 Observatory", description: "Observatoire offrant une vue panoramique sur Tokyo", location: "Sunshine 60 Observatory, Ikebukuro, Tokyo", type: "viewpoint", planned: true },
                { nom: "Shinjuku", description: "Quartier d'affaires et de divertissement nocturne", location: "Shinjuku, Tokyo, Japon", type: "entertainment", planned: true }
            ]
        },
        {
            date: "2026-02-25",
            lieu: "Furano",
            pays: "Japon",
            location: "Furano, Hokkaido, Japon",
            hotel: "Winery Hotel and Condominium Furano",
            activites: [
                { time: "09:30", title: "Enregistrement vol domestique", description: "Formalités d'enregistrement", location: "Aéroport de Tokyo Haneda, Japon" },
                { time: "11:10", title: "Vol Tokyo → Asahikawa", description: "Décollage pour Asahikawa", location: "Aéroport de Tokyo Haneda, Japon" },
                { time: "12:50", title: "Arrivée Asahikawa", description: "Atterrissage à l'aéroport d'Asahikawa", location: "Aéroport d'Asahikawa, Japon" },
                { time: "13:30", title: "Récupération bagages et transfert", description: "Récupération des bagages et trajet vers Furano", location: "Aéroport d'Asahikawa, Japon" },
                { time: "16:30", title: "Location équipement ski", description: "Location du matériel de ski", location: "Furano, Hokkaido, Japon" }
            ],
            pointsInteret: [
                { nom: "Winery Hotel and Condominium Furano", description: "Hôtel avec vue sur les vignobles et montagnes", location: "Winery Hotel and Condominium Furano, Hokkaido", type: "hotel", planned: true },
                { nom: "Station de ski Furano", description: "Domaine skiable réputé d'Hokkaido", location: "Station de ski Furano, Hokkaido, Japon", type: "ski", planned: true },
                { nom: "Vignobles de Furano", description: "Vignobles produisant le vin local", location: "Vignobles de Furano, Hokkaido, Japon", type: "food", planned: false }
            ]
        },
        {
            date: "2026-02-26",
            lieu: "Furano",
            pays: "Japon",
            location: "Furano, Hokkaido, Japon",
            hotel: "Winery Hotel and Condominium Furano",
            activites: [
                { time: "09:00", title: "Ski à Furano Resort", description: "Session de ski sur les pistes", location: "Station de ski Furano, Hokkaido, Japon" },
                { time: "17:30", title: "Détente onsen", description: "Détente dans les sources chaudes", location: "Winery Hotel and Condominium Furano, Hokkaido" }
            ],
            pointsInteret: [
                { nom: "Station de ski Furano", description: "Domaine skiable avec pistes pour tous niveaux", location: "Station de ski Furano, Hokkaido, Japon", type: "ski", planned: true },
                { nom: "Onsen de Furano", description: "Sources chaudes naturelles pour la détente", location: "Winery Hotel and Condominium Furano, Hokkaido", type: "wellness", planned: true }
            ]
        },
        {
            date: "2026-02-27",
            lieu: "Furano",
            pays: "Japon",
            location: "Furano, Hokkaido, Japon",
            hotel: "Winery Hotel and Condominium Furano",
            activites: [
                { time: "09:00", title: "Ski à Furano Resort", description: "Session de ski sur les pistes", location: "Station de ski Furano, Hokkaido, Japon" },
                { time: "17:30", title: "Détente onsen", description: "Détente dans les sources chaudes", location: "Winery Hotel and Condominium Furano, Hokkaido" }
            ],
            pointsInteret: [
                { nom: "Zones hors-piste Furano", description: "Secteurs pour skieurs expérimentés avec guide", location: "Station de ski Furano, Hokkaido, Japon", type: "ski", planned: true },
                { nom: "Paysages montagneux", description: "Vues panoramiques sur les montagnes d'Hokkaido", location: "Furano, Hokkaido, Japon", type: "nature", planned: false }
            ]
        },
        {
            date: "2026-02-28",
            lieu: "Furano",
            pays: "Japon",
            location: "Furano, Hokkaido, Japon",
            hotel: "Winery Hotel and Condominium Furano",
            activites: [
                { time: "09:00", title: "Ski à Furano Resort", description: "Session de ski sur les pistes", location: "Station de ski Furano, Hokkaido, Japon" },
                { time: "17:30", title: "Détente onsen", description: "Détente dans les sources chaudes", location: "Winery Hotel and Condominium Furano, Hokkaido" }
            ],
            pointsInteret: [
                { nom: "Fromagerie Furano", description: "Fromagerie produisant des fromages locaux", location: "Fromagerie Furano, Hokkaido, Japon", type: "food", planned: true },
                { nom: "Furano Wine Factory", description: "Domaine viticole et cave de dégustation", location: "Furano Wine Factory, Hokkaido, Japon", type: "food", planned: true },
                { nom: "Paysages ruraux de Furano", description: "Champs et collines de la région", location: "Furano, Hokkaido, Japon", type: "nature", planned: false }
            ]
        },
        {
            date: "2026-03-01",
            lieu: "Furano",
            pays: "Japon",
            location: "Furano, Hokkaido, Japon",
            hotel: "Winery Hotel and Condominium Furano",
            activites: [
                { time: "09:00", title: "Ski à Furano Resort", description: "Session de ski sur les pistes", location: "Station de ski Furano, Hokkaido, Japon" },
                { time: "17:30", title: "Détente onsen", description: "Détente dans les sources chaudes", location: "Winery Hotel and Condominium Furano, Hokkaido" }
            ],
            pointsInteret: [
                { nom: "Station de ski Furano", description: "Dernières descentes sur les pistes", location: "Station de ski Furano, Hokkaido, Japon", type: "ski", planned: true },
                { nom: "Centre-ville Furano", description: "Dernières emplettes et découvertes", location: "Furano, Hokkaido, Japon", type: "shopping", planned: false }
            ]
        },
        {
            date: "2026-03-02",
            lieu: "Kyoto",
            pays: "Japon",
            location: "Kyoto, Japon",
            hotel: "Hôtel à Kyoto (à déterminer)",
            activites: [
                { time: "08:30", title: "Transfert aéroport", description: "Trajet vers l'aéroport de Shin Chitose", location: "Aéroport de Shin Chitose, Hokkaido" },
                { time: "11:30", title: "Enregistrement vol", description: "Formalités d'enregistrement", location: "Aéroport de Shin Chitose, Hokkaido" },
                { time: "14:00", title: "Vol Shin Chitose → Osaka Itami", description: "Décollage pour Osaka", location: "Aéroport de Shin Chitose, Hokkaido" },
                { time: "16:05", title: "Arrivée Osaka", description: "Atterrissage à l'aéroport d'Osaka Itami", location: "Aéroport d'Osaka Itami, Japon" },
                { time: "16:45", title: "Récupération bagages", description: "Récupération des bagages", location: "Aéroport d'Osaka Itami, Japon" },
                { time: "17:15", title: "Transfert vers Kyoto", description: "Trajet en train ou bus vers Kyoto", location: "Aéroport d'Osaka Itami, Japon" },
                { time: "18:30", title: "Arrivée Kyoto et installation", description: "Arrivée à Kyoto et check-in à l'hôtel", location: "Kyoto, Japon" }
            ],
            pointsInteret: [
                { nom: "Gare de Kyoto", description: "Gare moderne avec centre commercial et observatoire", location: "Gare de Kyoto, Japon", type: "transport", planned: true },
                { nom: "Pontocho", description: "Allée traditionnelle avec restaurants et bars", location: "Pontocho, Kyoto, Japon", type: "food", planned: false }
            ]
        },
        {
            date: "2026-03-03",
            lieu: "Kyoto",
            pays: "Japon",
            location: "Kyoto, Japon",
            hotel: "Hôtel à Kyoto (à déterminer)",
            activites: [
                { time: "09:00", title: "Kinkaku-ji (Pavillon d'Or)", description: "Visite du célèbre temple recouvert d'or", location: "Kinkaku-ji, Kyoto, Japon" },
                { time: "11:30", title: "Marché Nishiki", description: "Découverte du marché alimentaire traditionnel", location: "Marché Nishiki, Kyoto, Japon" },
                { time: "12:30", title: "Déjeuner au marché", description: "Repas avec spécialités locales", location: "Marché Nishiki, Kyoto, Japon" },
                { time: "14:00", title: "Sanctuaire Heian", description: "Visite du sanctuaire et ses jardins", location: "Sanctuaire Heian, Kyoto, Japon" }
            ],
            pointsInteret: [
                { nom: "Kinkaku-ji (Pavillon d'Or)", description: "Temple bouddhiste recouvert de feuilles d'or", location: "Kinkaku-ji, Kyoto, Japon", type: "culture", planned: true },
                { nom: "Marché Nishiki", description: "Marché couvert avec spécialités locales", location: "Marché Nishiki, Kyoto, Japon", type: "food", planned: true },
                { nom: "Sanctuaire Heian", description: "Sanctuaire shintoïste avec jardins paisibles", location: "Sanctuaire Heian, Kyoto, Japon", type: "culture", planned: true },
                { nom: "Gion", description: "Quartier des geishas et maisons de thé", location: "Gion, Kyoto, Japon", type: "culture", planned: false }
            ]
        },
        {
            date: "2026-03-04",
            lieu: "Kyoto",
            pays: "Japon",
            location: "Kyoto, Japon",
            hotel: "Hôtel à Kyoto (à déterminer)",
            activites: [
                { time: "07:30", title: "Fushimi Inari (visite tôt)", description: "Visite du sanctuaire aux milliers de torii", location: "Fushimi Inari Taisha, Kyoto, Japon" },
                { time: "10:00", title: "Chemin du Philosophe", description: "Promenade le long du canal pittoresque", location: "Chemin du Philosophe, Kyoto, Japon" },
                { time: "12:00", title: "Déjeuner", description: "Repas le long du canal", location: "Chemin du Philosophe, Kyoto, Japon" },
                { time: "18:00", title: "Quartier de Pontocho", description: "Exploration du quartier traditionnel", location: "Pontocho, Kyoto, Japon" }
            ],
            pointsInteret: [
                { nom: "Fushimi Inari Taisha", description: "Sanctuaire célèbre pour ses milliers de torii rouges", location: "Fushimi Inari Taisha, Kyoto, Japon", type: "culture", planned: true },
                { nom: "Chemin du Philosophe", description: "Sentier pédestre le long d'un canal pittoresque", location: "Chemin du Philosophe, Kyoto, Japon", type: "nature", planned: true },
                { nom: "Temple Ginkaku-ji", description: "Temple du Pavillon d'Argent et ses jardins", location: "Ginkaku-ji, Kyoto, Japon", type: "culture", planned: false },
                { nom: "Pontocho", description: "Allée traditionnelle avec restaurants", location: "Pontocho, Kyoto, Japon", type: "food", planned: false }
            ]
        },
        {
            date: "2026-03-05",
            lieu: "Nara",
            pays: "Japon",
            location: "Nara, Japon",
            hotel: "Hôtel à Kyoto (à déterminer)",
            activites: [
                { time: "08:30", title: "Train pour Nara", description: "Trajet en train vers Nara", location: "Gare de Kyoto, Japon" },
                { time: "09:30", title: "Arrivée Nara", description: "Arrivée à Nara et début des visites", location: "Nara, Japon" },
                { time: "09:45", title: "Todai-ji et grand Bouddha", description: "Visite du temple et du grand Bouddha", location: "Todai-ji, Nara, Japon" },
                { time: "11:30", title: "Parc de Nara et cerfs", description: "Rencontre avec les cerfs sacrés en liberté", location: "Parc de Nara, Japon" },
                { time: "13:30", title: "Quartier traditionnel Nara-machi", description: "Exploration du quartier traditionnel", location: "Nara-machi, Nara, Japon" }
            ],
            pointsInteret: [
                { nom: "Todai-ji", description: "Temple abritant le plus grand Bouddha en bronze du monde", location: "Todai-ji, Nara, Japon", type: "culture", planned: true },
                { nom: "Parc de Nara", description: "Parc avec centaines de cerfs sacrés en liberté", location: "Parc de Nara, Japon", type: "nature", planned: true },
                { nom: "Nara-machi", description: "Quartier traditionnel avec maisons anciennes", location: "Nara-machi, Nara, Japon", type: "culture", planned: true },
                { nom: "Kasuga Taisha", description: "Sanctuaire aux milliers de lanternes de pierre", location: "Kasuga Taisha, Nara, Japon", type: "culture", planned: false }
            ]
        },
        {
            date: "2026-03-06",
            lieu: "Arashiyama & Vol",
            pays: "Japon",
            location: "Arashiyama, Kyoto, Japon",
            hotel: "Vol Osaka → Manille",
            activites: [
                { time: "09:00", title: "Arashiyama (forêt bambous)", description: "Visite de la célèbre forêt de bambous", location: "Forêt de bambous d'Arashiyama, Kyoto" },
                { time: "13:30", title: "Transfert aéroport Kansai", description: "Trajet vers l'aéroport d'Osaka", location: "Aéroport du Kansai, Osaka, Japon" },
                { time: "16:30", title: "Enregistrement vol international", description: "Formalités d'enregistrement", location: "Aéroport du Kansai, Osaka, Japon" },
                { time: "19:35", title: "Vol Osaka → Manille", description: "Décollage pour Manille", location: "Aéroport du Kansai, Osaka, Japon" }
            ],
            pointsInteret: [
                { nom: "Forêt de bambous d'Arashiyama", description: "Allée célèbre de bambous géants", location: "Forêt de bambous d'Arashiyama, Kyoto", type: "nature", planned: true },
                { nom: "Temple Tenryu-ji", description: "Temple classé au patrimoine mondial de l'UNESCO", location: "Temple Tenryu-ji, Arashiyama, Kyoto", type: "culture", planned: false },
                { nom: "Pont Togetsukyo", description: "Pont emblématique d'Arashiyama", location: "Pont Togetsukyo, Arashiyama, Kyoto", type: "viewpoint", planned: false }
            ]
        },
        {
            date: "2026-03-07",
            lieu: "Bohol",
            pays: "Philippines",
            location: "Bohol, Philippines",
            hotel: "Fox & The Firefly",
            activites: [
                { time: "23:15", title: "Arrivée Manille", description: "Arrivée à l'aéroport de Manille", location: "Aéroport de Manille, Philippines" },
                { time: "05:20", title: "Vol Manille → Panglao", description: "Décollage pour Panglao", location: "Aéroport de Manille, Philippines" },
                { time: "06:55", title: "Arrivée Panglao", description: "Atterrissage à l'aéroport de Panglao", location: "Aéroport de Panglao, Bohol, Philippines" },
                { time: "08:00", title: "Repos", description: "Temps de repos après le voyage", location: "Fox & The Firefly, Bohol, Philippines" },
                { time: "14:30", title: "Transfert Fox & The Firefly", description: "Trajet vers le lodge", location: "Fox & The Firefly, Bohol, Philippines" },
                { time: "20:00", title: "Observation lucioles", description: "Observation des lucioles le long de la rivière", location: "Fox & The Firefly, Bohol, Philippines" }
            ],
            pointsInteret: [
                { nom: "Fox & The Firefly", description: "Lodge écologique avec observation de lucioles", location: "Fox & The Firefly, Bohol, Philippines", type: "hotel", planned: true },
                { nom: "Rivière Loboc", description: "Rivière où se trouve le lodge", location: "Rivière Loboc, Bohol, Philippines", type: "nature", planned: false }
            ]
        },
        {
            date: "2026-03-08",
            lieu: "Bohol",
            pays: "Philippines",
            location: "Bohol, Philippines",
            hotel: "Fox & The Firefly",
            activites: [
                { time: "09:00", title: "Collines de Chocolat", description: "Visite des célèbres formations géologiques", location: "Collines de Chocolat, Bohol, Philippines" },
                { time: "10:30", title: "Sanctuaire des Tarsiers", description: "Rencontre avec les plus petits primates du monde", location: "Sanctuaire des Tarsiers, Bohol, Philippines" },
                { time: "12:30", title: "Croisière rivière Loboc", description: "Croisière avec déjeuner sur la rivière", location: "Rivière Loboc, Bohol, Philippines" }
            ],
            pointsInteret: [
                { nom: "Collines de Chocolat", description: "Formations géologiques uniques en forme de cônes", location: "Collines de Chocolat, Bohol, Philippines", type: "nature", planned: true },
                { nom: "Sanctuaire des Tarsiers", description: "Refuge pour les plus petits primates du monde", location: "Sanctuaire des Tarsiers, Bohol, Philippines", type: "nature", planned: true },
                { nom: "Croisière sur la rivière Loboc", description: "Croisière pittoresque avec déjeuner buffet", location: "Rivière Loboc, Bohol, Philippines", type: "food", planned: true }
            ]
        },
        {
            date: "2026-03-09",
            lieu: "Bohol",
            pays: "Philippines",
            location: "Bohol, Philippines",
            hotel: "Amorita Resort",
            activites: [
                { time: "10:00", title: "Transfert vers Amorita Resort", description: "Trajet vers le resort de Panglao", location: "Bohol, Philippines" },
                { time: "11:00", title: "Arrivée Amorita Resort", description: "Arrivée au resort de luxe", location: "Amorita Resort, Panglao, Bohol, Philippines" },
                { time: "14:00", title: "Piscine/plage", description: "Détente à la piscine ou sur la plage", location: "Amorita Resort, Panglao, Bohol, Philippines" },
                { time: "18:00", title: "Coucher de soleil", description: "Observation du coucher de soleil", location: "Amorita Resort, Panglao, Bohol, Philippines" }
            ],
            pointsInteret: [
                { nom: "Amorita Resort", description: "Resort de luxe sur les falaises de Panglao", location: "Amorita Resort, Panglao, Bohol, Philippines", type: "hotel", planned: true },
                { nom: "Plage d'Alona", description: "Plage de sable blanc célèbre de Panglao", location: "Plage d'Alona, Panglao, Bohol, Philippines", type: "beach", planned: false }
            ]
        },
        {
            date: "2026-03-10",
            lieu: "Bohol",
            pays: "Philippines",
            location: "Bohol, Philippines",
            hotel: "Amorita Resort",
            activites: [
                { time: "08:00", title: "Départ pour plongée PADI", description: "Transfert vers le centre de plongée", location: "Amorita Resort, Panglao, Bohol, Philippines" },
                { time: "15:00", title: "Détente", description: "Temps libre pour se reposer", location: "Amorita Resort, Panglao, Bohol, Philippines" }
            ],
            pointsInteret: [
                { nom: "Île de Balicasag", description: "Île réputée pour ses spots de plongée exceptionnels", location: "Île de Balicasag, Bohol, Philippines", type: "diving", planned: true },
                { nom: "Drop-off de Balicasag", description: "Mur de corail avec tombant spectaculaire", location: "Île de Balicasag, Bohol, Philippines", type: "diving", planned: true },
                { nom: "Jardin corallien", description: "Zone corallienne riche en vie marine", location: "Île de Balicasag, Bohol, Philippines", type: "diving", planned: true }
            ]
        },
        {
            date: "2026-03-11",
            lieu: "Bohol",
            pays: "Philippines",
            location: "Bohol, Philippines",
            hotel: "Amorita Resort",
            activites: [
                { time: "10:00", title: "Snorkeling avec dauphins", description: "Excursion matinale pour voir les dauphins", location: "Plage d'Alona, Panglao, Bohol, Philippines" },
                { time: "15:00", title: "Détente spa et plage", description: "Journée détente au resort", location: "Amorita Resort, Panglao, Bohol, Philippines" }
            ],
            pointsInteret: [
                { nom: "Snorkeling avec dauphins", description: "Excursion pour nager avec les dauphins", location: "Plage d'Alona, Panglao, Bohol, Philippines", type: "diving", planned: false },
                { nom: "Amorita Resort Spa", description: "Spa proposant des soins traditionnels", location: "Amorita Resort, Panglao, Bohol, Philippines", type: "wellness", planned: false },
                { nom: "Plage d'Alona", description: "Plage pour la détente et les activités nautiques", location: "Plage d'Alona, Panglao, Bohol, Philippines", type: "beach", planned: false }
            ]
        },
        {
            date: "2026-03-12",
            lieu: "Bohol",
            pays: "Philippines",
            location: "Bohol, Philippines",
            hotel: "Amorita Resort",
            activites: [
                { time: "09:00", title: "Activités au choix au resort", description: "Dernières activités selon envies", location: "Amorita Resort, Panglao, Bohol, Philippines" },
                { time: "18:00", title: "Dîner d'adieu", description: "Dernier repas aux Philippines", location: "Amorita Resort, Panglao, Bohol, Philippines" }
            ],
            pointsInteret: [
                { nom: "Amorita Resort", description: "Dernière journée de détente au resort", location: "Amorita Resort, Panglao, Bohol, Philippines", type: "hotel", planned: true },
                { nom: "Plage d'Alona", description: "Derniers moments sur la plage", location: "Plage d'Alona, Panglao, Bohol, Philippines", type: "beach", planned: false }
            ]
        },
        {
            date: "2026-03-13",
            lieu: "Vol retour",
            pays: "International",
            location: "Aéroport de Tagbilaran, Philippines",
            hotel: "Vol",
            activites: [
                { time: "10:00", title: "Enregistrement vol", description: "Formalités d'enregistrement", location: "Aéroport de Tagbilaran, Philippines" },
                { time: "12:00", title: "Vol Tagbilaran → Manille", description: "Décollage pour Manille", location: "Aéroport de Tagbilaran, Philippines" },
                { time: "13:30", title: "Arrivée Manille", description: "Arrivée à Manille et correspondance", location: "Aéroport de Manille, Philippines" },
                { time: "16:00", title: "Vol Manille → Paris", description: "Décollage pour le vol long-courrier retour", location: "Aéroport de Manille, Philippines" },
                { time: "", title: "Nuit à bord", description: "Nuit dans l'avion durant le vol retour", location: "En vol" }
            ],
            pointsInteret: [
                { nom: "Aéroport de Tagbilaran", description: "Départ des Philippines", type: "airport", location: "Aéroport de Tagbilaran, Philippines", planned: true },
                { nom: "Aéroport de Manille", description: "Correspondance pour le vol international", type: "airport", location: "Aéroport de Manille, Philippines", planned: true }
            ]
        }
    ],
    hotels: [
        {
            nom: "The B Ginza",
            ville: "Tokyo",
            pays: "Japon",
            typeChambre: "Chambre Double en Angle",
            services: ["Wi-Fi gratuit", "Room service", "Concierge", "Service de nettoyage quotidien", "Climatisation"],
            equipements: ["Salle de sport", "Business center", "Restaurant", "Bar", "Salle de réunion"],
            checkIn: "15:00",
            checkOut: "11:00",
            location: "The B Ginza, Ginza, Tokyo, Japon"
        },
        {
            nom: "Winery Hotel and Condominium Furano",
            ville: "Furano",
            pays: "Japon",
            typeChambre: "Chambre Twin Standard Hollywood",
            services: ["Petit-déjeuner inclus", "Service de ski", "Location d'équipement", "Service de navette", "Onsen privé"],
            equipements: ["Cuisinette", "Lave-linge", "Chauffage au sol", "Parking gratuit", "Restaurant", "Spa"],
            checkIn: "14:00",
            checkOut: "10:00",
            location: "Winery Hotel and Condominium Furano, Hokkaido, Japon"
        },
        {
            nom: "Hôtel à Kyoto (à déterminer)",
            ville: "Kyoto",
            pays: "Japon",
            typeChambre: "À déterminer",
            services: ["Wi-Fi gratuit", "Service de nettoyage", "Climatisation", "À déterminer"],
            equipements: ["À déterminer"],
            checkIn: "15:00",
            checkOut: "11:00",
            location: "Kyoto, Japon"
        },
        {
            nom: "Fox & The Firefly",
            ville: "Bohol",
            pays: "Philippines",
            typeChambre: "Chambre écologique",
            services: ["Petit-déjeuner inclus", "Observation lucioles", "Guide local", "Navette"],
            equipements: ["Terrasse", "Vue sur rivière", "Restaurant", "Espace détente"],
            checkIn: "14:00",
            checkOut: "12:00",
            location: "Fox & The Firefly, Bohol, Philippines"
        },
        {
            nom: "Amorita Resort",
            ville: "Bohol",
            pays: "Philippines",
            typeChambre: "Chambre vue mer",
            services: ["Petit-déjeuner inclus", "Service de plage", "Navette Alona Beach", "Concierge", "Room service"],
            equipements: ["Piscine", "Spa", "Restaurant", "Bar", "Plage privée", "Centre de plongée"],
            checkIn: "14:00",
            checkOut: "12:00",
            location: "Amorita Resort, Panglao, Bohol, Philippines"
        }
    ]
};

// Données pour le convertisseur de devises
const currencyData = {
    rates: {
        EUR_JPY: 160.50,
        EUR_PHP: 60.25
    },
    lastUpdate: new Date().toLocaleDateString('fr-FR')
};
