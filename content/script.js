// FUNCTIONS

// -- TUTORIAL START --
function beginTutorial() {
  let begin = prompt(`Save the kingdom? (Y/N)`);
  begin = begin.toUpperCase();
  if (begin === "N") {
    document.querySelector("#next-story").remove();
    document.querySelector("#main-story").textContent = `---- Game Over ----`;
  } else {
    storyCount++;
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
  }
  storyCount++;
}
// -- ROLE CREATOR --
function getRole() {
  let select = prompt(
    `What skills do you bring to the fight? (Type: W => Warrior (Easy), A => Assassin (Intermediate), or M => Mage (Hard))`
  );
  let roleSelect = select.toUpperCase();
  if (roleSelect === "W" || roleSelect === "M" || roleSelect === "A") {
    playerData.role = roleSelect;
  } else {
    alert("Invalid Selection, Please try again...");
    getRole();
  }
  if (playerData.role === "W") {
    document.querySelector(".role-logo").src = "images/warrior-char-final.png";
  } else if (playerData.role === "M") {
    document.querySelector(".role-logo").src = "images/mage-char-final.png";
  } else if (playerData.role === "A") {
    document.querySelector(".role-logo").src = "images/assassin-char-final.png";
  }
  return playerData.role;
}

// -- NAME ASSIGNMENT --
function getName() {
  let result = prompt("Tell us, what is your name?");
  if (result.length >= 1) {
    document.querySelector("#mob-pic").src = "images/castle-final.png";
    playerData.name = result;
    return playerData.name;
  } else {
    alert("Invalid Input, please try again...");
    getName();
  }
}

// -- GAME OVER --
function gameOver() {
  document.querySelector("#next-story").remove();
  document.querySelector("#main-story").textContent = `---- Game Over ----`;
}

// -- BATTLE SCREEN --
function battle(mob, player) {
  document.querySelector("#mob-hp").textContent = mob.hp;
  // ---- ATTACK 1 ----
  document.querySelector("#attack-1").addEventListener("click", function () {
    let curNrg = Number(document.querySelector(".energy").textContent);
    if (curNrg < player.skills[0][1].nrg) {
      return;
    }
    curNrg = curNrg - player.skills[0][1].nrg;
    document.querySelector(".energy").textContent = curNrg;
    let mobHP = Number(document.querySelector("#mob-hp").textContent);
    console.log(mobHP);
    let playerHP = Number(document.querySelector(".health").textContent);
    console.log(playerHP);
    let mobDmg;
    let playerDmg;
    if (player.role === "M" || player.role === "W") {
      mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      playerDmg = dmgGen(player.skills[0][1].dmg);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        playerDmg = dmgGen(player.skills[0][1].dmg);
      } else {
        mobDmg = dmgGen(mob.attack);
        playerDmg = dmgGen(player.skills[0][1].dmg);
      }
    }
    if (mobHP - playerDmg <= 0) {
      alert(`--Victory!--`);
      disableButtons(false, true);
      if (partCount === 1) {
        document.querySelector("#mob-pic").src = "images/boy-happy-final.png";
      } else if (partCount === 3) {
        document.querySelector("#mob-pic").src =
          "images/continue-to-castle-final.png";
      } else if (partCount === 4) {
        document.querySelector("#mob-pic").src =
          "images/destroyed-town-final.png";
      }

      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      if (storyCount === storyText[partCount].length) {
        partCount++;
        storyCount = 0;
      } else {
        storyCount++;
      }
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];

      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    if (
      document.querySelector(".nrg-pots").textContent === 0 &&
      document.querySelector(".energy").textContent === 0
    ) {
      document.querySelector("#main-story").textContent =
        "You've run out of energy...";
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
  // ---- ATTACK 2 ----
  document.querySelector("#attack-2").addEventListener("click", function () {
    let curNrg = Number(document.querySelector(".energy").textContent);
    if (curNrg < player.skills[1][1].nrg) {
      return;
    }
    curNrg = curNrg - player.skills[1][1].nrg;
    document.querySelector(".energy").textContent = curNrg;
    let mobHP = Number(document.querySelector("#mob-hp").textContent);
    console.log(mobHP);
    let playerHP = Number(document.querySelector(".health").textContent);
    console.log(playerHP);
    let mobDmg;
    let playerDmg;
    if (player.role === "M" || player.role === "W") {
      mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      playerDmg = dmgGen(player.skills[1][1].dmg);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        playerDmg = dmgGen(player.skills[1][1].dmg);
      } else {
        mobDmg = dmgGen(mob.attack);
        playerDmg = dmgGen(player.skills[1][1].dmg);
      }
    }
    if (mobHP - playerDmg <= 0) {
      alert(`--Victory!--`);
      disableButtons(false, true);
      if (partCount === 1) {
        document.querySelector("#mob-pic").src = "images/boy-happy-final.png";
      } else if (partCount === 3) {
        document.querySelector("#mob-pic").src =
          "images/continue-to-castle-final.png";
      } else if (partCount === 4) {
        document.querySelector("#mob-pic").src =
          "images/destroyed-town-final.png";
      }
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      if (storyCount === storyText[partCount].length) {
        partCount++;
        storyCount = 0;
      } else {
        storyCount++;
      }
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];

      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    if (
      document.querySelector(".nrg-pots").textContent === 0 &&
      document.querySelector(".energy").textContent === 0
    ) {
      document.querySelector("#main-story").textContent =
        "You've run out of energy...";
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
  // ---- ATTACK 3 ----
  document.querySelector("#attack-3").addEventListener("click", function () {
    let curNrg = Number(document.querySelector(".energy").textContent);
    if (curNrg < player.skills[2][1].nrg) {
      return;
    }
    curNrg = curNrg - player.skills[2][1].nrg;
    document.querySelector(".energy").textContent = curNrg;
    let mobHP = Number(document.querySelector("#mob-hp").textContent);
    console.log(mobHP);
    let playerHP = Number(document.querySelector(".health").textContent);
    console.log(playerHP);
    let mobDmg;
    let playerDmg;
    if (player.role === "M" || player.role === "W") {
      mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      playerDmg = dmgGen(player.skills[2][1].dmg);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        playerDmg = dmgGen(player.skills[2][1].dmg);
      } else {
        mobDmg = dmgGen(mob.attack);
        playerDmg = dmgGen(player.skills[2][1].dmg);
      }
    }
    if (mobHP - playerDmg <= 0) {
      alert(`--Victory!--`);
      disableButtons(false, true);
      if (partCount === 1) {
        document.querySelector("#mob-pic").src = "images/boy-happy-final.png";
      } else if (partCount === 3) {
        document.querySelector("#mob-pic").src =
          "images/continue-to-castle-final.png";
      } else if (partCount === 4) {
        document.querySelector("#mob-pic").src =
          "images/destroyed-town-final.png";
      }
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      if (storyCount === storyText[partCount].length) {
        partCount++;
        storyCount = 0;
      } else {
        storyCount++;
      }
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];

      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    if (
      document.querySelector(".nrg-pots").textContent === 0 &&
      document.querySelector(".energy").textContent === 0
    ) {
      document.querySelector("#main-story").textContent =
        "You've run out of energy...";
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
  // ---- ATTACK 4 ----
  document.querySelector("#attack-4").addEventListener("click", function () {
    let curNrg = Number(document.querySelector(".energy").textContent);
    if (curNrg < player.skills[3][1].nrg) {
      return;
    }
    curNrg = curNrg - player.skills[3][1].nrg;
    document.querySelector(".energy").textContent = curNrg;
    let mobHP = Number(document.querySelector("#mob-hp").textContent);
    console.log(mobHP);
    let playerHP = Number(document.querySelector(".health").textContent);
    console.log(playerHP);
    let mobDmg;
    let playerDmg;
    if (player.role === "M" || player.role === "W") {
      mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      playerDmg = dmgGen(player.skills[3][1].dmg);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        playerDmg = dmgGen(player.skills[3][1].dmg);
      } else {
        mobDmg = dmgGen(mob.attack);
        playerDmg = dmgGen(player.skills[3][1].dmg);
      }
    }
    if (mobHP - playerDmg <= 0) {
      alert(`--Victory!--`);
      disableButtons(false, true);
      if (partCount === 1) {
        document.querySelector("#mob-pic").src = "images/boy-happy-final.png";
      } else if (partCount === 3) {
        document.querySelector("#mob-pic").src =
          "images/continue-to-castle-final.png";
      } else if (partCount === 4) {
        document.querySelector("#mob-pic").src =
          "images/destroyed-town-final.png";
      }
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      if (storyCount === storyText[partCount].length) {
        partCount++;
        storyCount = 0;
      } else {
        storyCount++;
      }
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];

      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    if (
      document.querySelector(".nrg-pots").textContent === 0 &&
      document.querySelector(".energy").textContent === 0
    ) {
      document.querySelector("#main-story").textContent =
        "You've run out of energy...";
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
}

// -- DISPLAY SKILLS --
function skillList() {
  result = "";
  for (let i = 0; i < playerData.skills.length; i++) {
    const currentIndex = playerData.skills[i];
    result += `--${currentIndex[0]}--\nDamage 💥: ${currentIndex[1].dmg}\n`;
  }
  return result;
}

// -- DAMAGE GENERATOR --
function dmgGen(skillDmg) {
  const randomNum = Math.floor(Math.random() * skillDmg) + 1;
  const result = skillDmg + randomNum;
  if (result > skillDmg * 2) {
    result += skillDmg / 2;
    alert(`--CRITICAL HIT--`);
  }
  return result;
}

// -- DAMAGE REDUCTION GENERATOR --
function dmgReducGen() {
  const randomNum = Math.floor(Math.random() * 2) + 1;
  const result = playerData.def + randomNum;
  return result;
}

// -- DODGE CHECK GENERATOR --
function dodgeCheck(enemyToHit) {
  const randomNum = Math.floor(Math.random() * 2) + 1;
  const result = playerData.def + randomNum;
  if (result > enemyToHit) {
    return true;
  } else {
    return false;
  }
}

// -- TO HIT GENERATOR --
function toHit() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  if (randomNum >= 3) {
    return true;
  } else {
    return false;
  }
}

// -- BOX ITEM GENERATOR --
function openBox() {
  const item = Math.floor(Math.random() * 2) + 1;
  let result = undefined;
  if (item === 1) {
    result = "a Health Potion!";
  } else if (item === 2) {
    result = "an old boot... Great...";
  } else if (item === 3) {
    result = "a pair of dirty underwear... Thats nasty...";
  } else if (item === 4) {
    result = "a rusted fork... Useful...";
  } else if (item === 5) {
    result = "an Energy Potion!";
  } else {
    result = "nothing... Wonderful...";
  }
  return result;
}

// -- USER AND MOB DATA --
// PLAYER DATA OBJ
const playerData = {
  name: "",
  role: "",
  roleNameGen: function () {
    if (this.role === "W") {
      this.roleName = "Warrior";
      document.querySelector(".tooltip-content-player").textContent =
        "I SWING BIG SWORD!";
    } else if (this.role === "M") {
      this.roleName = "Mage";
      document.querySelector(".tooltip-content-player").textContent =
        "Don't test me...";
    } else if (this.role === "A") {
      this.roleName = "Assassin";
      document.querySelector(".tooltip-content-player").textContent =
        "The night is my ally...";
    }
    return this.roleName;
  },
  skillGen: function () {
    if (this.role === "W") {
      this.skills = warriorSkils;
    } else if (this.role === "M") {
      this.skills = mageSkils;
    } else if (this.role === "A") {
      this.skills = assassinSkils;
    }
    document.querySelector(".attack-1-dmg").textContent =
      playerData.skills[0][0];
    document.querySelector("#attack-1").textContent =
      playerData.skills[0][1].dmg + " DMG";
    document.querySelector(".attack-1-nrg").textContent =
      "-" + playerData.skills[0][1].nrg + " ⚡";
    document.querySelector(".attack-2-dmg").textContent =
      playerData.skills[1][0];
    document.querySelector("#attack-2").textContent =
      playerData.skills[1][1].dmg + " DMG";
    document.querySelector(".attack-2-nrg").textContent =
      "-" + playerData.skills[1][1].nrg + " ⚡";
    document.querySelector(".attack-3-dmg").textContent =
      playerData.skills[2][0];
    document.querySelector("#attack-3").textContent =
      playerData.skills[2][1].dmg + " DMG";
    document.querySelector(".attack-3-nrg").textContent =
      "-" + playerData.skills[2][1].nrg + " ⚡";
    document.querySelector(".attack-4-dmg").textContent =
      playerData.skills[3][0];
    document.querySelector("#attack-4").textContent =
      playerData.skills[3][1].dmg + " DMG";
    document.querySelector(".attack-4-nrg").textContent =
      "-" + playerData.skills[3][1].nrg + " ⚡";
    return this.skills;
  },
  health: 100,
  energy: 50,
  healthPots: 0,
  defGen: function () {
    if (this.role === "M") {
      this.defType = "Cloth 🧙";
      this.def = 0;
    } else if (this.role === "W") {
      this.defType = "Armor 🛡️";
      this.def = 2;
    } else if (this.role === "A") {
      this.defType = "Dodge 🥷";
      this.def = 3;
    }
    return this.defType;
  },
};

// ROLE SKILLS
// -- WARRIOR --
const warriorSkils = [
  [
    "Punch",
    {
      dmg: 1,
      nrg: 1,
    },
  ],
  [
    "Kick",
    {
      dmg: 2,
      nrg: 2,
    },
  ],
  [
    "Swing",
    {
      dmg: 4,
      nrg: 3,
    },
  ],
  [
    "Stab",
    {
      dmg: 3,
      nrg: 2,
    },
  ],
];

// -- MAGE --
const mageSkils = [
  [
    "Zap",
    {
      dmg: 2,
      nrg: 1,
    },
  ],
  [
    "Shock",
    {
      dmg: 3,
      nrg: 2,
    },
  ],
  [
    "Missle",
    {
      dmg: 3,
      nrg: 3,
    },
  ],
  [
    "Bolt",
    {
      dmg: 4,
      nrg: 4,
    },
  ],
];

// -- ASSASSIN --
const assassinSkils = [
  [
    "Jab",
    {
      dmg: 1,
      nrg: 1,
    },
  ],
  [
    "Slice",
    {
      dmg: 2,
      nrg: 2,
    },
  ],
  [
    "Stab",
    {
      dmg: 3,
      nrg: 3,
    },
  ],
  [
    "Cut",
    {
      dmg: 2,
      nrg: 1,
    },
  ],
];

// -- ENEMY STATS --
const easyMob1 = {
  name: "Orc",
  hp: 30,
  def: 1,
  attack: 2,
  toHit: 2,
};

const easyMob2 = {
  name: "Orc",
  hp: 30,
  def: 1,
  attack: 2,
  toHit: 3,
};

const medMob1 = {
  name: "Armored Orc",
  hp: 40,
  def: 3,
  attack: 3,
  toHit: 4,
};

const medMob2 = {
  name: "Armored Orc",
  hp: 40,
  def: 3,
  attack: 3,
  toHit: 4,
};

const hardMob = {
  name: "Armored Orc Leader",
  hp: 50,
  def: 4,
  attack: 4,
  toHit: 5,
};

const bossMob = {
  name: "Orc Commander",
  hp: 60,
  def: 5,
  attack: 5,
  toHit: 6,
};

// -- PLAYER NAME PROMT --
getName();

// -- PLAYER ROLE SELECTION --
getRole();

// -- PLAYER SHEET BUILDER --
playerData.roleNameGen();
playerData.skillGen();
playerData.defGen();

// -- SKILL DISPLAY --
document.querySelector("#player-name").textContent = playerData.name;
disableButtons(false, true);

// -- LEFT COTTAGE --
const leftCottagePick = [
  `You make your way to the cottage on the left`,
  `As you enter you see a create in the corner with a broken lock`,
  `As you open it you find ${openBox()}`,
  `The cottage seems safe so you decide to rest to restore your strength`,
  `max-power`,
  `You rest and restore yourself to full power!`,
];

// -- RIGHT COTTAGE --
const rightCottagePick = [
  `As you approach the cottage on the right you notice a shadow moving inside`,
  `You open the door and find yourself standing in front of another Orc!`,
  `---- IN BATTLE ----`,
];

// -- HELP WOMAN AND DAUGHTER --
const helpWoman = [
  `You tip the girls head back and slowly let her drink the potion`,
  `Almost instantly she begins to look better`,
  `Woman: "Oh thank you! You've saved her! I wont forget this!"`,
  `${playerData.name}: "Of course, it's the least I can do"`,
  `You stand up bid them farwell`,
];

// -- DONT HELP WOMAN AND DAUGHTER --
const dontHelpWoman = [
  `Woman: "I can't believe you wont help us..."`,
  `You take the vial and bid them good luck, but anything that could help you save this kingdom is needed`,
];

// -- WOMAN HELPS YOU --
const sheHelps = [
  `Just then, the young woman you helpped earlier throws a stone, hitting the Orcs helmet`,
  `Armored Orc: "HEY! WHO THROW THAT!"`,
  `The Orc walks off in frustration, unable to find the young woman`,
  `You take advantage of the opportunity and make your way into the keep`,
];

// -- WOMAN DOESNT HELP YOU --
const noHelp = [
  `While his back is turned, you take advantage and strike!`,
  "---- IN BATTLE ----",
  `As the Orc collapses you make your way into the keep`,
];

// -- STORY BOARD --
const storyText = {
  1: [
    `You have arrived just in time, ${playerData.name}! ${playerData.roleName}'s of your skill are needed greatly!`,
    `The land of the king has been attacked by an evil hoard of Orcs!`,
    `Only a few soldiers hold the line to the keep, but their numbers are dwindling`,
    `${playerData.name}, do you stand up to the task of cleansing the kingdom of these filthy Orcs?`,
    "-- Do you Continue? --",
    `That's Excellent!`,
    `Before you go let me give you these health and energy potions to help you on your jounrey`,
    `Good luck ${playerData.name}!`,
    `You make your way to the castle gates`,
    `A young boy is running towards you as he is being chased by an Orc!`,
    `Boy: "Help me! It's going to get me!"`,
    `The boy runs behind you as the Orc draws near!`,
    `---- IN BATTLE ----`,
    `-- Next Part --`,
  ],
  2: [
    `You turn to the boy`,
    `Boy: "Thank you adventurer!`,
    `The boy gestures ahead`,
    `Boy: "My home is just up there"`,
    `Boy: "If you need to rest, feel free to take shelter inside"`,
    `The boy turns and continues off into the distance`,
    `The battle has drained some energy and the idea of rest sounds like a good idea`,
    `Ahead of you reside two cottages`,
    `The cottage on your left looks abandoned and broken`,
    `The cottage on your right has a warm glow raidiating from the window`,
    `The boy didn't say which was his`,
    "Which cottage do you pick?",
    "-- Next Part --",
  ],
  3: [],
  4: [
    `You exit the cottage and continue your journey forward`,
    `A foul stench drifts into your nostrils`,
    `You hear the sound of scrapping metal`,
    `A few steps in front of the castle gates, a large Orc stands blocking it`,
    `Orc: "YOU NO PASS HUMAN!"`,
    `Orc: "I CRUSH AND EAT YOU FOR BREAKFAST!"`,
    `You ready your weapon and prepare to fight!`,
    `---- IN BATTLE ----`,
  ],
  5: [
    `The large armored Orc drops to the ground with a crashing thud`,
    `A small vial falls from one of its puches`,
    `You add the potion to your inventory`,
    `Tired and bleeding, you seek aid within the city gates`,
    `As you enter, you see the absolute distruction of the city`,
    `Stranger: "Psst.."`,
    `You look around to see who made that noise and you see a young woman hiding behind a barrel`,
    `She gestures you over while looking for any nearby Orcs`,
    `You approach the young woman you notice she has a young girl who looks sick`,
    `Woman: "Please, is there anything you can do to help her?"`,
    `You look around and notice something glistening from inside a barrel`,
    `You reach in and discover its a health potion`,
    `Do you keep the health potion for yourself or help the little girl?`,
    "check",
  ],
  6: [],
  7: [
    `You continue your journey deeper into the castle's center`,
    `As you approach an inner gate to access the keep, a deep, rumbling voice echos against the stone`,
    `Armored Orc Leader: "YOU.. GO.. NO... FURTHER"`,
    `The monstrous Orc slams a massive hammer against the stone wall, throwing splintered stone in every direction`,
    `Armored Orc Leader: "YOU DIE.....NOW!!!"`,
    `You ready your self for an epic battle for survival!`,
    `---- IN BATTLE ----`,
  ],
  8: [
    `The collosus beast falls to his back, trembling the ground around you`,
    `You begin to think this quest was much more than you asked for`,
    `${playerData.name}: "Where are all of the kingdom's soldiers??"`,
    `${playerData.name}: "Could they have truly all been wipped out? Am I to late?"`,
    `You push the inner gates open just enough to see to the other side`,
    `An armored Orc patrols the grounds outside the doors to the keep`,
    `${playerData.name}: "Did they breach the keep?"`,
    `You sneek through the gates while the armored Orc isn't looking`,
    `As you quietly make your way, behind crumbled structures towards the doors to the keep, you find a small create`,
    `As you open it you find ${openBox()}`,
    `You make your way towards the doors`,
    `How will you make it past the guard?`,
    "check",
  ],
  9: [],
  10: [
    `Your suprised at the condition of the keep`,
    `Nothing is destroyed`,
    `Statues still stand and a chest of gold coins remains untouched`,
    `As you make your way to the throne room you hear voices from up ahead`,
    `Orc Commander: "THIS LAST CHANCE! GIVE ORCS STONE OR CASTLE WILL CRUMBLE!"`,
    `King: "That stone does not belong to you. It is the symbol of my people..."`,
    `The king lets out a scream of pain`,
    `King: "No matter what you do to me...You will not get what you came here for..."`,
    `Orc Commander: "FINE... WE WILL DESTROY THE REST OF YOUR CITY UNTIL WE FIND IT!"`,
    `Orc Commander: "THEIR LIVES WILL BE YOUR DOING!"`,
    `This is it, the final battle...`,
    `You enter the throne room`,
    `${playerData.name}: "STOP!"`,
    `Both the King and the Orc Commander turn in suprise`,
    `Orc Commander: "WHO YOU?!"`,
    `As you slowly make your way towards the Orc Commander, you begin to pick up speed`,
    `${playerData.name}: "I am death..."`,
    `${playerData.name}: "I am the destroyer of orcs..."`,
    `${playerData.name}: "I am vengance..."`,
    `${playerData.name}: "I..."`,
    `${playerData.name}: "Am..."`,
    `${playerData.name}: "${playerData.name}!!!!`,
    "---- IN BATTLE ----",
  ],
  11: [
    `The Orc Commander falls to the ground with a look of disbelief`,
    `Orc Commander: "YoU... CaNNot.... KILL...... MEeeee...."`,
    `The Orc Commander lets out his final breath and drops his sword`,
    `The King looks at you as a tear rolls down his face`,
    `King: "You... You did it..."`,
    `King: "You saved us all... Thank you ${playerData.name}... You are forever in our debt!"`,
    `${playerData.name}: "I must know, what was the stone that he was referring to?"`,
    `The King stands and reaches into his pocket`,
    `He pulls out a glowing stone`,
    `King: "This is a seeing stone"`,
    `King: "So long the bearer has a strong mind, the stone allows them to travel anywhere they desire"`,
    `King: "This stone was passed down throughout the ages from King to King, only to be used by Kings"`,
    `King: "You've proven your worth against the Orcs. I see it only fair to allow you the opportunity to try it yourself"`,
    `He hands you the stone slowly`,
    `As you take hold of it, images begin to flash through your mind`,
    `First of the kingdom, then of the land surrounding it`,
    `You try to focus on a single place in the world`,
    "You think of your home and your family which you havent seen in ages",
    "The images shift to inside your house, where your family sits by a fire sharing a meal",
    `You hear the kings voice echo in your mind`,
    'King: "To make the journey, you must truly see yourself there"',
    "As you try to focus a large explosion blasts a whole through the keeps walls",
    `You try to drop the stone but it seems to have bound itself to you`,
    `You hear the Kings voice in your mind`,
    `King: "Protect the stone!!"`,
    "Your focus strains and bright white light encapsulates you",
    `When the light disaptes, you find yourself standing on a beach in an unfamiliar land`,
    `The stone falls from your grasp and its glow diminished`,
    `You pick up the stone to try and get back but you can tell its energy seems to be drained`,
    `You look around you and back at the stone`,
    `It looks like your story isn't over just yet...`,
    `---TO BE CONTINUED---`,
  ],
};

let storyCount = 0;
let partCount = 1;
let help = true;

// -- DISABLE FUNCTION --
function disableButtons(story, battle) {
  document.querySelector("#next-story").disabled = story;
  document.querySelector("#attack-1").disabled = battle;
  document.querySelector("#attack-2").disabled = battle;
  document.querySelector("#attack-3").disabled = battle;
  document.querySelector("#attack-4").disabled = battle;
}

document.querySelector("#story-title").textContent = "Main Story";

// -- Click Through Story --
document.querySelector("#next-story").addEventListener("click", function () {
  // Initialize Current Part
  // Check if end of story array
  if (
    document.querySelector("#main-story").textContent === `---- IN BATTLE ----`
  ) {
    disableButtons(true, false);
    // -- FIRST BATTLE --
    if (partCount === 1) {
      document.querySelector("#mob-name").textContent = easyMob1.name;
      document.querySelector("#mob-hp").textContent = easyMob1.hp;
      document.querySelector("#mob-pic").src = "images/orc-1-final.png";
      battle(easyMob1, playerData);
      // -- EXTRA BATTLE --
    } else if (partCount === 3) {
      document.querySelector("#mob-name").textContent = easyMob2.name;
      document.querySelector("#mob-hp").textContent = easyMob2.hp;
      document.querySelector("#mob-pic").src =
        "images/inside-right-cabin-final.png";
      battle(easyMob2, playerData);
    } else if (partCount === 4) {
      document.querySelector("#mob-name").textContent = medMob1.name;
      document.querySelector("#mob-hp").textContent = medMob1.hp;
      document.querySelector("#mob-pic").src = "images/orc-2-final.png";
      battle(medMob1, playerData);
    } else if (partCount === 7) {
      document.querySelector("#mob-name").textContent = medMob2.name;
      document.querySelector("#mob-hp").textContent = medMob2.hp;
      document.querySelector("#mob-pic").src = "images/orc-3-final.png";
      battle(medMob2, playerData);
    } else if (partCount === 9) {
      document.querySelector("#mob-name").textContent = hardMob.name;
      document.querySelector("#mob-hp").textContent = hardMob.hp;
      document.querySelector("#mob-pic").src = "images/orc-3-final.png";
      battle(hardMob, playerData);
    } else if (partCount === 10) {
      document.querySelector("#mob-name").textContent = bossMob.name;
      document.querySelector("#mob-hp").textContent = bossMob.hp;
      document.querySelector("#mob-pic").src = "images/final-orc-final.png";
      battle(bossMob, playerData);
    }
    return;
  }
  if (storyCount < storyText[partCount].length) {
    // -- TUTORIAL CHECK --
    if (
      document.querySelector("#main-story").textContent ===
      "-- Do you Continue? --"
    ) {
      beginTutorial();
      return;

      // -- COTTAGE SELECTION CHECK --
    } else if (
      document.querySelector("#main-story").textContent ===
      "Which cottage do you pick?"
    ) {
      let cottage = prompt(
        `"L" => cottage on the left\n"R" => cottage on the right`
      );
      cottage = cottage.toUpperCase();

      // -- LEFT COTTAGE CHOICE --
      if (cottage === "L") {
        storyText[3] = leftCottagePick;
        partCount++;
        storyCount = 0;
        document.querySelector("#main-story").textContent =
          storyText[partCount][storyCount];
        document.querySelector("#mob-pic").src = "images/left-cabin-final.png";
        return;

        // -- RIGHT COTTAGE CHOICE --
      } else if (cottage === "R") {
        storyText[3] = rightCottagePick;
        partCount++;
        storyCount = 0;
        document.querySelector("#main-story").textContent =
          storyText[partCount][storyCount];
        document.querySelector("#mob-pic").src = "images/right-cabin-final.png";
        return;
        // -- INVALID SELECTION --
      } else {
        alert(`Invalid entry, please try again...`);
      }

      // -- SHOW COTTAGE PICTURES --
    } else if (
      document.querySelector("#main-story").textContent ===
      `Ahead of you reside two cottages`
    ) {
      document.querySelector("#mob-pic").src =
        "images/cottage-choice-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- POTION FROM ORC --
    } else if (
      document.querySelector("#main-story").textContent ===
      `A small vial falls from one of its puches`
    ) {
      let chance = Math.floor(Math.random() * 2) + 1;
      let val;
      if (chance < 2) {
        val = Number(document.querySelector(".nrg-pots").textContent) + 1;
        document.querySelector(".nrg-pots").textContent = val;
      } else {
        val = Number(document.querySelector(".hp-pots").textContent) + 1;
        document.querySelector(".hp-pots").textContent = val;
      }
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- MOVING ON TO CASTLE --
    } else if (
      document.querySelector("#main-story").textContent ===
      `You rest and restore yourself to full power!`
    ) {
      document.querySelector("#mob-pic").src =
        "images/continue-to-castle-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- IN ARMORY --
    } else if (
      document.querySelector("#main-story").textContent ===
      `Your suprised at the condition of the keep`
    ) {
      document.querySelector("#mob-pic").src = "images/castle-hall-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- GREATFUL KING --
    } else if (
      document.querySelector("#main-story").textContent ===
      `The King looks at you as a tear rolls down his face`
    ) {
      document.querySelector("#mob-pic").src = "images/king-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- DOOR TO THRONE ROOM --
    } else if (
      document.querySelector("#main-story").textContent ===
      `As you make your way to the throne room you hear voices from up ahead`
    ) {
      document.querySelector("#mob-pic").src =
        "images/door-to-throne-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- DOOR TO THRONE ROOM --
    } else if (
      document.querySelector("#main-story").textContent ===
      `${playerData.name}: "Am..."`
    ) {
      if (playerData.role === "M") {
        document.querySelector("#mob-pic").src = "images/mage-close-up.png";
      } else if (playerData.role === "W") {
        document.querySelector("#mob-pic").src = "images/warrior-close-up.png";
      } else {
        document.querySelector("#mob-pic").src = "images/assassin-close-up.png";
      }
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- THE STONE --
    } else if (
      document.querySelector("#main-story").textContent ===
      `He pulls out a glowing stone`
    ) {
      document.querySelector("#mob-pic").src = "images/dream-stone-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- EXPLOSION --
    } else if (
      document.querySelector("#main-story").textContent ===
      "As you try to focus a large explosion blasts a whole through the keeps walls"
    ) {
      document.querySelector("#mob-pic").src = "images/castle-boom-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- WARP --
    } else if (
      document.querySelector("#main-story").textContent ===
      "Your focus strains and bright white light encapsulates you"
    ) {
      document.querySelector("#mob-pic").src = "images/portal-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- OPENING A CRATE FOR HP --
    } else if (
      document.querySelector("#main-story").textContent ===
      `As you open it you find a Health Potion!`
    ) {
      let val = Number(document.querySelector(".hp-pots").textContent) + 1;
      document.querySelector(".hp-pots").textContent = val;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- OPENING A CRATE FOR HP --
    } else if (
      document.querySelector("#main-story").textContent ===
      `As you open it you find an Energy Potion!`
    ) {
      let val = Number(document.querySelector(".nrg-pots").textContent) + 1;
      document.querySelector(".nrg-pots").textContent = val;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- ORC LEADER DEFEATED --
    } else if (
      document.querySelector("#main-story").textContent ===
      `The Orc Commander falls to the ground with a look of disbelief`
    ) {
      document.querySelector("#mob-pic").src =
        "images/orc-leader-defeated-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- BEACH --
    } else if (
      document.querySelector("#main-story").textContent ===
      `When the light disaptes, you find yourself standing on a beach in an unfamiliar land`
    ) {
      document.querySelector("#mob-pic").src = "images/beach-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- SHOW INSIDE RIGHT COTTAGE PICTURE --
    } else if (
      document.querySelector("#main-story").textContent ===
      `As you approach the cottage on the right you notice a shadow moving inside`
    ) {
      document.querySelector("#mob-pic").src =
        "images/inside-right-cabin-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- BOY RUNNING AWAY --
    } else if (
      document.querySelector("#main-story").textContent ===
      `Boy: "If you need to rest, feel free to take shelter inside"`
    ) {
      document.querySelector("#mob-pic").src =
        "images/boy-running-away-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- WOMAN HIDING BEHIND BARREL --
    } else if (
      document.querySelector("#main-story").textContent ===
      `You look around to see who made that noise and you see a young woman hiding behind a barrel`
    ) {
      document.querySelector("#mob-pic").src = "images/woman-barrel-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- SHOW ORC COMMANDER --
    } else if (
      document.querySelector("#main-story").textContent ===
      `As you approach an inner gate to access the keep, a deep, rumbling voice echos against the stone`
    ) {
      document.querySelector("#mob-pic").src = "images/orc-3-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- BOY IS HAPPY --
    } else if (
      document.querySelector("#main-story").textContent ===
      `You turn to the boy`
    ) {
      document.querySelector("#mob-pic").src = "images/boy-happy-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- BOY RUNNING TOWARDS YOU --
    } else if (
      document.querySelector("#main-story").textContent ===
      `A young boy is running towards you as he is being chased by an Orc!`
    ) {
      document.querySelector("#mob-pic").src = "images/boy-running-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- SHOW INSIDE LEFT COTTAGE PICTURE --
    } else if (
      document.querySelector("#main-story").textContent ===
      `As you enter you see a create in the corner with a broken lock`
    ) {
      document.querySelector("#mob-pic").src =
        "images/inside-left-cabin-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- HELP WOMAN OR NOT --
    } else if (
      document.querySelector("#main-story").textContent ===
      `Do you keep the health potion for yourself or help the little girl?`
    ) {
      let choice = prompt(`Press "Y" to help\nPress "N" to keep the potion`);
      choice = choice.toUpperCase();
      if (choice === "Y") {
        help = true;
        storyText[6] = helpWoman;
      } else {
        playerData.healthPots++;
        help = false;
        storyText[6] = dontHelpWoman;
      }
      partCount++;
      storyCount = 0;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      return;

      // -- DOES THE WOMAN HELP YOU OR NOT --
    } else if (
      document.querySelector("#main-story").textContent ===
      `How will you make it past the guard?`
    ) {
      if (help === true) {
        storyText[9] = sheHelps;
      } else {
        storyText[9] = noHelp;
      }
      partCount++;
      storyCount = 0;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      return;

      // -- INSIDE RIGHT CABIN --
    } else if (
      document / this.querySelector("#main-story") ===
      `You open the door and find yourself standing in front of another Orc!`
    ) {
      document.querySelector("#mob-pic").src = "inside-right-cabin-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;

      // -- GAIN 1 ENERGY AND ONE HEALTH POTION --
    } else if (
      document.querySelector("#main-story").textContent ===
      `Before you go let me give you these health and energy potions to help you on your jounrey`
    ) {
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      document.querySelector(".hp-pots").textContent = 1;
      document.querySelector(".nrg-pots").textContent = 1;
      storyCount = storyCount + 2;
      return;

      // -- REST AND GAIN FULL POWER --
    } else if (storyText[partCount][storyCount + 1] === "max-power") {
      document.querySelector(".health").textContent = 100;
      document.querySelector(".energy").textContent = 60;
      storyCount = storyCount + 2;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      return;

      // -- SHOW ORC OUTSIDE CITY GATES --
    } else if (
      document.querySelector("#main-story").textContent ===
      `You hear the sound of scrapping metal`
    ) {
      document.querySelector("#mob-pic").src = "images/orc-2-final.png";
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      storyCount++;
      return;
    }

    // -- ELSE PROGRESS STORY --
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
    storyCount++;
    return;

    // -- IF AT END OF STORY ARRAY MOVE TO NEXT PART --
  } else {
    partCount++;
    storyCount = 0;
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
    return;
  }
});

// -- Drink hp potion --
document.querySelector("#drink-hp").addEventListener("click", function () {
  const totalHpPots = Number(document.querySelector(".hp-pots").textContent);
  const totalHp = Number(document.querySelector(".health").textContent);
  let amountToHeal = 30;
  if (totalHpPots !== 0 && totalHp < 100) {
    if (totalHp + 30 > 100) {
      amountToHeal = 100 - totalHp;
    }
    document.querySelector(".hp-pots").textContent = totalHpPots - 1;
    document.querySelector(".health").textContent = totalHp + amountToHeal;
  }
});

// -- Drink nrg potion --
document.querySelector("#drink-nrg").addEventListener("click", function () {
  const totalNrgPots = Number(document.querySelector(".nrg-pots").textContent);
  const totalNrg = Number(document.querySelector(".energy").textContent);
  let amountToRestore = 20;
  if (totalNrgPots !== 0 && totalNrg < 50) {
    if (totalNrg + 20 > 50) {
      amountToRestore = 50 - totalNrg;
    }
    document.querySelector(".nrg-pots").textContent = totalNrgPots - 1;
    document.querySelector(".energy").textContent = totalNrg + amountToRestore;
  }
});
