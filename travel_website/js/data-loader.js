// Load destinations data
async function loadDestinations() {
  try {
    const response = await fetch('assets/data/destinations.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading destinations:', error);
    return [];
  }
}

// Display destinations
async function displayDestinations() {
  const container = document.getElementById('destinations-container');
  const destinations = await loadDestinations();

  container.innerHTML = destinations
    .map(
      (destination) => `
        <div class="destination-card">
            <div class="destination-img">
                <img src="${destination.image}" alt="${destination.name}">
                <div class="destination-overlay">
                    <div class="destination-rating">
                        <i class="fas fa-star"></i>
                        <span>${destination.rating}</span>
                    </div>
                    <div class="destination-price">
                        From <span>$${destination.price}</span>
                    </div>
                </div>
            </div>
            <div class="destination-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-meta">
                    <span>${destination.tours} Tours Available</span>
                    <button class="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    `
    )
    .join('');
}

// Load packages data
async function loadPackages() {
  try {
    const response = await fetch('assets/data/packages.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading packages:', error);
    return [];
  }
}
let loadedCount = 0;
let allPackages = [];

// Display packages
async function displayPackages() {
  const container = document.getElementById('packages-container');
  const packages = await loadPackages();

  container.innerHTML = packages
    .map(
      (pkg) => `
        <div class="package-card">
            <div class="package-img">
                <img src="${pkg.image}" alt="${pkg.name}">
                ${
                  pkg.badge
                    ? `<div class="package-badge">${pkg.badge}</div>`
                    : ''
                }
            </div>
            <div class="package-content">
                <div class="package-meta">
                    <span><i class="fas fa-calendar-alt"></i> ${
                      pkg.duration
                    }</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${
                      pkg.location
                    }</span>
                </div>
                <h3>${pkg.name}</h3>
                <p>${pkg.description}</p>
                <div class="package-footer">
                    <div class="package-price">
                        From <span>$${pkg.price}</span>
                    </div>
                    <button class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    `
    )
    .join('');
}

window.scrollRight = function () {
  const container = document.getElementById('packages-scrollable');
  if (!container) return;

  const scrollAmount = container.clientWidth * 0.8;
  const maxScroll = container.scrollWidth - container.clientWidth;
  if (
    container.scrollLeft >= maxScroll - 50 &&
    loadedCount < allPackages.length
  ) {
    displayPackages().then(() => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    });
  } else {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
  console.log('Scrolling right by:', scrollAmount);
};
window.scrollPackagesLeft = function () {
  const container = document.getElementById('packages-scrollable');
  if (!container) return;

  const scrollAmount = container.clientWidth * 0.8;
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
  console.log('Scrolling left by:', scrollAmount);
};

// Load testimonials data
async function loadTestimonials() {
  try {
    const response = await fetch('assets/data/testimonials.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return [];
  }
}

// Display testimonials
async function displayTestimonials() {
  const container = document.getElementById('testimonials-container');
  const testimonials = await loadTestimonials();

  container.innerHTML = testimonials
    .map(
      (testimonial) => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.comment}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
                <div>
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.location}</p>
                </div>
            </div>
        </div>
    `
    )
    .join('');
}

// Initialize all displays
async function initialize() {
  await displayDestinations();
  await displayPackages();
  await displayTestimonials();

  // Hide preloader when everything is loaded
  document.querySelector('.preloader').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 500);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);
