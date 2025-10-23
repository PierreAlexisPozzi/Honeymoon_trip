// Variables globales
let currentDayIndex = -1;
const geocodingCache = {};

// Fonction pour trouver le jour le plus proche de la date actuelle
function findClosestDayIndex() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let closestIndex = 0;
    let smallestDiff = Infinity;
    
    voyageData.jours.forEach((jour, index) => {
        const jourDate = new Date(jour.date);
        jourDate.setHours(0, 0, 0, 0);
        
        const diff = jourDate.getTime() - today.getTime();
        
        if (diff >= 0 && diff < smallestDiff) {
            smallestDiff = diff;
            closestIndex = index;
        }
    });
    
    if (smallestDiff === Infinity) {
        closestIndex = voyageData.jours.length - 1;
    }
    
    return closestIndex;
}

// Fonction de géocodage
async function geocodeLocation(locationName) {
    if (geocodingCache[locationName]) {
        return geocodingCache[locationName];
    }
    
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}&limit=1`
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
            const coords = {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
            geocodingCache[locationName] = coords;
            return coords;
        }
        return null;
    } catch (error) {
        console.warn('Géocodage échoué pour:', locationName);
        return null;
    }
}

// Fonction pour formater la date en français
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
}

// Fonction pour formater l'heure
function formatTime(timeStr) {
    return timeStr;
}

// Fonction pour générer le lien Google Maps
function getMapsLink(location) {
    if (!location) return "#";
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

// Fonction pour générer le lien d'itinéraire Google Maps
function getDirectionsLink(location) {
    if (!location) return "#";
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`;
}

// Compte à rebours
function updateCountdown() {
    const targetDate = new Date('2026-02-20T18:50:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    } else {
        document.querySelector('.countdown-title').textContent = 'Le voyage a commencé !';
        document.querySelector('.countdown-timer').style.display = 'none';
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    // Démarrer le compte à rebours
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // Gérer le bouton d'entrée
    document.getElementById('enter-site').addEventListener('click', function() {
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('content-pages').style.display = 'block';
        initializeApp();
    });

    // Gérer le bouton de retour à l'accueil
    document.getElementById('back-home').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('content-pages').style.display = 'none';
        document.getElementById('home-page').style.display = 'flex';
        closeMenu();
    });

    // Gérer le menu
    document.getElementById('menu-toggle').addEventListener('click', openMenu);
    document.getElementById('close-menu').addEventListener('click', closeMenu);

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('nav-menu');
        const menuToggle = document.getElementById('menu-toggle');
        
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
});

// Initialiser l'application après l'entrée
function initializeApp() {
    // Charger la sélection du jour sauvegardée ou le jour le plus proche
    loadDaySelection();

    // Gérer la navigation entre les pages
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageUrl = this.getAttribute('href');
            loadPage(pageUrl);
            closeMenu();
        });
    });

    // Charger la page planning par défaut
    loadPage('pages/planning.html');
}

// Fonction pour charger une page
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('page-content').innerHTML = html;
            initializePageContent(url);
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la page:', error);
            document.getElementById('page-content').innerHTML = '<p>Erreur lors du chargement de la page.</p>';
        });
}

// Fonction pour initialiser le contenu de la page
function initializePageContent(url) {
    if (url.includes('planning.html')) {
        initializePlanningPage();
    } else if (url.includes('points-interet.html')) {
        initializePointsInteretPage();
    } else if (url.includes('carte.html')) {
        initializeCartePage();
    } else if (url.includes('convertisseur.html')) {
        initializeConvertisseurPage();
    } else if (url.includes('hotels.html')) {
        initializeHotelsPage();
    }
}

// Fonctions d'initialisation des pages spécifiques
function initializePlanningPage() {
    // Générer les options du menu déroulant des jours
    const dayDropdown = document.getElementById('day-dropdown');
    if (dayDropdown) {
        dayDropdown.innerHTML = '<option value="">Sélectionnez un jour...</option>';
        voyageData.jours.forEach((jour, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${formatDate(jour.date)} - ${jour.lieu}`;
            dayDropdown.appendChild(option);
        });

        // Gérer le changement de sélection
        dayDropdown.addEventListener('change', function() {
            const index = parseInt(this.value);
            if (!isNaN(index)) {
                saveDaySelection(index);
                showDayDetails(index);
            } else {
                document.getElementById('day-details').innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #666;">
                        <p>Sélectionnez un jour dans le menu déroulant pour voir les détails</p>
                    </div>
                `;
            }
        });

        // Gérer les flèches de navigation
        document.getElementById('prev-day').addEventListener('click', function() {
            if (currentDayIndex > 0) {
                navigateToDay(currentDayIndex - 1);
            }
        });

        document.getElementById('next-day').addEventListener('click', function() {
            if (currentDayIndex < voyageData.jours.length - 1) {
                navigateToDay(currentDayIndex + 1);
            }
        });

        // Afficher le jour actuel
        if (currentDayIndex >= 0) {
            dayDropdown.value = currentDayIndex;
            showDayDetails(currentDayIndex);
        }
    }
}

function initializePointsInteretPage() {
    // Générer les options du menu déroulant des villes
    const cityDropdown = document.getElementById('city-dropdown');
    if (cityDropdown) {
        const villesUniques = [...new Set(voyageData.jours.map(jour => jour.lieu))];
        villesUniques.forEach(ville => {
            const option = document.createElement('option');
            option.value = ville;
            option.textContent = ville;
            cityDropdown.appendChild(option);
        });

        // Gérer le changement de sélection
        cityDropdown.addEventListener('change', function() {
            generatePointsInteret(this.value);
        });

        // Générer les points d'intérêt
        generatePointsInteret();
    }
}

function initializeCartePage() {
    // Cette fonction sera implémentée dans map.js
    initMap();
}

function initializeConvertisseurPage() {
    // Initialiser le convertisseur de devises
    initializeCurrencyConverter();
}

function initializeHotelsPage() {
    // Générer le tableau des services hôteliers
    generateHotelServices();
}

// Les autres fonctions (showDayDetails, generatePointsInteret, etc.) restent similaires
// mais doivent être adaptées pour fonctionner avec la nouvelle structure

// Fonction pour naviguer vers un jour spécifique
function navigateToDay(index) {
    const dayDropdown = document.getElementById('day-dropdown');
    if (dayDropdown) {
        dayDropdown.value = index;
        saveDaySelection(index);
        showDayDetails(index);
    }
}

// Fonction pour afficher les détails d'un jour spécifique
function showDayDetails(index) {
    // Implémentation similaire à votre code original
    // ... (le code reste essentiellement le même)
}

// Fonction pour générer la section Points d'Intérêt
function generatePointsInteret(villeSelectionnee = 'all') {
    // Implémentation similaire à votre code original
    // ... (le code reste essentiellement le même)
}

// Fonction pour générer le tableau des services hôteliers
function generateHotelServices() {
    // Implémentation similaire à votre code original
    // ... (le code reste essentiellement le même)
}

// Fonction pour initialiser le convertisseur de devises
function initializeCurrencyConverter() {
    // Implémentation similaire à votre code original
    // ... (le code reste essentiellement le même)
}

// Fonctions pour la sauvegarde/chargement de la sélection du jour
function saveDaySelection(index) {
    localStorage.setItem('lastSelectedDay', index);
    currentDayIndex = index;
    updateNavigationArrows();
}

function loadDaySelection() {
    const lastIndex = localStorage.getItem('lastSelectedDay');
    if (lastIndex !== null) {
        currentDayIndex = parseInt(lastIndex);
    } else {
        currentDayIndex = findClosestDayIndex();
    }
}

// Fonction pour mettre à jour l'état des flèches de navigation
function updateNavigationArrows() {
    const prevArrow = document.getElementById('prev-day');
    const nextArrow = document.getElementById('next-day');
    
    if (prevArrow && nextArrow) {
        if (currentDayIndex <= 0) {
            prevArrow.classList.add('disabled');
            prevArrow.disabled = true;
        } else {
            prevArrow.classList.remove('disabled');
            prevArrow.disabled = false;
        }
        
        if (currentDayIndex >= voyageData.jours.length - 1) {
            nextArrow.classList.add('disabled');
            nextArrow.disabled = true;
        } else {
            nextArrow.classList.remove('disabled');
            nextArrow.disabled = false;
        }
    }
}

// Fonction pour ouvrir le menu
function openMenu() {
    document.getElementById('nav-menu').classList.add('active');
}

// Fonction pour fermer le menu
function closeMenu() {
    document.getElementById('nav-menu').classList.remove('active');
}
