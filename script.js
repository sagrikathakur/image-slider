const slides = [
  {
    "number": "#001",
    "name": "Bulbasaur",
    "category": "Seed Pokémon",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "color1": "#4ade80",
    "color2": "#22c55e",
    "glow": "rgba(74, 222, 128, 0.4)",
    "bg": "#021c13",
    "description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
  },
  {
    "number": "#002",
    "name": "Ivysaur",
    "category": "Seed Pokémon",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "color1": "#4ade80",
    "color2": "#22c55e",
    "glow": "rgba(74, 222, 128, 0.4)",
    "bg": "#021c13",
    "description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
  },
  {
    "number": "#003",
    "name": "Venusaur",
    "category": "Seed Pokémon",
    "types": [
      "Grass",
      "Poison"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "color1": "#4ade80",
    "color2": "#22c55e",
    "glow": "rgba(74, 222, 128, 0.4)",
    "bg": "#021c13",
    "description": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
  },
  {
    "number": "#004",
    "name": "Charmander",
    "category": "Lizard Pokémon",
    "types": [
      "Fire"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "color1": "#fb923c",
    "color2": "#f97316",
    "glow": "rgba(251, 146, 60, 0.4)",
    "bg": "#1f0707",
    "description": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
  },
  {
    "number": "#005",
    "name": "Charmeleon",
    "category": "Flame Pokémon",
    "types": [
      "Fire"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "color1": "#fb923c",
    "color2": "#f97316",
    "glow": "rgba(251, 146, 60, 0.4)",
    "bg": "#1f0707",
    "description": "When it swings its burning tail, it elevates the temperature to unbearably high levels."
  },
  {
    "number": "#006",
    "name": "Charizard",
    "category": "Flame Pokémon",
    "types": [
      "Fire",
      "Flying"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "color1": "#fb923c",
    "color2": "#f97316",
    "glow": "rgba(251, 146, 60, 0.4)",
    "bg": "#1f0707",
    "description": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."
  },
  {
    "number": "#007",
    "name": "Squirtle",
    "category": "Tiny Turtle Pokémon",
    "types": [
      "Water"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "color1": "#60a5fa",
    "color2": "#3b82f6",
    "glow": "rgba(96, 165, 250, 0.4)",
    "bg": "#051124",
    "description": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
  },
  {
    "number": "#008",
    "name": "Wartortle",
    "category": "Turtle Pokémon",
    "types": [
      "Water"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "color1": "#60a5fa",
    "color2": "#3b82f6",
    "glow": "rgba(96, 165, 250, 0.4)",
    "bg": "#051124",
    "description": "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance."
  },
  {
    "number": "#009",
    "name": "Blastoise",
    "category": "Shellfish Pokémon",
    "types": [
      "Water"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "color1": "#60a5fa",
    "color2": "#3b82f6",
    "glow": "rgba(96, 165, 250, 0.4)",
    "bg": "#051124",
    "description": "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles."
  },
  {
    "number": "#010",
    "name": "Caterpie",
    "category": "Worm Pokémon",
    "types": [
      "Bug"
    ],
    "imageSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "color1": "#a8b820",
    "color2": "#8a971a",
    "glow": "rgba(168, 184, 32, 0.4)",
    "bg": "#121403",
    "description": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
  }
];

const scrollContainer = document.getElementById('scroll-container');
const image = document.getElementById('poke-image');
const numberLabel = document.getElementById('pokemon-number');
const nameLabel = document.getElementById('pokemon-name');
const typeLabel = document.getElementById('pokemon-type');
const typeBadges = document.getElementById('type-badges');
const root = document.documentElement;

// Render HTML sections dynamically
slides.forEach((slide, index) => {
  const section = document.createElement('section');
  section.className = 'scroll-section';
  section.dataset.index = index;
  
  const mainType = slide.types[0];
  
  section.innerHTML = `
    <div class="text-content">
      <div class="label-container">
        <div class="label-line"></div>
        <span class="label">${String(index + 1).padStart(2, '0')} / ${mainType}</span>
      </div>
      <h1>${slide.name}</h1>
      <p>${slide.description}</p>
    </div>
  `;
  
  scrollContainer.appendChild(section);
});

let currentIndex = -1;
let updateTimeoutId = null;

function updateCard(index) {
  if (index === currentIndex) return;
  const slide = slides[index];
  if (!slide) return;
  
  currentIndex = index;

  if (updateTimeoutId) {
    clearTimeout(updateTimeoutId);
  }

  image.classList.add('fade-out');
  numberLabel.classList.add('fade-out');
  nameLabel.classList.add('fade-out');
  typeLabel.classList.add('fade-out');
  typeBadges.classList.add('fade-out');

  root.style.setProperty('--primary-color', slide.color1);
  root.style.setProperty('--secondary-color', slide.color2);
  root.style.setProperty('--glow-color', slide.glow);
  root.style.setProperty('--bg-color', slide.bg);

  updateTimeoutId = setTimeout(() => {
    image.src = slide.imageSrc;
    numberLabel.textContent = slide.number;
    nameLabel.textContent = slide.name;
    typeLabel.textContent = slide.category;
    
    typeBadges.innerHTML = '';
    slide.types.forEach(type => {
      const span = document.createElement('span');
      span.className = `type-badge ${type}`;
      span.textContent = type;
      typeBadges.appendChild(span);
    });

    image.classList.remove('fade-out');
    numberLabel.classList.remove('fade-out');
    nameLabel.classList.remove('fade-out');
    typeLabel.classList.remove('fade-out');
    typeBadges.classList.remove('fade-out');
  }, 400);
}

const sections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
  
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;
  
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
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
  
  ambientLight.style.transform = `translate(-50%, -50%) translate(${x * 50}px, ${y * 50}px)`;
  
  ambientRafId = requestAnimationFrame(updateAmbientLight);
}

updateAmbientLight();

document.addEventListener('mousemove', (e) => {
  globalMouseX = e.clientX;
  globalMouseY = e.clientY;
});
