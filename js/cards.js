document.addEventListener("DOMContentLoaded", function () {
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
    gk.innerHTML = "";

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
    dfns.innerHTML = "";

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
      (player) =>
        player.position === "CM" ||
        player.position === "AM" ||
        player.position === "RM" ||
        player.position === "LM" ||
        player.position === "DM"
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

  document
    .getElementById("playerPosition")
    .addEventListener("change", function () {
      const position = this.value;
      const gkFields = document.getElementById("gkFields");
      const outfieldFields = document.getElementById("outfieldFields");
      if (position === "GK") {
        gkFields.classList.remove("hidden");
        outfieldFields.classList.add("hidden");
      } else if (position) {
        gkFields.classList.add("hidden");
        outfieldFields.classList.remove("hidden");
      } else {
        gkFields.classList.add("hidden");
        outfieldFields.classList.add("hidden");
      }
    });

  savePlayer.addEventListener("click", function () {
    const name = document.getElementById("playerName").value;
    const photo = document.getElementById("playerPhoto").value;
    const nationality = document.getElementById("playerNationality").value;
    const flag = document.getElementById("playerFlag").value;
    const club = document.getElementById("playerClub").value;
    const logo = document.getElementById("playerLogo").value;
    const position = document.getElementById("playerPosition").value;

    let newPlayer = {};

    if (position === "GK") {
      newPlayer = {
        rating: parseInt(document.getElementById("playerRatingGK").value),
        diving: parseInt(document.getElementById("playerDiving").value),
        handling: parseInt(document.getElementById("playerHandling").value),
        kicking: parseInt(document.getElementById("playerKicking").value),
        reflexes: parseInt(document.getElementById("playerReflexes").value),
        speed: parseInt(document.getElementById("playerSpeed").value),
        positioning: parseInt(
          document.getElementById("playerPositioning").value
        ),
      };
    } else {
      newPlayer = {
        rating: parseInt(document.getElementById("playerRating").value),
        pace: parseInt(document.getElementById("playerPace").value),
        shooting: parseInt(document.getElementById("playerShooting").value),
        passing: parseInt(document.getElementById("playerPassing").value),
        dribbling: parseInt(document.getElementById("playerDribbling").value),
        defending: parseInt(document.getElementById("playerDefending").value),
        physical: parseInt(document.getElementById("playerPhysical").value),
      };
    }

    function getPlayerData() {
      const playerData = localStorage.getItem("players");
      return playerData ? JSON.parse(playerData) : [];
    }

    const playersArray = getPlayerData();
    playersArray.push({
      name,
      photo,
      nationality,
      flag,
      club,
      logo,
      position,
      ...newPlayer,
    });
    window.localStorage.setItem("players", JSON.stringify(playersArray));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    const select = document.querySelectorAll("select");
    select.forEach((input) => (input.value = ""));

    // document.getElementById("playerForm").innerHTML="";
    // gkFields.classList.add("hidden");
    // outfieldFields.classList.add("hidden");
    playerForm.classList.add("hidden");
    goalK();
    defense();
    midl();
    forwd();
  });

  const glkp = document.getElementById("kp");
  const defensers = Array.from(document.getElementsByClassName("DFNS"));
  const mildf = Array.from(document.getElementsByClassName("MIL"));
  const forw = Array.from(document.getElementsByClassName("FRW"));

  function getSelectedPlayers() {
    const selectedCards = document.querySelectorAll(
      '.formation-container div[data-position] img[src*="players"]'
    );
    return Array.from(selectedCards).map((img) => {
      const playerCard = img.closest("div");
      return playerCard.querySelector("h1.font-bold").textContent;
    });
  }

  function createPositionElement(position, player = null) {
    const positionDiv = document.createElement("div");

    if (player) {
      positionDiv.className = `absolute transform -translate-y-4`;
      positionDiv.innerHTML = `
        <div class="container relative h-[200px] w-[160px] scale-75 transform cursor-pointer">
          <img src="../badge_gold.webp" class="w-full h-full object-cover">
          <div class="absolute top-8 left-5 font-bold text-base">
            <h1>${player.rating}</h1>
            <h1>${position}</h1>
          </div>
          <div class="absolute w-full top-[25%] flex flex-col items-center">
            <img src="${player.photo}" class="w-20 h-20 rounded-full">
            <h1 class="font-bold text-sm text-black">${player.name}</h1>
            <div class="flex gap-[3px] font-bold text-[10px] text-black">
              <div class="flex flex-col items-center">
                
              </div>  
            </div>
            <div class="flex gap-1 mt-1">
              <img src="${player.flag}" class="w-5">
              <img src="${player.logo}" class="w-5">
            </div>
          </div>
        </div>`;

      positionDiv.addEventListener("click", () => {
        const choosePlyr = document.getElementById("choosePlyr");
        choosePlyr.classList.remove("hidden");
        const playerData = localStorage.getItem("players");
        const playersArray = playerData ? JSON.parse(playerData) : [];

        const selectedPlayers = getSelectedPlayers();

        const availablePlayers = playersArray.filter(
          (p) => p.position === position && !selectedPlayers.includes(p.name)
        );

        const playerChoiceElement = document.getElementById("ChoiceFR");
        playerChoiceElement.className = "flex overflow-x-auto gap-4 p-4";
        playerChoiceElement.innerHTML = "";

        availablePlayers.forEach((p) => {
          playerChoiceElement.appendChild(
            createPlayerCard(p, position, positionDiv)
          );
        });
      });
    } else {
      let colorClass = "";
      if (["RW", "LW", "ST"].includes(position)) {
        colorClass = "text-red-500 hover:bg-red-500";
      } else if (["CM", "DM", "AM", "LM", "RM"].includes(position)) {
        colorClass = "text-green-500 hover:bg-green-500";
      } else if (["CB", "LB", "RB"].includes(position)) {
        colorClass = "text-blue-500 hover:bg-blue-500";
      } else if (position === "GK") {
        colorClass = "text-yellow-500 hover:bg-yellow-500";
      }

      positionDiv.className = `flex justify-center items-center w-20 h-20 rounded-full absolute font-bold bg-black bg-opacity-80 ${colorClass} cursor-pointer hover:text-black hover:bg-opacity-80 ${
        position === "GK"
          ? "GK"
          : position === "ST"
          ? "FRW"
          : position.includes("B")
          ? "DFNS"
          : "MIL"
      }`;
      positionDiv.innerHTML = `<span>${position}</span>`;
    }

    positionDiv.dataset.position = position;
    return positionDiv;
  }

  function displayPlayers() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = "";

    players.forEach((player, index) => {
      const playerItem = document.createElement("div");
      playerItem.className =
        "player-item bg-[#D9D9D9] py-[7px] flex justify-between items-center my-1 cursor-pointer";
      playerItem.innerHTML = `
      <span>${player.name} (${player.position})</span>
      <button class="bg-blue-500 text-white px-2 py-1 rounded" data-index="${index}">Edit</button>
    `;
      playerList.appendChild(playerItem);
    });
  }

  document
    .getElementById("playerList")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        const index = event.target.dataset.index;
        const player = players[index];

        document.getElementById("playerName").value = player.name;
        document.getElementById("playerPhoto").value = player.photo;
        document.getElementById("playerNationality").value = player.nationality;
        document.getElementById("playerFlag").value = player.flag;
        document.getElementById("playerClub").value = player.club;
        document.getElementById("playerLogo").value = player.logo;
        document.getElementById("playerPosition").value = player.position;

        if (player.position === "GK") {
          document.getElementById("gkFields").classList.remove("hidden");
          document.getElementById("outfieldFields").classList.add("hidden");
          document.getElementById("playerRatingGK").value = player.rating;
          document.getElementById("playerDiving").value = player.diving;
          document.getElementById("playerHandling").value = player.handling;
          document.getElementById("playerKicking").value = player.kicking;
          document.getElementById("playerReflexes").value = player.reflexes;
          document.getElementById("playerSpeed").value = player.speed;
          document.getElementById("playerPositioning").value =
            player.positioning;
        } else {
          document.getElementById("gkFields").classList.add("hidden");
          document.getElementById("outfieldFields").classList.remove("hidden");
          document.getElementById("playerRating").value = player.rating;
          document.getElementById("playerPace").value = player.pace;
          document.getElementById("playerShooting").value = player.shooting;
          document.getElementById("playerPassing").value = player.passing;
          document.getElementById("playerDribbling").value = player.dribbling;
          document.getElementById("playerDefending").value = player.defending;
          document.getElementById("playerPhysical").value = player.physical;
        }

        document.getElementById("playerForm").classList.remove("hidden");

        document.getElementById("savePlayer").dataset.index = index;
      }
    });

  document.getElementById("savePlayer").addEventListener("click", function () {
    const index = this.dataset.index;
    const name = document.getElementById("playerName").value;
    const photo = document.getElementById("playerPhoto").value;
    const nationality = document.getElementById("playerNationality").value;
    const flag = document.getElementById("playerFlag").value;
    const club = document.getElementById("playerClub").value;
    const logo = document.getElementById("playerLogo").value;
    const position = document.getElementById("playerPosition").value;

    let playerStats = {};

    if (position === "GK") {
      playerStats = {
        rating: parseInt(document.getElementById("playerRatingGK").value),
        diving: parseInt(document.getElementById("playerDiving").value),
        handling: parseInt(document.getElementById("playerHandling").value),
        kicking: parseInt(document.getElementById("playerKicking").value),
        reflexes: parseInt(document.getElementById("playerReflexes").value),
        speed: parseInt(document.getElementById("playerSpeed").value),
        positioning: parseInt(
          document.getElementById("playerPositioning").value
        ),
      };
    } else {
      playerStats = {
        rating: parseInt(document.getElementById("playerRating").value),
        pace: parseInt(document.getElementById("playerPace").value),
        shooting: parseInt(document.getElementById("playerShooting").value),
        passing: parseInt(document.getElementById("playerPassing").value),
        dribbling: parseInt(document.getElementById("playerDribbling").value),
        defending: parseInt(document.getElementById("playerDefending").value),
        physical: parseInt(document.getElementById("playerPhysical").value),
      };
    }

    const updatedPlayer = {
      name,
      photo,
      nationality,
      flag,
      club,
      logo,
      position,
      ...playerStats,
    };

    if (index !== undefined) {
      players[index] = updatedPlayer;
    }
    const local = JSON.parse(localStorage.getItem("players"));
    local.setItem(updatedPlayer);
    console.log(local);
    displayPlayers();
    clearForm();
    document.getElementById("playerForm").classList.add("hidden");
  });

  function clearForm() {
    document.getElementById("playerName").value = "";
    document.getElementById("playerPhoto").value = "";
    document.getElementById("playerNationality").value = "";
    document.getElementById("playerFlag").value = "";
    document.getElementById("playerClub").value = "";
    document.getElementById("playerLogo").value = "";
    document.getElementById("playerPosition").value = "";
    document.getElementById("gkFields").classList.add("hidden");
    document.getElementById("outfieldFields").classList.add("hidden");
  }

  document.getElementById("closeForm").addEventListener("click", function () {
    document.getElementById("playerForm").classList.add("hidden");
    clearForm();
  });

  document.getElementById("mod").addEventListener("click", function () {
    displayPlayers();
  });

  const lineup = document.getElementById("lineup");
  lineup.addEventListener("change", function () {
    const selectedFormation = lineup.value;
    console.log(selectedFormation);
    if (selectedFormation == "4-4-2") {
      const one = document.getElementById("one");
      const two = document.getElementById("two");
      const three = document.getElementById("three");
      const four = document.getElementById("four");
      const five = document.getElementById("five");
      const six = document.getElementById("six");
      const onev = document.getElementById("onevalue");
      const threev = document.getElementById("threevalue");
      const fourv = document.getElementById("fourv");
      const sixv = document.getElementById("sixv");
      one.classList.remove("left-[600px]");
      two.classList.remove("left-[400px]");
      two.classList.remove("top-8");
      three.classList.remove("top-14");
      three.classList.remove("text-red-500");
      three.classList.remove("hover:bg-red-500");
      four.classList.remove("left-[500px]");
      four.classList.remove("top-[180px]");
      five.classList.remove("left-[725px]");
      six.classList.remove("top-[180px]");
      one.classList.add("left-[500px]");
      two.classList.add("left-[300px]");
      two.classList.add("top-14");
      three.classList.add("top-[160px]");
      three.classList.add("text-green-500");
      three.classList.add("hover:bg-green-500");
      four.classList.add("left-[650px]");
      four.classList.add("top-[250px]");
      five.classList.add("left-[800px]");
      six.classList.add("top-[160px]");
      onev.innerText = "ST";
      threev.innerText = "LM";
      fourv.innerText = "DM";
      sixv.innerText = "RM";
    } else if (selectedFormation == "4-3-3") {
      const one = document.getElementById("one");
      const two = document.getElementById("two");
      const three = document.getElementById("three");
      const four = document.getElementById("four");
      const five = document.getElementById("five");
      const six = document.getElementById("six");
      const onev = document.getElementById("onevalue");
      const threev = document.getElementById("threevalue");
      const fourv = document.getElementById("fourv");
      const sixv = document.getElementById("sixv");
      two.classList.add("left-[400px]");
      two.classList.add("top-8");
      one.classList.add("left-[600px]");
      three.classList.add("top-14");
      three.classList.add("text-red-500");
      three.classList.add("hover:bg-red-500");
      four.classList.add("top-[180px]");
      four.classList.add("left-[500px]");
      five.classList.add("left-[725px]");
      six.classList.add("top-[180px]");
      three.classList.remove("text-green-500");
      one.classList.remove("left-[500px]");
      two.classList.remove("left-[300px]");
      two.classList.remove("top-14");
      three.classList.remove("top-[160px]");
      three.classList.remove("hover:bg-green-500");
      four.classList.remove("left-[650px]");
      four.classList.remove("top-[250px]");
      five.classList.remove("left-[800px]");
      six.classList.remove("top-[160px]");
      onev.innerText = "RW";
      threev.innerText = "LW";
      fourv.innerText = "CM";
      sixv.innerText = "AM";
    }
  });
  function createPlayerCard(player, position, originalPositionDiv) {
    const playerCard = document.createElement("div");
    playerCard.className =
      "container relative h-[300px] flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity";
    playerCard.innerHTML = `	
      <img src="../badge_gold.webp" class="w-52">
      <div class="font-bold text-xl mx-12 -my-56">
          <h1>${player.rating}</h1>
          <h1>${player.position}</h1>
      </div>
      <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
          <img src="${player.photo}">
          <h1 class="font-bold flex justify-center">${player.name}</h1>
          <div class="flex gap-1 font-bold text-xs">
              <div class="div1 flex flex-col">
                  <h1>PAC</h1>
                  <h1>${player.pace}</h1>
              </div>
              <div class="div2 flex flex-col">
                  <h1>SHO</h1>
                  <h1>${player.shooting}</h1>
              </div>
              <div class="div3 flex flex-col">
                  <h1>PAS</h1>
                  <h1>${player.passing}</h1>
              </div>
              <div class="div4 flex flex-col">
                  <h1>DRI</h1>
                  <h1>${player.dribbling}</h1>
              </div>
              <div class="div5 flex flex-col">
                  <h1>DEF</h1>
                  <h1>${player.defending}</h1>
              </div>
              <div class="div6 flex flex-col">
                  <h1>PHY</h1>
                  <h1>${player.physical}</h1>
              </div>
          </div>
          <div>
              <img src="${player.flag}" class="w-5 mx-16 my-1">
              <img src="${player.logo}" class="w-5 mx-[95px] -my-[20px]">
          </div>
      </div>`;

    playerCard.addEventListener("click", () => {
      const newPositionElement = createPositionElement(position, player);

      const computedStyle = window.getComputedStyle(originalPositionDiv);
      newPositionElement.style.position = "absolute";
      newPositionElement.style.left = computedStyle.left;
      newPositionElement.style.top = computedStyle.top;
      originalPositionDiv.replaceWith(newPositionElement);

      document.getElementById("choosePlyr").classList.add("hidden");
    });

    return playerCard;
  }

  forw.forEach((frw) => {
    frw.addEventListener("click", function () {
      const choosePlyr = document.getElementById("choosePlyr");
      choosePlyr.classList.remove("hidden");
      const playerData = localStorage.getItem("players");
      const playersArray = playerData ? JSON.parse(playerData) : [];

      const position = frw.querySelector("span").textContent;
      const allfrw = playersArray.filter(
        (player) => player.position === position
      );

      const frElement = document.getElementById("ChoiceFR");
      const midlElement = document.getElementById("ChoiceMD");
      const def = document.getElementById("ChoiceDF");
      const goalElement = document.getElementById("ChoiceKp");
      const cancelChoice = document.getElementById("cancelChoice");
      
      frElement.className = "flex overflow-x-auto gap-4 p-4";
      frElement.innerHTML = "";
      
      allfrw.forEach((player) => {
        frElement.appendChild(createPlayerCard(player, position, frw));
      });
      
      midlElement.classList.add("hidden");
      goalElement.classList.add("hidden");
      frElement.classList.remove("hidden");
      def.classList.add("hidden");
      cancelChoice.addEventListener("click", function () {
        choosePlyr.classList.add("hidden");
      });
    });
  });

  mildf.forEach((midl) => {
    midl.addEventListener("click", function () {
      const choosePlyr = document.getElementById("choosePlyr");
      choosePlyr.classList.remove("hidden");
      const playerData = localStorage.getItem("players");
      const playersArray = playerData ? JSON.parse(playerData) : [];

      const position = midl.querySelector("span").textContent;
      const allmid = playersArray.filter(
        (player) => player.position === position
      );

      const midlElement = document.getElementById("ChoiceMD");
      const def = document.getElementById("ChoiceDF");
      const goalElement = document.getElementById("ChoiceKp");
      const frElement = document.getElementById("ChoiceFR");

      midlElement.className = "flex overflow-x-auto gap-4 p-4";
      midlElement.innerHTML = "";

      allmid.forEach((player) => {
        midlElement.appendChild(createPlayerCard(player, position, midl));
      });
      const cancelChoice = document.getElementById("cancelChoice");
      cancelChoice.addEventListener("click", function () {
        choosePlyr.classList.add("hidden");
      });
      midlElement.classList.remove("hidden");
      goalElement.classList.add("hidden");
      frElement.classList.add("hidden");
      def.classList.add("hidden");
    });
  });

  defensers.forEach((defender) => {
    defender.addEventListener("click", function () {
      const choosePlyr = document.getElementById("choosePlyr");
      choosePlyr.classList.remove("hidden");
      const playerData = localStorage.getItem("players");
      const playersArray = playerData ? JSON.parse(playerData) : [];

      const position = defender.querySelector("span").textContent;
      const allDef = playersArray.filter(
        (player) => player.position === position
      );

      const def = document.getElementById("ChoiceDF");
      const midlElement = document.getElementById("ChoiceMD");
      const goalElement = document.getElementById("ChoiceKp");
      const frElement = document.getElementById("ChoiceFR");

      def.className = "flex overflow-x-auto gap-4 p-4";
      def.innerHTML = "";

      allDef.forEach((player) => {
        def.appendChild(createPlayerCard(player, position, defender));
      });
      const cancelChoice = document.getElementById("cancelChoice");
      cancelChoice.addEventListener("click", function () {
        choosePlyr.classList.add("hidden");
      });
      midlElement.classList.add("hidden");
      goalElement.classList.add("hidden");
      frElement.classList.add("hidden");
      def.classList.remove("hidden");
    });
  });

  glkp.addEventListener("click", function () {
    const keeperschoice = document.getElementById("choosePlyr");
    keeperschoice.classList.remove("hidden");

    const playerData = localStorage.getItem("players");
    const playersArray = JSON.parse(playerData);
    const allkeepers = playersArray.filter(
      (player) => player.position === "GK"
    );

    const KP = document.getElementById("ChoiceKp");
    const def = document.getElementById("ChoiceDF");
    const midlElement = document.getElementById("ChoiceMD");
    const frElement = document.getElementById("ChoiceFR");

    KP.className = "flex overflow-x-auto gap-4 p-4";
    KP.innerHTML = "";

    allkeepers.forEach((player) => {
      KP.appendChild(createPlayerCard(player, "GK", glkp));
    });

    const cancelChoice = document.getElementById("cancelChoice");
      cancelChoice.addEventListener("click", function () {
        keeperschoice.classList.add("hidden");
      });
    midlElement.classList.add("hidden");
    KP.classList.remove("hidden");
    frElement.classList.add("hidden");
    def.classList.add("hidden");
  });
});

