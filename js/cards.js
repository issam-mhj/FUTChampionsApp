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
      (player) =>
        player.position === "CM" ||
        player.position === "AM" ||
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
  const defensers = Array.from(document.getElementsByClassName("DFNS"));
  const mildf = Array.from(document.getElementsByClassName("MIL"));
  const forw = Array.from(document.getElementsByClassName("FRW"));

  forw.forEach((frw) => {
    frw.addEventListener("click", function () {
      const choosePlyr = document.getElementById("choosePlyr");
      choosePlyr.classList.remove("hidden");
      const playerData = localStorage.getItem("players");
      const playersArray = playerData ? JSON.parse(playerData) : [];
      const positions = {
        RW: "RW",
        ST: "ST",
        LW: "LW",
      };
      const allfrw = playersArray.filter(
        (player) => player.position === positions[frw.innerText]
      );
      const midlElement = document.getElementById("ChoiceMD");
      const def = document.getElementById("ChoiceDF");
      const goalElement = document.getElementById("ChoiceKp");
      const frElement = document.getElementById("ChoiceFR");
      const playerCard = document.createElement("div");
      playerCard.className = "container relative  w-auto h-[300px]  ";
      frElement.innerHTML = ""; 
allfrw.forEach((player) => {
  if (player.position !== "GK") {
    const playerCard = document.createElement("div");
    playerCard.className = "container relative  w-auto h-[300px]";
    playerCard.innerHTML = `	
        <img src="../badge_gold.webp" class="w-52">
        <div class="font-bold text-xl mx-12 -my-56">
            <h1>${player.rating}</h1>
            <h1>CF</h1>
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
    frElement.appendChild(playerCard);
  }
});

      }
    );

    mildf.forEach((midl) => {
      midl.addEventListener("click", function () {
        const choosePlyr = document.getElementById("choosePlyr");
        choosePlyr.classList.remove("hidden");
        const playerData = localStorage.getItem("players");
        const playersArray = playerData ? JSON.parse(playerData) : [];
        const positions = {
          CM: "CM",
          AM: "AM",
          DM: "DM",
        };
        const allmid = playersArray.filter(
          (player) => player.position === positions[midl.innerText]
        );

        const midlElement = document.getElementById("ChoiceMD");
        const def = document.getElementById("ChoiceDF");
        const goalElement = document.getElementById("ChoiceKp");
        const frElement = document.getElementById("ChoiceFR");
        midlElement.innerHTML = "";
        const ul = document.createElement("ul");
        ul.classList.add("px-4", "py-5");

        allmid.forEach((player) => {
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
        }); //here
        midlElement.classList.remove("hidden");
        goalElement.classList.add("hidden");
        frElement.classList.add("hidden");
        def.classList.add("hidden");
        midlElement.appendChild(ul);

        const cancelChoice = document.getElementById("cancelChoice");
        cancelChoice.addEventListener("click", function () {
          choosePlyr.classList.add("hidden");
        });
      });
    });
    defensers.forEach((defender) => {
      defender.addEventListener("click", function () {
        const choosePlyr = document.getElementById("choosePlyr");
        choosePlyr.classList.remove("hidden");
        const playerData = localStorage.getItem("players");
        const playersArray = playerData ? JSON.parse(playerData) : [];
        let allDef = "";
        if (defender.innerText === "CB") {
          allDef = playersArray.filter((player) => player.position === "CB");
        } else if (defender.innerText === "LB") {
          allDef = playersArray.filter((player) => player.position === "LB");
        } else if (defender.innerText === "RB") {
          allDef = playersArray.filter((player) => player.position === "RB");
        }

        const def = document.getElementById("ChoiceDF");
        const midlElement = document.getElementById("ChoiceMD");
        const goalElement = document.getElementById("ChoiceKp");
        const frElement = document.getElementById("ChoiceFR");
        def.innerHTML = "";
        const ul = document.createElement("ul");
        ul.classList.add("px-4", "py-5");

        allDef.forEach((player) => {
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
        midlElement.classList.add("hidden");
        goalElement.classList.add("hidden");
        frElement.classList.add("hidden");
        def.classList.remove("hidden");
        def.appendChild(ul);

        const cancelChoice = document.getElementById("cancelChoice");
        cancelChoice.addEventListener("click", function () {
          choosePlyr.classList.add("hidden");
        });
      });
    });

    glkp.addEventListener("click", function () {
      let keeperschoice = document.getElementById("choosePlyr");
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
      midlElement.classList.add("hidden");
      KP.classList.remove("hidden");
      frElement.classList.add("hidden");
      def.classList.add("hidden");
      KP.appendChild(ul);

      const chooseUrPl = document.getElementById("cancelChoice");
      chooseUrPl.addEventListener("click", function () {
        let keeperschoice = document.getElementById("choosePlyr");
        keeperschoice.classList.add("hidden");
      });
    });
  });
});
