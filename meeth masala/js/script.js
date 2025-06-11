// Language translations (English and Marathi)
const translations = {
    en: {
        // "logo" : "Meeth Masala",
        "home": "Home",
        "about": "About",
        "menu": "Menu",
        "features": "Features",
        "contact": "Contact",
        "hero-title": "Authentic Flavors Delivered to Your Doorstep",
        "hero-sub": "Experience the taste of home with our cloud kitchen specialties",
        "order-now": "Order Now",
        "about-title": "Our Story",
        "about-text1": "Founded in 2020, Meeth Masala brings authentic regional flavors through our cloud kitchen model.",
        "about-text2": "Our chefs combine traditional recipes with modern techniques to create memorable dining experiences.",
        "about-list1": "100% Fresh Ingredients",
        "about-list2": "Hygienic Preparation",
        "about-list3": "Quick Delivery",
        "features-title": "Why Choose Us",
        "feature1-title": "Quick Delivery",
        "feature1-text": "Average delivery time under 30 minutes",
        "feature2-title": "Diverse Menu",
        "feature2-text": "100+ dishes from various cuisines",
        "feature3-title": "Fresh Ingredients",
        "feature3-text": "Locally sourced, daily prepared",
        "menu-title": "Our Specialties",
        "menu-all": "All",
        "menu-veg": "Vegetarian",
        "menu-nonveg": "Non-Vegetarian",
        "contact-title": "Get In Touch",
        "contact-info": "Contact Information",
        "contact-address": "Mumbai, Maharashtra",
        "name-ph": "Name",
        "email-ph": "Email",
        "phone-ph": "Phone",
        "message-ph": "Message",
        "submit-btn": "Send Message",
        "quick-links": "Quick Links",
        "opening-hours": "Opening Hours",
        "hours-weekdays": "Mon-Fri: 10AM - 10PM",
        "hours-weekend": "Sat-Sun: 11AM - 11PM",
        "footer-title" : "Meeth Masala",
        "footer-about": "Cloud kitchen delivering authentic flavors across the city.",
        "copyright": "© 2023 Meeth Masala. All rights reserved."
    },
    mr: {
        // "logo" : "मिठ मसाला",
        "home": "मुख्यपृष्ठ",
        "about": "आमच्याबद्दल",
        "menu": "मेनू",
        "features": "वैशिष्ट्ये",
        "contact": "संपर्क",
        "hero-title": "तुमच्या दारात पोहोचवू स्वादिष्ट पाककृती",
        "hero-sub": "आमच्या क्लाऊड किचनच्या विशेष पाककृतींचा आस्वाद घ्या",
        "order-now": "आजच ऑर्डर करा",
        "about-title": "आमची कहाणी",
        "about-text1": "२०२० मध्ये स्थापन झालेले मिठ मसाला आमच्या क्लाऊड किचन मॉडेलद्वारे प्रामाणिक प्रादेशिक स्वाद आणते.",
        "about-text2": "आमचे शेफ्स पारंपारिक पाककृती आणि आधुनिक तंत्रज्ञान एकत्रित करतात.",
        "about-list1": "१००% ताजे घटक",
        "about-list2": "स्वच्छतेची काळजी",
        "about-list3": "त्वरित वितरण",
        "features-title": "आमची वैशिष्ट्ये",
        "feature1-title": "त्वरित वितरण",
        "feature1-text": "सरासरी ३० मिनिटांत वितरण",
        "feature2-title": "विविध मेनू",
        "feature2-text": "१००+ विविध पदार्थ",
        "feature3-title": "ताजे घटक",
        "feature3-text": "स्थानिक पद्धतीने मिळवलेले घटक",
        "menu-title": "आमचे विशेष पदार्थ",
        "menu-all": "सर्व",
        "menu-veg": "शाकाहारी",
        "menu-nonveg": "मांसाहारी",
        "contact-title": "आमच्याशी संपर्क साधा",
        "contact-info": "संपर्क माहिती",
        "contact-address": "मुंबई, महाराष्ट्र",
        "name-ph": "नाव",
        "email-ph": "ईमेल",
        "phone-ph": "फोन नंबर",
        "message-ph": "संदेश",
        "submit-btn": "संदेश पाठवा",
        "quick-links": "द्रुत दुवे",
        "opening-hours": "कामाचे तास",
        "hours-weekdays": "सोम-शुक्र: सकाळी १० - रात्री १०",
        "hours-weekend": "शनि-रवि: सकाळी ११ - रात्री ११",
        "footer-title" : "मीठ मसाला",
        "footer-about": "शहरभर प्रामाणिक स्वाद पोहोचवणारे क्लाऊड किचन.",
        "copyright": "© २०२३ मीथ मसाला. सर्व हक्क राखीव."
    }
};

// Current language
let currentLang = 'en';

// DOM elements
const langToggle = document.getElementById('lang-toggle');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');
const placeholdersToTranslate = document.querySelectorAll('[data-i18n-ph]');

// Menu data
const menuItems = [
    {
        id: 1,
        name: "Misal Pav",
        description: "Spicy sprouted curry served with bread rolls",
        price: 120,
        category: "veg",
        image: "images/misal-pav-recipe-1.jpg"
    },
    {
        id: 2,
        name: "Chicken Kolhapuri",
        description: "Spicy chicken curry from Kolhapur region",
        price: 220,
        category: "nonveg",
        image: "images/chicken-kolhapuri.jpg"
    },
    {
        id: 3,
        name: "Puran Poli",
        description: "Sweet flatbread stuffed with lentil and jaggery",
        price: 80,
        category: "veg",
        image: "images/puran-poli-recipe.jpg"
    },
    {
        id: 4,
        name: "Bombay Duck Fry",
        description: "Crispy fried bombil fish with spices",
        price: 180,
        category: "nonveg",
        image: "images/OIP.jpeg"
    },
    {
        id: 5,
        name: "Vada Pav",
        description: "Mumbai's famous potato fritter sandwich",
        price: 40,
        category: "veg",
        image: "images/R.jpeg"
    },
    {
        id: 6,
        name: "Mutton Rassa",
        description: "Spicy mutton curry from Western Maharashtra",
        price: 280,
        category: "nonveg",
        image: "images/dish-6.jpeg"
    }
];

// Marathi menu translations
const menuTranslations = {
    mr: {
        "Misal Pav": "मिसळ पाव",
        "Spicy sprouted curry served with bread rolls": "मसालेदार उसळ आणि भाजलेल्या पावसह",
        "Chicken Kolhapuri": "कोल्हापुरी चिकन",
        "Spicy chicken curry from Kolhapur region": "कोल्हापूर प्रदेशातील मसालेदार चिकन",
        "Puran Poli": "पुरण पोळी",
        "Sweet flatbread stuffed with lentil and jaggery": "डाळ आणि गुळाची भरलेली गोड पोळी",
        "Bombay Duck Fry": "बोंबिल फ्राय",
        "Crispy fried bombil fish with spices": "मसालेदार कुरकुरीत बॉम्बील मासा",
        "Vada Pav": "वडा पाव",
        "Mumbai's famous potato fritter sandwich": "मुंबईचा प्रसिद्ध बटाटा वडा पाव",
        "Mutton Rassa": "मटण रस्सा",
        "Spicy mutton curry from Western Maharashtra": "पश्चिम महाराष्ट्रातील मसालेदार मटण"
    }
};

// Function to translate content
function translateContent(lang) {
    // Translate regular elements
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    placeholdersToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Translate menu items if needed
    if (lang === 'mr') {
        translateMenuItems(lang);
    } else {
        renderMenuItems(); // Reset to English
    }
}

// Function to translate menu items
function translateMenuItems(lang) {
    const menuItemNames = document.querySelectorAll('.menu-item h3');
    const menuItemDescs = document.querySelectorAll('.menu-item p');
    
    menuItemNames.forEach((item, index) => {
        const originalName = menuItems[index].name;
        if (menuTranslations[lang][originalName]) {
            item.textContent = menuTranslations[lang][originalName];
        }
    });
    
    menuItemDescs.forEach((item, index) => {
        const originalDesc = menuItems[index].description;
        if (menuTranslations[lang][originalDesc]) {
            item.textContent = menuTranslations[lang][originalDesc];
        }
    });
}

// Function to render menu items
function renderMenuItems(category = 'all') {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">
                    <span class="price">₹${item.price}</span>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Function to handle tab switching
function setupMenuTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Get category and render items
            const category = button.getAttribute('data-category');
            renderMenuItems(category);
            
            // Translate menu items if current language is Marathi
            if (currentLang === 'mr') {
                translateMenuItems(currentLang);
            }
        });
    });
}

// Initialize the page
function init() {
    // Set initial language
    translateContent(currentLang);
    
    // Render initial menu items
    renderMenuItems();
    
    // Set up menu tabs
    setupMenuTabs();
    
    // Set up language toggle
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'mr' : 'en';
        translateContent(currentLang);
        langToggle.textContent = currentLang === 'en' ? 'EN/MR' : 'MR/EN';
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);