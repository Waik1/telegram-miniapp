const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

/* =======================
   DATA
======================= */

// МОДЕЛИ (именно имена Pepe)
const MODELS = [
  "Raphael",
  "Ninja Mike",
  "Fifty Shades",
  "Toading…",
  "Midas Pepe",
  "Leonardo",
  "Donatello",
  "Cozy Galaxy",
  "Gucci Leap",
  "Steel Frog",
  "Magnate",
  "Emerald Plush",
  "Louis Vuittoad",
  "Puppy Pug",
  "Bavaria",
  "Red Pepple",
  "Pink Galaxy",
  "Milano",
  "Yellow Purp",
  "X-Ray",
  "Sketchy",
  "Marble",
  "Birmingham",
  "Barcelona",
  "Sunset",
  "Emo Boi",
  "Santa Pepe",
  "Kung Fu Pepe",
  "Christmas",
  "Amalgam",
  "Stripes",
  "Pink Latex",
  "Two Face",
  "Frozen",
  "Princess",
  "Pepe La Rana",
  "Spectrum",
  "Polka Dots",
  "Yellow Hug",
  "Hothead",
  "Gummy Frog",
  "Red Menace",
  "Tropical",
  "Poison Dart",
  "Eggplant",
  "Pepemint",
  "Hue Jester",
  "Cold Heart",
  "Aqua Plush",
  "Pumpkin"
];

// ФОНЫ (цвета)
const BACKGROUNDS = [
  "Black","Aquamarine","Azure Blue","English Violet","Pacific Green",
  "Pure Gold","Purple","Raspberry","Roman Silver","Shamrock Green",
  "Sky Blue","Amber","Burgundy","Cappuccino","Chestnut","Chocolate",
  "Cobalt Blue","Coral Red","Cyberpunk","Dark Lilac","Desert Sand",
  "Hunter Green","Ivory White","Midnight Blue","Mint Green","Moonstone",
  "Orange","Pacific Cyan","Persimmon","Pistachio","Turquoise",
  "Battleship Grey","Caramel","Carrot Juice","Copper","Electric Indigo",
  "Electric Purple","Emerald","Fandango","French Blue","Grape",
  "Indigo Dye","Jade Green","Khaki Green","Lavender","Lemongrass",
  "Light Olive","Malachite","Mystic Pearl","Navy Blue","Neon Blue",
  "Onyx Black","Pine Green","Platinum","Rosewood","Sapphire",
  "Satin Gold","Silver Blue","Steel Grey","Strawberry"
];

// СИМВОЛЫ
const SYMBOLS = [
  "Bandage","Bone","Book","Bunny Ears","Carambola","Cheese","Cicada",
  "Conch","Diamonds","Flashlight","Hamburger","Handset","Jumbo Pencil",
  "Kite","Ladybug","Lemon Slice","Lips","Magic Wand","Moon Cross",
  "Mushroom","Oxen of Fire","Patched Heart","Paw","Pawn","PC Mouse",
  "Piggy Bank","Pizza Slice","Plum","Police Badge","Pomegranate",
  "Rain Drop","Spades","Sunflower","Tie","Turkey","Turtle",
  "Venetian Mask","Bee","Beetle","Blossom","Bottle","Brain",
  "Butterfly","Crown","Firebird","Wolf Rage","Star","Sun"
];

/* =======================
   UI
======================= */

const modelSelect = document.getElementById("model");
const bgSelect = document.getElementById("background");
const symbolSelect = document.getElementById("symbol");
const results = document.getElementById("results");

function fillSelect(select, items) {
  select.innerHTML = "";
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

// ЗАПОЛНЕНИЕ
fillSelect(modelSelect, MODELS);
fillSelect(bgSelect, BACKGROUNDS);
fillSelect(symbolSelect, SYMBOLS);

/* =======================
   MOCK SEARCH
======================= */

const GIFTS = [
  {
    id: 101,
    model: "Raphael",
    background: "Sapphire",
    symbol: "Crown",
    link: "https://t.me/nft/pepe101"
  },
  {
    id: 102,
    model: "Raphael",
    background: "Sapphire",
    symbol: "Crown",
    link: "https://t.me/nft/pepe102"
  },
  {
    id: 103,
    model: "Midas Pepe",
    background: "Pure Gold",
    symbol: "Firebird",
    link: "https://t.me/nft/pepe103"
  }
];

document.getElementById("search").onclick = () => {
  const model = modelSelect.value;
  const bg = bgSelect.value;
  const symbol = symbolSelect.value;

  const matches = GIFTS.filter(g =>
    g.model === model &&
    g.background === bg &&
    g.symbol === symbol
  );

  if (matches.length === 0) {
    results.innerHTML = "❌ Похожие подарки не найдены";
    return;
  }

  results.innerHTML =
    `<b>Найдено ${matches.length} похожих подарков:</b><br><br>` +
    matches.map(g =>
      `<a href="${g.link}" target="_blank">Подарок #${g.id}</a>`
    ).join("<br>");
};
