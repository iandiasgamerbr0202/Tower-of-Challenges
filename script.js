let player_selected_arrow =
  /*This variable is completely ready to receive new data and update itself, to see updates use console browser*/ null;
const player_stats = {
  name: null,
  gender: {
    male: false,
    female: false,
  },
  role: undefined,
  level: 1,
  current_exp: 0,
  max_exp: 50,
  /*Level and “exp”, but explained:
      level is when you get a specific amount of experience… example:
      level 1,
      current_exp: 49,
      max_exp: 50,
      (console: "player killed a giant rat and gained 5 exp")
      Level 2,
      current_exp: 4,
      max_exp: 100,
      end of example.
      So, as we can see when the player is at level 1, his maximum experience was 50, and he had 49, and when
      he killed a giant rat he gains 5 “exp” since 49 + 5 = 54 the game did the calculation and
      updated the level to +1 and rewrote current_exp to 4 and at the same time set the new
      max_exp... but how is max “exp” calculated? Simple, it will add the last amount of maximum exp
      since 50 was the last maximum, it added up to 50 + 50 = 100, so when the player reaches level 3, it will add up
      100 + 100 = 200 and so on*/
  defense_points: 5,
  current_health_points: 100,
  max_health_points: 100,
  speed_points: 5,
  agility_points: 5,
  strength_points: 5,
  range_damage_points: 0,
  hand_damage_points: 1,
  intellectual_points: 5,
  consumable_points: {
    stamina_points: 7,
    concentration_points: 10,
    anger_points: 0,
  },
  negative_effect: {
    poisoned: {
      amount_of_turns: null,
      damage_points_by_turn: null,
    },
    on_fire: {
      amount_of_turns: null,
      damage_points_by_turn: null,
    },
    stunned: {
      amount_of_turns: null,
    },
    weak: {
      amount_of_turns: null,
      damage_points_reduced: null,
    },
  },
};
const player_target_stats = /*Ready to Update*/ {
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
  intellectual_points: 0,
  stamina_points: 0,
  concentration_points: 0,
  anger_points: 0,
  pride_points: 0,
  turns_stunned: 0,
};
const player_bag = {
  armor: {
    helmet: null,
    necklace: null,
    cloak: null,
    chestArmor: null,
    gloves: null,
    ring1: null,
    ring2: null, //all of these will receive an object;
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
    small_healing_potion: {
      item_name: "Small Healing Potion",
      effect: {
        heals: 15,
      },
      amount: null,
    },
    medium_healing_potion: {
      item_name: "Medium Healing Potion",
      effect: {
        heals: 50,
      },
      amount: null,
    },
    big_healing_potion: {
      item_name: "Big Healing Potion",
      effect: {
        heals: 100,
      },
      amount: null,
    },
    sandCurtain: {
      item_name: "Sand Curtain",
      effect: {
        stunt: (player_target_stats.turns_stunned = 1),
      },
      amount: null,
    },
    anti_toxin_syringe: {
      item_name: " Anti-Toxin Syringe ",
      effect: {
        poisoned: (player_stats.negative_effect.poisoned = 0),
      },
      amount: null,
    },
    herbal_salve: {
      item_name: "Herbal Save",
      effect: {
        heals_by_turn: +5,
        totalHeal: 25,
        amount_of_turns: 5,
      },
      amount: null,
    },
    stimulating_tea: {
      item_name: "Stimulating Tea",
      effect: {
        agilityPLus: +2,
        speedPlus: +2,
        amount_of_turns: 2,
      },
      amount: null,
    },
    toughening_tincture: {
      item_name: "Toughening Tincture",
      effect: {
        defensePlus: +5,
        amount_of_turns: 3,
      },
      amount: null,
    },
    adrenaline_shot: {
      item_name: "Adrenaline Shot",
      effect: {
        agilityPLus: +5,
        speedPlus: +5,
        amount_of_turns: 3,
      },
      amount: null,
    },
    smoke_bomb: {
      item_name: "Smoke Bomb",
      effect: {
        invisibility: player_stats.agility + 300,
        amount_of_turns: 3,
      },
      amount: null,
    },
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
}; //This variable is completely ready to receive new data and update itself;
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
      intellectual_points: +2,
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
      armor: {
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
        small_weak_healing_potion: {},
      },
    },
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
      intellectual_points: +0,
      stamina_points: +1,
    },
    moves: {
      cold_shot: {
        move_name: "Cold shot",
        damage_points: player_stats.range_damage_points,
        descriptions:
          "Without thinking or aiming, You shot on the first thing You see moving in Your direction.",
        consumable_points: {
          concentration_points: 3,
        },
      },
      switch_arrow: {
        move_name: "Switch Arrow",
        damage_points: 0,
        descriptions: "You change te arrow to raise your chances of winning.",
      },
      bear_trap: {
        move_name: "Bear Trap",
        damage_points: 20,
        descriptions:
          "You set a trap on the battle field and the first who attack you will be trapped",
        trapped_by: 3,
        consumable_points: {
          concentration_points: 7,
        },
      },
    },
    start_bag: {},
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
      intellectual_points: +0,
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
      intellectual_points: +0,
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
      intellectual_points: +0,
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
      intellectual_points: +0,
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
      intellectual_points: +0,
      stamina_points: +2,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  combat_master: {
    title: "Combat Master",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +0,
      agility_points: +3,
      strength_points: +0,
      damage_points: +0,
      intellectual_points: +3,
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
      intellectual_points: +2,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
  rogue: {
    title: "Rogue",
    stats: {
      defense_points: +0,
      health_points: +0,
      speed_points: +2,
      agility_points: +3,
      strength_points: +0,
      damage_points: +1,
      intellectual_points: +1,
      stamina_points: +0,
    },
    moves: {},
    start_bag: {},
  }, // isn't complete
}; //This variable isn't complete and isn't ready;
let player_turn = null; //receives boolean.
let player_selected_attack = null;
/*
  receive an object
*/
const player_has_attacked = {
  attack_was_successful: null,
  /* 
    receive boolean 
  */
  how_much_damage: null,
  /*
      receive number on a null variable; this is a null example -> object.variable (variable = number) 
  */
};
const this_turn_player_was_attacked = {
  which_attack: null,
  /*
      receive string on a object -> object.object.object.variable (variable = string)
    */
  damage_received: null,
  /* 
    receive a number
  */
  did_he_dodged: null,
  /* 
    receive boolean; 
  */
};
const oneAgainstTenProbability = function oneAgainstTenProbability() {
  if (Math.floor(Math.random() * 10) === 0) {
    positivePoint(); // call positive function;
  } else {
    negativePoint(); // call negative function;
  }
};
const positivePoint = function positivePoint() {
  player_target_stats.pride_points += 1;
  return console.log(
    `${player_target_stats.name} din't payed attention on what you said.`
  );
} //Player treat the target but the target will get more angry or confident;
const negativePoint = function negativePoint() {
  player_target_stats.pride_points -= 1;
  return console.log(
    `${player_target_stats.name} was slightly shaken about what you said.`
  );
}
/*
Player treat the target and the target get a little scared about what you said;
*/
let player_object_interested = /*Object's only; Ready to Update*/ {};
const player_moves = {
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
      check_status: player_target_stats /* Beta; May throw an Error; */,
      check_object:
        player_object_interested.descriptions /* Beta; May throw an Error; */,
    }, // Beta; May throw an Error;
    treat: {
      on_battle: oneAgainstTenProbability,
      on_map: oneAgainstTenProbability,
    }, // Ready to be called;
    talk: {}, // Unfinished;
    give: {}, // Unfinished;
    lie: {}, // Unfinished;
    surrender_order: {}, // Unfinished;
  }, // Unfinished;
  spare: {
    forgive: {}, // Unfinished; Throw Error;
    spare_target: {}, // Unfinished; Throw Error;
    flee: {}, // Unfinished; Throw Error;
  },
}; //This variable isn't complete and isn't ready;
