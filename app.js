const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const gifts = [
  { name: "🎁 Gold Box", price: 2, rarity: "rare" },
  { name: "🎁 Silver Box", price: 1, rarity: "common" },
  { name: "🎁 Diamond Box", price: 5, rarity: "legendary" }
];

const container = document.getElementById("gifts");

gifts.forEach(gift => {
  const card = document.createElement("div");
  card.className = "gift-card";

  card.innerHTML = `
    <strong>${gift.name}</strong><br>
    Цена: ${gift.price} TON<br>
    Редкость: ${gift.rarity}
  `;

  container.appendChild(card);
});
