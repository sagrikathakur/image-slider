const slides = [
  {
    number: '#025',
    name: 'Pikachu',
    category: 'Mouse Pokémon',
    types: ['Electric'],
    imageSrc: 'assets/pikachu.png',
    color1: '#facc15', // Yellow
    color2: '#eab308',
    glow: 'rgba(250, 204, 21, 0.4)',
    bg: '#0B0F19' // Deep base
  },
  {
    number: '#001',
    name: 'Bulbasaur',
    category: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    imageSrc: 'assets/bulbasaur.png',
    color1: '#4ade80', // Green
    color2: '#22c55e',
    glow: 'rgba(74, 222, 128, 0.4)',
    bg: '#021c13' // Deep green
  },
  {
    number: '#004',
    name: 'Charmander',
    category: 'Lizard Pokémon',
    types: ['Fire'],
    imageSrc: 'assets/charmander.png',
    color1: '#fb923c', // Orange
    color2: '#f97316',
    glow: 'rgba(251, 146, 60, 0.4)',
    bg: '#1f0707' // Deep red
  },
  {
    number: '#007',
    name: 'Squirtle',
    category: 'Tiny Turtle Pokémon',
    types: ['Water'],
    imageSrc: 'assets/squirtle.png',
    color1: '#60a5fa', // Blue
    color2: '#3b82f6',
    glow: 'rgba(96, 165, 250, 0.4)',
    bg: '#051124' // Deep blue
  }
];

const image = document.getElementById('poke-image');
const numberLabel = document.getElementById('pokemon-number');
const nameLabel = document.getElementById('pokemon-name');
const typeLabel = document.getElementById('pokemon-type');
const typeBadges = document.getElementById('type-badges');
const root = document.documentElement;

let currentIndex = -1;
let updateTimeoutId = null;

function updateCard(index) {
  if (index === currentIndex) return;
  const slide = slides[index];
  if (!slide) return;
  
  currentIndex = index;

  // Clear any pending timeout to prevent race conditions when scrolling fast
  if (updateTimeoutId) {
    clearTimeout(updateTimeoutId);
  }

  // Add fade-out class to animate elements out
  image.classList.add('fade-out');
  numberLabel.classList.add('fade-out');
  nameLabel.classList.add('fade-out');
  typeLabel.classList.add('fade-out');
  typeBadges.classList.add('fade-out');

  // Update CSS Variables immediately for smooth environment transition
  root.style.setProperty('--primary-color', slide.color1);
  root.style.setProperty('--secondary-color', slide.color2);
  root.style.setProperty('--glow-color', slide.glow);
  root.style.setProperty('--bg-color', slide.bg);

  // Wait for fade out, then update content and fade in
  updateTimeoutId = setTimeout(() => {
    image.src = slide.imageSrc;
    numberLabel.textContent = slide.number;
    nameLabel.textContent = slide.name;
    typeLabel.textContent = slide.category;
    
    // Update types badges
    typeBadges.innerHTML = '';
    slide.types.forEach(type => {
      const span = document.createElement('span');
      span.className = `type-badge ${type}`;
      span.textContent = type;
      typeBadges.appendChild(span);
    });

    // Remove fade-out class to animate elements in
    image.classList.remove('fade-out');
    numberLabel.classList.remove('fade-out');
    nameLabel.classList.remove('fade-out');
    typeLabel.classList.remove('fade-out');
    typeBadges.classList.remove('fade-out');
  }, 400); // Matches the 0.4s transition duration in CSS
}

const sections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add active class to current section
        sections.forEach(sec => sec.classList.remove('is-active'));
        entry.target.classList.add('is-active');

        const index = Number(entry.target.dataset.index);
        updateCard(index);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

// 3D Card Hover Effect
const card = document.getElementById('pokemon-card');
const glare = document.getElementById('card-glare');

let isHovering = false;
let mouseX = 0;
let mouseY = 0;
let rafId = null;

function updateCardTransform() {
  if (!isHovering) return;
  
  const rect = card.getBoundingClientRect();
  const x = mouseX - rect.left;
  const y = mouseY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // Calculate rotation (max 15 degrees)
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;
  
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  // Update glare position
  glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 60%)`;
  
  rafId = requestAnimationFrame(updateCardTransform);
}

card.addEventListener('mouseenter', () => {
  isHovering = true;
  rafId = requestAnimationFrame(updateCardTransform);
});

card.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

card.addEventListener('mouseleave', () => {
  isHovering = false;
  cancelAnimationFrame(rafId);
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)`;
});

// Parallax ambient light based on mouse position
const ambientLight = document.querySelector('.ambient-light');
let globalMouseX = window.innerWidth / 2;
let globalMouseY = window.innerHeight / 2;
let ambientRafId = null;

function updateAmbientLight() {
  const x = globalMouseX / window.innerWidth;
  const y = globalMouseY / window.innerHeight;
  
  // Move the light slightly based on mouse position
  ambientLight.style.transform = `translate(-50%, -50%) translate(${x * 50}px, ${y * 50}px)`;
  
  ambientRafId = requestAnimationFrame(updateAmbientLight);
}

// Start ambient light animation loop
updateAmbientLight();

document.addEventListener('mousemove', (e) => {
  globalMouseX = e.clientX;
  globalMouseY = e.clientY;
});
