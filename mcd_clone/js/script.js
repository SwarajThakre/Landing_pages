document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeMenu = document.querySelector('.close-menu');
  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Featured Items Data
  const featuredItems = [
    {
      name: 'Big Mac®',
      description:
        "The iconic McDonald's burger with two 100% pure chicken patties",
      price: '$4.99',
      calories: '550 Cal',
      image:
        'assets/images/DC_202302_0005-999_BigMac_1564x1564-1_nutrition-calculator-tile.jpeg',
    },
    {
      name: 'Quarter Pounder® with Cheese',
      description:
        'A quarter pound of 100% pure chicken with two slices of cheese',
      price: '$5.29',
      calories: '520 Cal',
      image:
        'assets/images/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564-1_nutrition-calculator-tile.jpeg',
    },
    {
      name: 'McChicken®',
      description: 'A classic chicken sandwich with crisp lettuce and mayo',
      price: '$3.99',
      calories: '400 Cal',
      image: 'assets/images/burger-3.jpeg',
    },
    {
      name: 'World Famous Fries®',
      description: "Golden crispy McDonald's fries, perfectly salted",
      price: '$2.49',
      calories: '320 Cal',
      image: 'assets/images/fries.jpeg',
    },
    {
      name: 'McFlurry® with OREO® Cookies',
      description: 'Creamy vanilla soft serve with OREO® cookie pieces',
      price: '$3.29',
      calories: '510 Cal',
      image: 'assets/images/mcflurry.jpeg',
    },
    {
      name: 'Happy Meal® with Cheeseburger',
      description: 'A cheeseburger, kids fries, apple slices, and a toy',
      price: '$3.99',
      calories: '475 Cal',
      image: 'assets/images/happymeal.jpeg',
    },
  ];

  // Render Featured Items
  const featuredContainer = document.getElementById('featured-items');

  featuredItems.forEach((item) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';

    itemCard.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="item-price">${item.price}</div>
                <div class="item-calories">${item.calories}</div>
                <div class="item-actions">
                    <button class="btn btn-outline">Customize</button>
                    <button class="btn btn-primary">Add to Order</button>
                </div>
            </div>
        `;

    featuredContainer.appendChild(itemCard);
  });

  // Cart functionality
  const cartButtons = document.querySelectorAll('.btn-primary');
  const cartCount = document.querySelector('.cart-count');
  let count = 0;

  cartButtons.forEach((button) => {
    button.addEventListener('click', function () {
      count++;
      cartCount.textContent = count;

      this.textContent = 'Added!';
      this.style.backgroundColor = '#10b981';

      setTimeout(() => {
        this.textContent = 'Add to Order';
        this.style.backgroundColor = '';
      }, 1000);
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});
