const { title } = require("process");
const oneAgainstTenProbability = function oneAgainstTenProbability() {
  if (Math.floor(Math.random() * 10) === 0) {
      positivePoint();
  } else {
      negativePoint();
  }
};
function positivePoint() {
  player_target_stats.pride_points += 1;
  return console.log(`${player_target_stats.name} din't payed attention on what you said.`)
};
function negativePoint() {
  player_target_stats.pride_points -= 1;
  return console.log(`${player_target_stats.name} was slightly shaken about what you said.`)
};
let player_has_attacked = {
  attack_was_successful: null, //boolean
  how_much_damage: null, //object.object.object.variable (variable = number)
};
let this_turn_player_was_attacked = {
  which_attack: null, //object.variable.string
  damage_received: null, //number
  did_he_dodged: null, //boolean
}; //This variable is completely ready to receive new data and update itself, to see updates use console browser;
let player_selected_attack = null; //This variable is completely ready to receive new data and update itself, to see updates use console browser;
let player_stats = {
  name: null,
  gender: null,
  role: null,
  level: 1,
  current_exp: 0,
  max_exp: 50,
  defense_points: 5,
  current_health_points: 100,
  max_health_points: 100,
  speed_points: 5,
  agility_points: 5,
  strength_points: 5,
  range_damage_points: 0,
  hand_damage_points: 1,
  intelectual_points: 5,
  consumable_points: {
    stamina_points: 7,
    concentration_points: 10, 
    anger_points:0,  
  },
  negative_effect: {
    poisoned:{},
    on_fire:{},
    stunned:{},
    weak:{},
  }
};//This variable is completely ready to receive new data and update itself, to see updates use console browser;
let player_bag = {
  armor: {
    helmet: null,
    necklace: null,
    cloak: null,
    chestArmor: null,
    gloves: null,
    ring1: null,
    ring2: null,
    ring3: null,
    ring4: null,
    bracelet1: null,
    bracelet2: null,
    trinket1: null,
    trinket2: null,
    pants: null,
    boots: null,
  },
  consumables: {
    weak_healing_potion: {
      heals: 15,
      amount: 0,
    },
    medium_healing_potion: {
      heals: 50,
      amount: 0,
    },
    big_healing_potion: {
      heals: 100,
      amount: 0,
    },
    sandCurtain: {
      stunt: player_target_stats.turns_stunned = 1,
      amount: 0,
    },
    antidote: {},
    space6: null,
    space7: null,
    space8: null,
    space9: null,
    space10: null,
  },
  weapons: {
    weapon: null,
    shield: null,
    bow: null,
    arrows: {
      common: {
        cost: 1,
        damage_points: player_stats.range_damage_points,
      },
      quick: {
        cost: 0.5,
        damage_points: player_stats.range_damage_points,
      },
      heavy: {
        cost: 2,
        damage_points: player_stats.range_damage_points,
      },
      poisoned: {
        cost: 2,
        damage_points: player_stats.range_damage_points,
        poisoned_by: 3,
        damage_point_by_turn: player_stats.range_damage_points / 2,
      },
      fire: {
        cost: 2.5,
        damage_points: player_stats.range_damage_points,
        fire_by: 3,
        damage_point_by_turn: player_stats.range_damage_points / 2,
      },
      explosive: {
        cost: 3,
        damage_points: player_stats.range_damage_points,
        weakness: {
          defense_points: -5,
          damage_points: -5,
        },
        weak_by: 3,
      },
      stunt: {
        amount: 3.5,
        damage_points: player_stats.range_damage_points,
        turns_stunned: 3,
      },
    },
  },
};//This variable is completely ready to receive new data and update itself, to see updates use console browser;
let player_selected_arrow = /*This variable is completely ready to receive new data and update itself, to see updates use console browser*/ null;
let player_target_stats = /*Ready to Update*/ {
  name: null,
  role: null,
  level: 0,
  exp: 0,
  defense_points: 0,
  health_points: 0,
  speed_points: 0,
  agility_points: 0,
  strength_points: 0,
  range_damage_points: 0,
  hand_damage_points: 0,
  intelectual_points: 0,
  stamina_points: 0,
  concentration_points: 0, 
  anger_points:0,
  pride_points:0,
  turns_stunned: 0,
};
let player_object_interested = /*Object's only; Ready to Update*/ {};
let player_moves = {
  common_move: {
    a: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // ready to receive a common attack;
    b: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // ready to receive a common attack;
    c: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // ready to receive a common attack;
    d: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // ready to receive a common attack;
    e: {
        move_name: null,
        damage_points: null,
        move_description: null,
        consumable_points: null,
    }, // ready to receive a common attack;
    f: {
        move_name: null,
        damage_points: null,
        move_description: null,
        consumable_points: null,
    }, // ready to receive a common attack;
  }, // Ready to Update;
  special_move: {
    a: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // Ready to receive a special move;
    b: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // Ready to receive a special move;
    c: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // Ready to receive a special move;
    d: {
      move_name: null,
      damage_points: null,
      move_description: null,
      consumable_points: null,
    }, // Ready to receive a special move;
    e: {
        move_name: null,
        damage_points: null,
        move_description: null,
        consumable_points: null,
    }, // Ready to receive a special move;
    f: {
        move_name: null,
        damage_points: null,
        move_description: null,
        consumable_points: null,
    }, // Ready to receive a special move;
  }, // Ready to Update;
  interact: {
    check: {
      check_status: player_target_stats, /* Beta; May throw an Error; */
      check_object: player_object_interested.descriptions, /* Beta; May throw an Error; */
    }, // Beta; May throw an Error;
    treat: {
      on_battle: oneAgainstTenProbability,
      on_map: oneAgainstTenProbability,
    }, // Ready to be called;
    talk: {}, // Unfinished; Throw Error;
    give: {}, // Unfinished; Throw Error;
    lie: {}, // Unfinished; Throw Error;
    surrender_order: {}, // Unfinished; Throw Error;
  }, // Unfinished; may throw an Error;
  spare: {
    forgive: {}, // Unfinished; Throw Error;
    spare_target:{}, // Unfinished; Throw Error;
    flee:{}, // Unfinished; Throw Error;
  },
}; //This variable isn't complete and isn't ready to receive new data and update itself.If used you may get a Fatal Error;
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

};  //This variable isn't complete and isn't ready. If used you get a Fatal Error;