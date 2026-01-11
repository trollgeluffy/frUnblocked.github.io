const games = [
  { name: "Snake", category: "arcade", path: "games/snake/index.html" },
  { name: "Runner", category: "arcade", path: "games/runner/index.html" },
  { name: "Clicker", category: "idle", path: "games/clicker/index.html" },
  { name: "Dodge", category: "skill", path: "games/dodge/index.html" },
  { name: "Platformer", category: "arcade", path: "games/platformer/index.html" },
  { name: "Reaction", category: "skill", path: "games/reaction/index.html" },
  { name: "RNG Roll", category: "idle", path: "games/rng/index.html" },
  { name: "Blocks", category: "arcade", path: "games/blocks/index.html" },
  { name: "Aim Trainer", category: "skill", path: "games/aim/index.html" },
  { name: "Racing", category: "arcade", path: "games/racing/index.html" }
];

const grid = document.getElementById("grid");

function render(list) {
  grid.innerHTML = "";
  list.forEach(g => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openGame(g.path);
    card.innerHTML = `
      <img src="assets/thumbnails/placeholder.png">
      <span>${g.name}</span>
    `;
    grid.appendChild(card);
  });
}

function filterGames() {
  const q = search.value.toLowerCase();
  const cat = category.value;
  render(games.filter(g =>
    (cat === "all" || g.category === cat) &&
    g.name.toLowerCase().includes(q)
  ));
}

function openGame(path) {
  player.classList.remove("hidden");
  gameFrame.src = path;
}

function closeGame() {
  player.classList.add("hidden");
  gameFrame.src = "";
}

function toggleFullscreen() {
  const el = document.getElementById("player");
  if (!document.fullscreenElement) el.requestFullscreen();
  else document.exitFullscreen();
}

render(games);
