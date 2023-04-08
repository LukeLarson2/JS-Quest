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
    document.querySelector(".role-logo").src = "images/knight-shield-crop.png";
  } else if (playerData.role === "M") {
    document.querySelector(".role-logo").src = "images/wizard-crop.png";
  } else if (playerData.role === "A") {
    document.querySelector(".role-logo").src = "images/assassin-crop.png";
  }
  return playerData.role;
}

// -- NAME ASSIGNMENT --
function getName() {
  let result = prompt("Tell us, what is your name?");
  if (result.length >= 1) {
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
      document.querySelector("#mob-pic").src = "images/not-in-battle.png";
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      storyCount++;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      if (partCount === 2) {
        document.querySelector("#story-title").textContent = "Part 2";
      }
      storyCount++;
      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
  // ---- ATTACK 2 ----
  document.querySelector("#attack-2").addEventListener("click", function () {
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
      document.querySelector("#mob-pic").src = "images/not-in-battle.png";
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      storyCount++;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      if (partCount === 2) {
        document.querySelector("#story-title").textContent = "Part 2";
      }
      storyCount++;
      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
  // ---- ATTACK 3 ----
  document.querySelector("#attack-3").addEventListener("click", function () {
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
      document.querySelector("#mob-pic").src = "images/not-in-battle.png";
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      storyCount++;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      if (partCount === 2) {
        document.querySelector("#story-title").textContent = "Part 2";
      }
      storyCount++;
      return;
    }
    if (player.health - mobDmg <= 0) {
      gameOver();
      return;
    }
    document.querySelector(".health").textContent = playerHP - mobDmg;
    document.querySelector("#mob-hp").textContent = mobHP - playerDmg;
  });
  // ---- ATTACK 4 ----
  document.querySelector("#attack-4").addEventListener("click", function () {
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
      document.querySelector("#mob-pic").src = "images/not-in-battle.png";
      document.querySelector("#mob-hp").textContent = "N/A";
      document.querySelector("#mob-name").textContent = "-- No Enemy --";
      storyCount++;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
      if (partCount === 2) {
        document.querySelector("#story-title").textContent = "Part 2";
      }
      storyCount++;
      return;
    }
    if (player.health - mobDmg <= 0) {
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

// -- LEFT COTTAGE --
const leftCottagePick = [
  `--You make your way to the cottage on the left--`,
  `--As you enter you see a create in the corner with a broken lock--`,
  `--You slowly open the box and find ${openBox()}`,

  `--The cottage seems safe so you decide to rest to restore your strength--`,
  `max-power`,
  `--You rest and restore yourself to full power!`,
];

// -- RIGHT COTTAGE --
const rightCottagePick = [
  `--As you approach the cottage on the right you notice a shadow moving inside--`,
  `--You open the door and find yourself standing in front of another Orc!--`,
  `---- IN BATTLE! ----`,
];
// battle(easyMob2, playerData);

// -- BOX ITEM GENERATOR --
function openBox() {
  const item = Math.floor(Math.random() * 5) + 1;
  let result = undefined;
  if (item === 1 || item === 5) {
    result = "a Health Potion!";
    let val = Number(document.querySelector(".hp-pots").textContent);
    document.querySelector(".hp-pots").textContent = val + 1;
  } else if (item === 2) {
    result = "an old boot... Great...";
  } else if (item === 3) {
    result = "a pair of dirty underwear... Thats nasty...";
  } else if (item === 4) {
    result = "a rusted fork... Useful...";
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
    document.querySelector(".attack-2-dmg").textContent =
      playerData.skills[1][0];
    document.querySelector("#attack-2").textContent =
      playerData.skills[1][1].dmg + " DMG";
    document.querySelector(".attack-3-dmg").textContent =
      playerData.skills[2][0];
    document.querySelector("#attack-3").textContent =
      playerData.skills[2][1].dmg + " DMG";
    document.querySelector(".attack-4-dmg").textContent =
      playerData.skills[3][0];
    document.querySelector("#attack-4").textContent =
      playerData.skills[3][1].dmg + " DMG";
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
    },
  ],
  [
    "Kick",
    {
      dmg: 2,
    },
  ],
  [
    "Swing",
    {
      dmg: 4,
    },
  ],
  [
    "Stab",
    {
      dmg: 3,
    },
  ],
];

// -- MAGE --
const mageSkils = [
  [
    "Zap",
    {
      dmg: 2,
    },
  ],
  [
    "Shock",
    {
      dmg: 3,
    },
  ],
  [
    "Missle",
    {
      dmg: 3,
    },
  ],
  [
    "Bolt",
    {
      dmg: 4,
    },
  ],
];

// -- ASSASSIN --
const assassinSkils = [
  [
    "Jab",
    {
      dmg: 1,
    },
  ],
  [
    "Slice",
    {
      dmg: 2,
    },
  ],
  [
    "Stab",
    {
      dmg: 3,
    },
  ],
  [
    "Cut",
    {
      dmg: 2,
    },
  ],
];

// -- ENEMY STATS --
const easyMob1 = {
  name: "Orc",
  hp: 20,
  def: 1,
  attack: 2,
  toHit: 2,
};

const easyMob2 = {
  name: "Orc",
  hp: 20,
  def: 1,
  attack: 2,
  toHit: 3,
};

const medMob1 = {
  name: "Armored Orc",
  hp: 30,
  def: 3,
  attack: 3,
  toHit: 4,
};

const medMob2 = {
  name: "Armored Orc",
  hp: 30,
  def: 3,
  attack: 3,
  toHit: 4,
};

const hardMob = {
  name: "Armored Orc Leader",
  hp: 40,
  def: 4,
  attack: 4,
  toHit: 5,
};

const bossMob = {
  name: "Orc Commander",
  hp: 50,
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

// -- Story Board --
const storyText = {
  1: [
    `You have arrived just in time, ${playerData.name}! ${playerData.roleName}'s of your skill are needed greatly!`,
    `The land of the king has been attacked by an evil hoard of Orcs!`,
    `Only a few soldiers hold the line to the keep, but their numbers are dwindling`,
    `${playerData.name}, do you stand up to the task of cleansing the kingdom of these filthy Orcs?`,
    "tutorial",
    `That's Excellent!`,
    `Before you go let me give you these health and energy potions to help you on your jounrey`,
    "hp+nrg",
    `Good luck ${playerData.name}!`,
    `--You make your way to the castle gates--`,
    `--A young boy is running towards you as he is being chased by an Orc!--`,
    `Boy: "Help me! It's going to get me!"`,
    `--The boy runs behind you as the Orc draws near!--`,
    `--TO BATTLE!--`,
  ],
  2: [
    `---- IN BATTLE ----`,
    `--You turn to the boy--`,
    `Boy: "Thank you adventurer!`,
    `--The boy gestures ahead--`,
    `Boy: "My home is just up there"`,
    `Boy: "If you need to rest, feel free to take shelter inside"`,
    `--The boy turns and continues off into the distance--`,
    `--The battle has drained some energy and the idea of rest sounds like a good idea--`,
    `--Ahead of you reside two cottages--`,
    `--The cottage on your left looks abandoned and broken--`,
    `--The cottage on your right has a warm glow raidiating from the window--`,
    `--The boy didn't say which was his--`,
    "Which cottage do you pick?",
    "pick-cottage",
    "choose",
  ],
  3: [],
};

let storyCount = 0;
let partCount = 1;

// -- DISABLE FUNCTION --
function disableButtons(story, battle) {
  document.querySelector("#next-story").disabled = story;
  document.querySelector("#attack-1").disabled = battle;
  document.querySelector("#attack-2").disabled = battle;
  document.querySelector("#attack-3").disabled = battle;
  document.querySelector("#attack-4").disabled = battle;
}

// -- Click Through Story --
document.querySelector("#next-story").addEventListener("click", function () {
  if (partCount === 1) {
    document.querySelector("#story-title").textContent = "Part 1";
  }
  if (storyCount >= storyText[partCount][storyCount].length - 1) {
    partCount++;
    storyCount = 0;
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
  }
  if (storyText[partCount][storyCount] === "tutorial") {
    beginTutorial();
    return;
  }
  if (storyText[partCount][storyCount] === `---- IN BATTLE ----`) {
    disableButtons(true, false);
    if (partCount - 1 === 1) {
      document.querySelector("#mob-name").textContent = easyMob1.name;
      document.querySelector("#mob-hp").textContent = easyMob1.hp;
      document.querySelector("#mob-pic").src = "images/orc-mob-1.png";
      battle(easyMob1, playerData);
    } else if (partCount - 1 === 3) {
      document.querySelector("#mob-name").textContent = easyMob2.name;
      document.querySelector("#mob-hp").textContent = easyMob2.hp;
      document.querySelector("#mob-pic").src = "images/orc-mob-1.png";
      battle(easyMob2, playerData);
    }
  }
  if (storyText[partCount][storyCount] === "pick-cottage") {
    let cottage = prompt(
      `"L" => cottage on the left\n"R" => cottage on the right`
    );
    cottage.toUpperCase();
    if (cottage === "L") {
      storyText[3] = leftCottagePick;
      partCount++;
      storyCount = 0;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
    } else if (cottage === "R") {
      storyText[3] = rightCottagePick;
      partCount++;
      storyCount = 0;
      document.querySelector("#main-story").textContent =
        storyText[partCount][storyCount];
    } else {
      alert(`Invalid entry, please try again...`);
      cottageChoice();
    }
  }
  if (storyText[partCount][storyCount + 1] === "hp+nrg") {
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
    document.querySelector(".hp-pots").textContent++;
    document.querySelector(".nrg-pots").textContent++;
    storyCount = storyCount + 2;
    return;
  }
  if (storyText[partCount][storyCount + 1] === "max-power") {
    document.querySelector(".health").textContent = 100;
    document.querySelector(".energy").textContent = 50;
    storyCount++;
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
    return;
  }
  document.querySelector("#main-story").textContent =
    storyText[partCount][storyCount];
  storyCount++;
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
  if (totalNrgPots !== 0 && totalNrg < 100) {
    if (totalNrg + 20 > 100) {
      amountToRestore = 100 - totalNrg;
    }
    document.querySelector(".nrg-pots").textContent = totalNrgPots - 1;
    document.querySelector(".energy").textContent = totalNrg + amountToRestore;
  }
});

/*

let cottage = cottageChoice();

if (cottage === "L") {
  leftCottage();
} else if (cottage === "R") {
  rightCottage();
} else {
  alert(`Invalid entry, please try again...`);
  cottageChoice();
}

// -- PART 4 "The castle gates" --
alert(`--You exit the cottage and continue your journey forward--`);
alert(`--A foul stench drifts into your nostrils--`);
alert(`--You hear the sound of scrapping metal--`);
alert(
  `--A few steps in front of the castle gates, a large armored Orc drags a large axe behind it--`
);
alert(`Orc: "YOU NO PASS HUMAN!"`);
alert(`Orc: "I CRUSH AND EAT YOU FOR BREAKFAST!"`);
alert(`--You ready your weapon and prepare to fight!--`);

battle(medMob1, playerData);

// -- PART 5 "Trial by fire" --
alert(`--The large armored Orc drops to the ground with a crashing thud--`);
alert(`--A small vial falls from one of its puches--`);
alert(`**Health potion ❤️‍🩹 increases by 1**`);
playerData.healthPots++;
alert(`--Tired and bleeding, you seek aid within the city gates--`);
alert(`--As you enter, you see the absolute distruction of the city--`);
alert(`--Homes burnt to nothing but charred stone and ash--`);
alert(`Stranger: "Psst.."`);
alert(
  `--You look around to see who made that noise and you see a young woman hiding behind a barrel--`
);
alert(`--She gestures you over while looking for any nearby Orcs--`);

let help = undefined;

alert(
  `--You approach the young woman you notice she has a young girl who looks sick--`
);
alert(`Woman: "Please, is there anything you can do to help her?"`);
alert(
  `--You look around and notice something glistening from inside a barrel--`
);
alert(`--You reach in and discover its a health potion ❤️‍🩹--`);
let choice = prompt(
  `Do you keep the health potion for yourself or help the little girl?\nPress 1 to help\nPress 2 to keep the potion`
);
if (choice === "1") {
  alert(`--You tip the girls head back and slowly let her drink the potion--`);
  alert(`--Almost instantly she begins to look better--`);
  alert(`Woman: "Oh thank you! You've saved her! I wont forget this!"`);
  alert(`${playerData.name}: "Of course, it's the least I can do"`);
  alert(`--You stand up bid them farwell--`);
  help = true;
} else {
  alert(`Woman: "I can't believe you wont help us..."`);
  alert(
    `--You take the vial and bid them good luck, but anything that could help you save this kingdom is needed--`
  );
  playerData.healthPots++;
  help = false;
}

// -- PART 6 "The bigger they are..."
alert(`--You continue your journey deeper into the castle's center--`);
alert(
  `--As you approach an inner gate to access the keep, a deep, rumbling voice echos against the stone--`
);
alert(`Armored Orc Leader: "YOU.. GO.. NO... FURTHER"`);
alert(
  `--The monstrous Orc slams a massive hammer against the stone wall, throwing splintered stone in every direction--`
);
alert(`Armored Orc Leader: "YOU DIE.....NOW!!!"`);
alert(`--You ready your self for an epic battle for survival!--`);

battle(hardMob, playerData);

// -- PART 7 "One step at a time..."--
alert(
  `--The collosus beast falls to his back, trembling the ground around you--`
);
alert(`--You begin to think this quest was much more than you asked for--`);
alert(`${playerData.name}: "Where are all of the kingdom's soldiers??"`);
alert(
  `${playerData.name}: "Could they have truly all been wipped out? Am I to late?"`
);
alert(`--You push the inner gates open just enough to see to the other side--`);
alert(`--An armored Orc patrols the grounds outside the doors to the keep--`);
alert(`${playerData.name}: "Did they breach the keep?"`);
alert(`--You sneek through the gates while the armored Orc isn't looking--`);
alert(
  `--As you quietly make your way, behind crumbled structures towards the doors to the keep, you find a small create--`
);
alert(`--As you open it you find ${openBox()}--`);

// -- PART 8 "Does your past haunt you?" --
alert(`--You make your way towards the doors--`);
alert(`--How will you make it past the guard?--`);

if (help === true) {
  alert(
    `--Just then, the young woman you helpped earlier throws a stone, hitting the Orcs helmet--`
  );
  alert(`Armored Orc: "HEY! WHO THROW THAT!"`);
  alert(`--The Orc walks off in frustration, unable to find the young woman--`);
  alert(
    `--You take advantage of the opportunity and make your way into the keep--`
  );
} else {
  alert(`--While his back is turned, you take advantage and strike!--`);
  battle(medMob2, playerData);
  alert(`--As the Orc collapses you make your way into the keep--`);
}

// -- PART 9 "Enter the keep" --
alert(`--Your suprised at the condition of the keep--`);
alert(`--Nothing is destroyed--`);
alert(`--Statues still stand and a chest of gold coins remains untouched--`);
alert(
  `--As you make your way to the throne room you hear voices from up ahead--`
);
alert(
  `Orc Commander: "THIS LAST CHANCE! GIVE ORCS STONE OR CASTLE WILL CRUMBLE!"`
);
alert(
  `King: "That stone does not belong to you. It is the symbol of my people..."`
);
alert(`--The king lets out a scream of pain--`);
alert(
  `King: "No matter what you do to me...You will not get what you came here for..."`
);
alert(
  `Orc Commander: "FINE... WE WILL DESTROY THE REST OF YOUR CITY UNTIL WE FIND IT!"`
);
alert(`Orc Commander: "THEIR LIVES WILL BE YOUR DOING!"`);
alert(`--This is it, the final battle...---`);
alert(`--You enter the throne room--`);
alert(`${playerData.name}: "STOP!"`);
alert(`--Both the King and the Orc Commander turn in suprise--`);
alert(`Orc Commander: "WHO YOU?!"`);
alert(
  `--As you slowly make your way towards the Orc Commander, you begin to pick up speed--`
);
alert(`${playerData.name}: "I am death..."`);
alert(`${playerData.name}: "I am the destroyer of orcs..."`);
alert(`${playerData.name}: "I am vengance..."`);
alert(`${playerData.name}: "I..."`);
alert(`${playerData.name}: "Am..."`);
alert(`${playerData.name}: "${playerData.name}!!!!`);

// -- Part 10 "This is the end" --
battle(bossMob, playerData);

alert(`--The Orc Commander falls to the ground with a look of disbelief--`);
alert(`Orc Commander: "YoU... CaNNot.... KILL...... MEeeee...."`);
alert(`--The Orc Commander lets out his final breath and drops his sword--`);
alert(`--The King looks at you as a tear rolls down his face--`);
alert(`King: "You... You did it..."`);
alert(
  `King: "You saved us all... Thank you ${playerData.name}... You are forever in our debt!"`
);
alert(
  `${playerData.name}: "I must know, what was the stone that he was referring to?"`
);
alert(`--The King stands and reaches into his pocket--`);
alert(`--He pulls out a glowing stone--`);
alert(`King: "This is a seeing stone"`);
alert(
  `King: "So long the bearer has a strong mind, the stone allows them to travel anywhere they desire"`
);
alert(
  `King: "This stone was passed down throughout the ages from King to King, only to be used by Kings"`
);
alert(
  `King: "You've proven your worth against the Orcs. I see it only fair to allow you the opportunity to try it yourself"`
);
alert(`--He hands you the stone slowly--`);
alert(`--As you take hold of it, images begin to flash through your mind--`);
alert(`--First of the kingdom, then of the land surrounding it--`);
alert(`--You try to focus on a single place in the world--`);
alert(
  "--You think of your home and your family which you havent seen in ages--"
);
alert(
  "--The images shift to inside your house, where your family sits by a fire sharing a meal--"
);
alert(`--You hear the kings voice echo in your mind--`);
alert('King: "To make the journey, you must truly see yourself there"');
alert(
  "--As you try to focus a large explosion blasts a whole through the keeps walls--"
);
alert(`--You try to drop the stone but it seems to have bound itself to you--`);
alert(`--You hear the Kings voice in your mind--`);
alert(`King: "Protect the stone!!"`);
alert("--Your focus strains and bright white light encapsulates you--");
alert(
  `--When the light disaptes, you find yourself standing on a beach in an unfamiliar land--`
);
alert(`--The stone falls from your grasp and its glow diminished--`);
alert(
  `--You pick up the stone to try and get back but you can tell its energy seems to be drained--`
);
alert(`--You look around you and back at the stone--`);
alert(`--It looks like your story isn't over just yet...--`);
alert(`-----TO BE CONTINUED------`);
*/
