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
      "-" + playerData.skills[0][1].nrg + "⚡";
    document.querySelector(".attack-2-dmg").textContent =
      playerData.skills[1][0];
    document.querySelector("#attack-2").textContent =
      playerData.skills[1][1].dmg + " DMG";
    document.querySelector(".attack-2-nrg").textContent =
      "-" + playerData.skills[1][1].nrg + "⚡";
    document.querySelector(".attack-3-dmg").textContent =
      playerData.skills[2][0];
    document.querySelector("#attack-3").textContent =
      playerData.skills[2][1].dmg + " DMG";
    document.querySelector(".attack-3-nrg").textContent =
      "-" + playerData.skills[2][1].nrg + "⚡";
    document.querySelector(".attack-4-dmg").textContent =
      playerData.skills[3][0];
    document.querySelector("#attack-4").textContent =
      playerData.skills[3][1].dmg + " DMG";
    document.querySelector(".attack-4-nrg").textContent =
      "-" + playerData.skills[3][1].nrg + "⚡";
    return this.skills;
  },
  health: 100,
  energy: 60,
  healthPots: 0,
  energyPots: 0,
  defGen: function () {
    if (this.role === "M") {
      this.defType = "Cloth 🧙";
      this.def = 1;
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

export { playerData, assassinSkils, warriorSkils, mageSkils };
