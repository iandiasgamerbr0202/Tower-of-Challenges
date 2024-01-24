const roles = {
  archer: {
    title: "Imperial Archer",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +2,
      agility_points: +1,
      strength_points: +0,
      damage_points: +1,
      intelectual_points: +2,
      stamina_points: +0,
    },
    moves: {
      lock_aim: {
        move_name: "Lock Aim",
        damage_points: 0,
        descriptions:
          "You focus with all Your force on the target, making almost impossible to the target to dodge.",
      },
      dry_shot: {
        move_name: "Dry Shot",
        damage_points: player_selected_arrow,
        descriptions: "A simple shot without mercy.",
      },
      switch_arrow: {
        move_name: "Switch Arrow",
        damage_points: 0,
        descriptions: "You change te arrow to raise your chances of winning.",
      },
    },
    start_bag: {
      weapon: {
        common_arrow: player_bag.weapons.arrows.common,
        heavy_arrow: player_bag.weapons.arrows.heavy,
        imperial_bow: {
          range_damage_points: player_stats.range_damage_points + 5,
          agility_points: player_stats.agility_points + 2,
          effect: {
            effect_name: "Stone Hands",
            hand_damage_points: player_stats.hand_damage_points + 2,
            slowness: player_stats.agility_points - 1,
          },
        },
      },
      armor:{
        chain_mail: {
          speed_points: player_stats.speed_points + 1,
        },
        leather_pants: {
          defense_points: player_stats.defense_points + 1,
          speed_points: player_stats.defense_points + 1,
        },
        iron_boots: {
          speed_points: player_stats.speed_points - 1,
          defense_points: player_stats.defense_points + 1,
        },
        leather_gloves: {
          concentration_points: player_stats.concentration_points + 2,
          agility_points: player_stats.agility_points + 1,
        },
      },
      consumables: {
        small_weak_healing_potion: {
          heals: 15
        }
      }
    }
  }, // stats complete, moves complete, start_bag half-way
  hunter: {
    title: "Wild Hunter",
    stats: {
      defense_points: +1,
      health_points: +0,
      speed_points: +0,
      agility_points: +2,
      strength_points: +1,
      damage_points: +1,
      intelectual_points: +0,
      stamina_points: +1,
    },
    moves: {
      cold_shot: {
        move_name: "Cold shot",
        damage_points: player_stats.range_damage_points,
        descriptions:
          "Without thinking or aiming, You shot on the first thing You see moving in Your direction.",
        consumable_points:{
          concentration_points: 3,
        },
      },      
      switch_arrow: {
        move_name: "Switch Arrow",
        damage_points: 0,
        descriptions: "You change te arrow to raise your chances of winning.",
      },
      bear_trap:{
        move_name: "Bear Trap",
        damage_points: 20,
        descriptions:
          "You set a trap on the battle field and the first who attack you will be trapped",
        trapped_by: 3,
        consumable_points:{
          concentration_points: 7,
        },
      },
    },
    start_bag: {

    },
  }, // stats complete, moves half-step, start_bag missing
  warrior: {
    title: "Imperial Warrior",
    stats: {
      defense_points: +2,
      health_points: +0,
      speed_points: +0,
      agility_points: +0,
      strength_points: +1,
      damage_points: +1,
      intelectual_points: +0,
      stamina_points: +2,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  swordArtist: {
    title: "Sword Artist",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +1,
      agility_points: +2,
      strength_points: +1,
      damage_points: +2,
      intelectual_points: +0,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  barbarian: {
    title: "Barbarian",
    stats: {
      defense_points: +2,
      health_points: +0,
      speed_points: +0,
      agility_points: +0,
      strength_points: +2,
      damage_points: +2,
      intelectual_points: +0,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  knight: {
    title: "Knight",
    stats: {
      defense_points: +3,
      health_points: +0,
      speed_points: +0,
      agility_points: +0,
      strength_points: +1,
      damage_points: +2,
      intelectual_points: +0,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  brawler: {
    title: "Street Brawler",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +0,
      agility_points: +2,
      strength_points: +2,
      damage_points: +0,
      intelectual_points: +0,
      stamina_points: +2,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  monk: {
    title: "Monk",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +0,
      agility_points: +3,
      strength_points: +0,
      damage_points: +0,
      intelectual_points: +3,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  bard: {
    title: "Bard",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +2,
      agility_points: +2,
      strength_points: +0,
      damage_points: +0,
      intelectual_points: +2,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  rogue:{
   title: "Rogue",
   stats: {
    defense_points: +0,
    health_points: +0,
    speed_points: +2,
    agility_points: +3,
    strength_points: +0,
    damage_points: +1,
    intelectual_points: +1,
    stamina_points: +0,  
   },
   moves: {},
   start_bag: {},
  },

};  //This variable isn't complete and isn't ready;
