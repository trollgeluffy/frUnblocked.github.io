const container = document.getElementById("games");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${game.image}">
    <h3>${game.name}</h3>
    <p>${game.genre}</p>
    <button onclick="window.open('${game.url}')">
      Open
    </button>
  `;

  container.appendChild(card);
});
