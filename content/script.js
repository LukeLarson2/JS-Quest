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
  alert("---- GAME OVER ----");
  fail;
}

// -- BATTLE SCREEN --
function battle(mob, player) {
  if (player.health <= 0) {
    gameOver();
    return;
  }

  if (mob.hp <= 0) {
    alert(`--Victory!--`);
    return;
  }
  alert(
    `${player.name} Health ❤️: ${player.health}\n${mob.name} Health ❤️: ${mob.hp}`
  );
  let choice = prompt(
    `Select your attack (1-4)\nType "D" to defend\nType "H" to use a health potion\nCurrent Health Potions ❤️‍🩹: ${
      playerData.healthPots
    }\n\n${skillList()}`
  );
  choice = choice.toUpperCase();
  if (choice === "D") {
    if (player.role === "M" || player.role === "W") {
      const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      alert(`-- The Orc attacks and hits for 💥: ${mobDmg}! --`);
      player.health -= mobDmg;
      battle(mob, player);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        alert(`--The Orc Misses!--`);
        battle(mob, player);
      } else {
        const mobDmg = dmgGen(mob.attack);
        alert(`-- The Orc attacks and hits for 💥: ${mobDmg}! --`);
        player.health -= mobDmg;
        battle(mob, player);
      }
    }
  } else if (choice === "H") {
    if (player.healthPots < 1) {
      alert("--No health potions remaining!--");
      if (player.role === "M" || player.role === "W") {
        const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
        alert(`-- The Orc attacks and hits for 💥: ${mobDmg}! --`);
        player.health -= mobDmg;
        battle(mob, player);
      } else {
        const mobHit = dodgeCheck(mob.toHit);
        if (mobHit === true) {
          alert(`--The Orc Misses!--`);
          battle(mob, player);
        } else {
          const mobDmg = dmgGen(mob.attack);
          alert(`-- The Orc attacks and hits for 💥: ${mobDmg}! --`);
          player.health -= mobDmg;
          battle(mob, player);
        }
      }
    } else {
      if (player.role === "M" || player.role === "W") {
        player.health += 20;
        player.healthPots--;
        alert(`You drink a health potion ❤️‍🩹 and heal 20 HP `);
        const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
        alert(`-- The Orc attacks and hits for 💥: ${mobDmg}! --`);
        player.health -= mobDmg;
        battle(mob, player);
      } else {
        player.health += 20;
        player.healthPots--;
        alert(`You drink a health potion ❤️‍🩹 and heal 20 HP `);
        const mobHit = dodgeCheck(mob.toHit);
        if (mobHit === true) {
          alert(`--The Orc Misses!--`);
          battle(mob, player);
        } else {
          const mobDmg = dmgGen(mob.attack);
          alert(`-- The Orc attacks and hits for 💥: ${mobDmg}! --`);
          player.health -= mobDmg;
          battle(mob, player);
        }
      }
    }
  } else if (choice === "1") {
    if (player.role === "M" || player.role === "W") {
      const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      const playerDmg = dmgGen(player.skills[0][1].dmg);
      alert(
        `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
      );
      player.health -= mobDmg;
      mob.hp -= playerDmg;
      battle(mob, player);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        alert(`--The Orc Misses!--`);
        const playerDmg = dmgGen(player.skills[0][1].dmg);
        mob.hp -= playerDmg;
        battle(mob, player);
      } else {
        const mobDmg = dmgGen(mob.attack);
        const playerDmg = dmgGen(player.skills[0][1].dmg);
        alert(
          `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
        );
        player.health -= mobDmg;
        mob.hp -= playerDmg;
        battle(mob, player);
      }
    }
  } else if (choice === "2") {
    if (player.role === "M" || player.role === "W") {
      const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      const playerDmg = dmgGen(player.skills[1][1].dmg);
      alert(
        `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
      );
      player.health -= mobDmg;
      mob.hp -= playerDmg;
      battle(mob, player);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        alert(`--The Orc Misses!--`);
        const playerDmg = dmgGen(player.skills[1][1].dmg);
        mob.hp -= playerDmg;
        battle(mob, player);
      } else {
        const mobDmg = dmgGen(mob.attack);
        const playerDmg = dmgGen(player.skills[1][1].dmg);
        alert(
          `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
        );
        player.health -= mobDmg;
        mob.hp -= playerDmg;
        battle(mob, player);
      }
    }
  } else if (choice === "3") {
    if (player.role === "M" || player.role === "W") {
      const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      const playerDmg = dmgGen(player.skills[2][1].dmg);
      alert(
        `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
      );
      player.health -= mobDmg;
      mob.hp -= playerDmg;
      battle(mob, player);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        alert(`--The Orc Misses!--`);
        const playerDmg = dmgGen(player.skills[2][1].dmg);
        mob.hp -= playerDmg;
        battle(mob, player);
      } else {
        const mobDmg = dmgGen(mob.attack);
        const playerDmg = dmgGen(player.skills[2][1].dmg);
        alert(
          `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
        );
        player.health -= mobDmg;
        mob.hp -= playerDmg;
        battle(mob, player);
      }
    }
  } else if (choice === "4") {
    if (player.role === "M" || player.role === "W") {
      const mobDmg = Math.floor(dmgGen(mob.attack) / dmgReducGen());
      const playerDmg = dmgGen(player.skills[3][1].dmg);
      alert(
        `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
      );
      player.health -= mobDmg;
      mob.hp -= playerDmg;
      battle(mob, player);
    } else {
      const mobHit = dodgeCheck(mob.toHit);
      if (mobHit === true) {
        alert(`--The Orc Misses!--`);
        const playerDmg = dmgGen(player.skills[3][1].dmg);
        mob.hp -= playerDmg;
        battle(mob, player);
      } else {
        const mobDmg = dmgGen(mob.attack);
        const playerDmg = dmgGen(player.skills[3][1].dmg);
        alert(
          `Your attack hits the Orc for 💥: ${playerDmg}\nThe Orc's attack hits for 💥: ${mobDmg}`
        );
        player.health -= mobDmg;
        mob.hp -= playerDmg;
        battle(mob, player);
      }
    }
  } else {
    alert(`Invalid Entry, try again...`);
    battle(mob, player);
  }
  return;
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

// -- COTTAGE CHOICE --
function cottageChoice() {
  let cottage = prompt(
    `Which cottage do you choose to enter?\n"L" => cottage on the left\n"R" => cottage on the right`
  );
  return cottage.toUpperCase();
}

// -- LEFT COTTAGE --
function leftCottage() {
  alert(`--You make your way to the cottage on the left--`);
  alert(`--As you enter you see a create in the corner with a broken lock--`);
  alert(`--You slowly open the box and find ${openBox()}`);
  alert(
    `--The cottage seems safe so you decide to rest to restore your strength--`
  );
  playerData.health = 100;
  playerData.energy = 50;
  return;
}

// -- RIGHT COTTAGE --
function rightCottage() {
  alert(
    `--As you approach the cottage on the right you notice a shadow moving inside--`
  );
  alert(
    `--You open the door and find yourself standing in front of another Orc!--`
  );
  alert(`--TO BATTLE!--`);
  battle(easyMob2, playerData);
  return;
}

// -- BOX ITEM GENERATOR --
function openBox() {
  const item = Math.floor(Math.random() * 5) + 1;
  let result = undefined;
  if (item === 1 || item === 5) {
    result = "a Health Potion ❤️‍🩹 + 1";
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
    "Magic\r\nMissle",
    {
      dmg: 3,
    },
  ],
  [
    "Mana\r\nBolt",
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
    "Back\r\nStab",
    {
      dmg: 3,
    },
  ],
  [
    "Dagger\r\nThrow",
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
  2: [`---- IN BATTLE ----`],
};

let storyCount = 0;
let partCount = 1;

// -- Click Through Story --
document.querySelector("#next-story").addEventListener("click", function () {
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
  if (storyText[partCount][storyCount + 1] === "hp+nrg") {
    document.querySelector("#main-story").textContent =
      storyText[partCount][storyCount];
    document.querySelector(".hp-pots").textContent++;
    document.querySelector(".nrg-pots").textContent++;
    storyCount = storyCount + 2;
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
// -- PART 2 "First Battle" --
alert(`--TO BATTLE!--`);
battle(easyMob1, playerData);
alert(`--You turn to the boy--`);
alert(`Boy: "Thank you adventurer!`);
alert(`--The boy gestures ahead--`);
alert(`Boy: "My home is just up there"`);
alert(`Boy: "If you need to rest, feel free to take shelter inside"`);
alert(`--The boy turns and continues off into the distance--`);

// -- PART 3 "Which Cottage" --
alert(
  `--The battle has left you wounded and the idea of rest sounds like a good idea--`
);
alert(`--Ahead of you reside two cottages--`);
alert(`--The cottage on your left looks abandoned and broken--`);
alert(
  `--The cottage on your right has a warm glow raidiating from the window--`
);
alert(`--The boy didn't say which was his--`);

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
