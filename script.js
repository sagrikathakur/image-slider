const slides = [
  {
    name: 'Pikachu',
    type: 'Electric Mouse Pokémon',
    imageSrc: 'assets/pikachu.png',
    color1: '#facc15', // Yellow
    color2: '#ca8a04',
    glow: 'rgba(250, 204, 21, 0.4)',
    bg: '#0f172a'
  },
  {
    name: 'Bulbasaur',
    type: 'Seed Pokémon',
    imageSrc: 'assets/bulbasaur.png',
    color1: '#4ade80', // Green
    color2: '#16a34a',
    glow: 'rgba(74, 222, 128, 0.4)',
    bg: '#064e3b' // Dark green background nuance
  },
  {
    name: 'Charmander',
    type: 'Lizard Pokémon',
    imageSrc: 'assets/charmander.png',
    color1: '#fb923c', // Orange
    color2: '#ea580c',
    glow: 'rgba(251, 146, 60, 0.4)',
    bg: '#450a0a' // Dark red background nuance
  },
  {
    name: 'Squirtle',
    type: 'Tiny Turtle Pokémon',
    imageSrc: 'assets/squirtle.png',
    color1: '#60a5fa', // Blue
    color2: '#2563eb',
    glow: 'rgba(96, 165, 250, 0.4)',
    bg: '#172554' // Dark blue background nuance
  }
];

const image = document.getElementById('poke-image');
const nameLabel = document.getElementById('pokemon-name');
const typeLabel = document.getElementById('pokemon-type');
const root = document.documentElement;

let currentIndex = -1;

function updateCard(index) {
  if (index === currentIndex) return;
  const slide = slides[index];
  if (!slide) return;
  
  currentIndex = index;

  // Add fade-out class
  image.classList.add('fade-out');
  nameLabel.classList.add('fade-out');
  typeLabel.classList.add('fade-out');

  // Update CSS Variables immediately for smooth transition
  root.style.setProperty('--primary-color', slide.color1);
  root.style.setProperty('--secondary-color', slide.color2);
  root.style.setProperty('--glow-color', slide.glow);
  root.style.setProperty('--bg-color', slide.bg);

  // Wait for fade out, then update content and fade in
  setTimeout(() => {
    image.src = slide.imageSrc;
    nameLabel.textContent = slide.name;
    typeLabel.textContent = slide.type;

    image.classList.remove('fade-out');
    nameLabel.classList.remove('fade-out');
    typeLabel.classList.remove('fade-out');
  }, 400); // 400ms matches the transition duration in CSS
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
