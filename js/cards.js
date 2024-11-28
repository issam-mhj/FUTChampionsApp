const players = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/meta/team/10/120.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/73/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    name: "Mohamed Salah",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "yassine bouno",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "morocco",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "hakimi",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "RB",
    nationality: "morocco",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
];

window.localStorage.setItem("players", JSON.stringify(players));

// const addPlayer = document.getElementById('add');
// addPlayer.addEventListener('click', function () {});

function goalK() {
  const playerData = localStorage.getItem("players");
  const playersArray = JSON.parse(playerData);

  const allGoalkeepers = playersArray.filter(
    (player) => player.position === "GK"
  );

  const gk = document.getElementById("gk");
  gk.innerHTML = ""; // Clear existing content

  const ul = document.createElement("ul");
  ul.classList.add("px-4", "py-5");

  allGoalkeepers.forEach((player) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");

    const nameP = document.createElement("p");
    nameP.textContent = player.name;
    const positionP = document.createElement("p");
    positionP.textContent = player.position;

    div.appendChild(nameP);
    div.appendChild(positionP);

    li.appendChild(div);
    ul.appendChild(li);
  });

  gk.appendChild(ul);
}
function defense() {
  const playerData = localStorage.getItem("players");
  const playersArray = JSON.parse(playerData);

  const allDefenders = playersArray.filter(
    (player) =>
      player.position === "CB" ||
      player.position === "LB" ||
      player.position === "RB"
  );

  const dfns = document.getElementById("dfns");
  dfns.innerHTML = ""; // Clear existing content

  const ul = document.createElement("ul");
  ul.classList.add("px-4", "py-5");

  allDefenders.forEach((player) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");

    const nameP = document.createElement("p");
    nameP.textContent = player.name;
    const positionP = document.createElement("p");
    positionP.textContent = player.position;

    div.appendChild(nameP);
    div.appendChild(positionP);

    li.appendChild(div);
    ul.appendChild(li);
  });

  dfns.appendChild(ul);
}

function midl() {
  const playerData = localStorage.getItem("players");
  const playersArray = JSON.parse(playerData);

  const allMidfielders = playersArray.filter(
    (player) => player.position === "CM" || player.position === "AM"
  );

  const md = document.getElementById("md");
  md.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("px-4", "py-5");

  allMidfielders.forEach((player) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");

    const nameP = document.createElement("p");
    nameP.textContent = player.name;
    const positionP = document.createElement("p");
    positionP.textContent = player.position;

    div.appendChild(nameP);
    div.appendChild(positionP);

    li.appendChild(div);
    ul.appendChild(li);
  });

  md.appendChild(ul);
}
function forwd() {
  const playerData = localStorage.getItem("players");
  const playersArray = JSON.parse(playerData);

  const allForwards = playersArray.filter(
    (player) =>
      player.position === "RW" ||
      player.position === "LW" ||
      player.position === "ST"
  );

  const ST = document.getElementById("st");
  ST.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("px-4", "py-5");

  allForwards.forEach((player) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");

    const nameP = document.createElement("p");
    nameP.textContent = player.name;
    const positionP = document.createElement("p");
    positionP.textContent = player.position;

    div.appendChild(nameP);
    div.appendChild(positionP);

    li.appendChild(div);
    ul.appendChild(li);
  });

  ST.appendChild(ul);
}

goalK();
defense();
midl();
forwd();

const addPlayer = document.getElementById("add");
const playerForm = document.getElementById("playerForm");
const savePlayer = document.getElementById("savePlayer");
const cancel = document.getElementById("cancel");

addPlayer.addEventListener("click", function () {
  playerForm.classList.remove("hidden");
});

cancel.addEventListener("click", function () {
  playerForm.classList.add("hidden");
});

savePlayer.addEventListener("click", function () {
  const name = document.getElementById("playerName").value;
  const position = document.getElementById("playerPosition").value;
  const nationality = document.getElementById("playerNationality").value;
  const club = document.getElementById("playerClub").value;
  const rating = parseInt(document.getElementById("playerRating").value, 10);

  const newPlayer = {
    name: name,
    position: position,
    nationality: nationality,
    club: club,
    rating: rating,
    pace: 0,
    shooting: 0,
    passing: 0,
    dribbling: 0,
    defending: 0,
    physical: 0,
  };

  function getPlayerData() {
    const playerData = localStorage.getItem("players");
    return playerData ? JSON.parse(playerData) : [];
  }

  const playersArray = getPlayerData();
  playersArray.push(newPlayer);
  window.localStorage.setItem("players", JSON.stringify(playersArray));

  playerForm.classList.add("hidden");
  goalK();
  defense();
  midl();
  forwd();
});

const glkp = document.getElementById("kp");
const defensers = document.getElementsByClassName("DFNS");
const mildf = document.getElementById("MIL");
const forw = document.getElementById("FRW");

glkp.addEventListener("click", function () {
  let keeperschoice = document.getElementById("choosePlyr");
  keeperschoice.classList.remove("hidden");

  const playerData = localStorage.getItem("players");
  const playersArray = JSON.parse(playerData);
  const allkeepers = playersArray.filter((player) => player.position === "GK");

  const KP = document.getElementById("ChoiceKp");
  KP.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("px-4", "py-5");

  allkeepers.forEach((player) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");

    const nameP = document.createElement("p");
    nameP.textContent = player.name;
    const positionP = document.createElement("p");
    positionP.textContent = player.position;

    div.appendChild(nameP);
    div.appendChild(positionP);

    li.appendChild(div);
    ul.appendChild(li);
  });

  KP.appendChild(ul);

  const chooseUrPl = document.getElementById("cancelChoice");
  chooseUrPl.addEventListener("click", function () {
    let keeperschoice = document.getElementById("choosePlyr");
    keeperschoice.classList.add("hidden");
  });
});
