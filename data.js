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
        // ... (tous les autres jours comme dans votre code original)
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
        // ... (tous les autres hôtels comme dans votre code original)
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
