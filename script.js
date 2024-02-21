const treat_target = function treat_target() {
  if (Math.floor(Math.random() * 10) === 0) {
    yourTreatDintWorked();
  } else {
    yourTreatWorked();
  }
};
const yourTreatDintWorked = function positivePoint() {
  player_target_stats.pride_points += 1;
  return console.log(
    `${player_target_stats.name} din't payed attention on what you said.`
  );
}; //Player treat the target but the target will get more angry or confident;
const yourTreatWorked = function negativePoint() {
  player_target_stats.pride_points -= 1;
  return console.log(
    `${player_target_stats.name} was slightly shaken about what you said.`
  );
}; //Player treat the target and the target get uncomfortable/sad/anxious/scared
const player_selected_arrow = {
  arrow_name: null,
  arrow_cost: null,
  arrow_effect: null,
  arrow_description: null,
};
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
    max_stamina_points: 5,
    max_concentration_points: 5,
    max_anger_points: 5,
    current_stamina_points: 5,
    current_concentration_points: 5,
    current_anger_points: 0,
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
  money_bag: {
    copper_coins: null,
    silver_coins: null, //1 silver = 1000 copper,
    gold_coins: null, // 1 gold = 1000 silver and 1.000.000 copper
    royal_coin: null, // 1 royal = 1000 gold and 1.000.000 silver and 1.000.000.000 copper
  },
};
const player_target_stats = {
  name: null,
  gender: {
    male: false,
    female: false,
  },
  role: undefined,
  level: null,
  min_exp_drop: null,
  max_exp_drop: null,
  defense_points: 5,
  current_health_points: null,
  max_health_points: null,
  speed_points: null,
  agility_points: null,
  strength_points: null,
  range_damage_points: null,
  hand_damage_points: null,
  intellectual_points: null,
  consumable_points: {
    max_stamina_points: null,
    max_concentration_points: null,
    max_anger_points: null,
    current_stamina_points: null,
    current_concentration_points: null,
    current_anger_points: null,
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
const player_bag = {
  armor: {
    helmet: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    necklace: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    cloak: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    chestArmor: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    gloves: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    ring1: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    ring2: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    ring3: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    ring4: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    bracelet1: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    bracelet2: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    trinket1: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    trinket2: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    pants: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    pants:{
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    boots: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
  },
  consumables: {
    small_healing_potion: {
      item_id: null,
      item_name: "Small Healing Potion",
      item_stats: {
        item_effect: {
          heals: player_stats.current_health_points + 15,
          amount: null,
        },
      },
    },
    medium_healing_potion: {
      item_id: null,
      item_name: "Medium Healing Potion",
      item_stats: {
        item_effect: {
          heals: player_stats.current_health_points + 50,
          amount: null,
        },
      },
    },
    big_healing_potion: {
      item_id: null,
      item_name: "Big Healing Potion",
      item_stats: {
        item_effect: {
          heals: player_stats.current_health_points + 100,
          amount: null,
        },
      },
    },
    sandCurtain: {
      item_id: null,
      item_name: "Sand Curtain",
      item_stats: {
        item_effect: {
          stunt: (player_target_stats.turns_stunned = 1),
          amount: null,
        },
      },
    },
    anti_toxin_syringe: {
      item_id: null,
      item_name: " Anti-Toxin Syringe ",
      item_stats: {
        item_effect: {
          poisoned: (player_stats.negative_effect.poisoned = 0),
          amount: null,
        },
      },
    },
    herbal_salve: {
      item_id: null,
      item_name: "Herbal Save",
      item_stats: {
        item_effect: {
          heals_by_turn: player_stats.current_health_points + 5,
          total_heal: 25,
          amount_of_turns: 5,
          turns_left: 0,
          amount: null,
        },
      },
    },
    stimulating_tea: {
      item_id: null,
      item_name: "Stimulating Tea",
      item_stats: {
        item_effect: {
          plus_agility_points: player_stats.agility_points + 2,
          plus_speed_points: player_stats.speed_points + 2,
          amount_of_turns: 2,
          amount: null,
        },
      },
    },
    toughening_tincture: {
      item_id: null,
      item_name: "Toughening Tincture",
      item_stats: {
        item_effect: {
          plus_defense_points: player_stats.defense_points + 5,
          amount_of_turns: 3,
          amount: null,
        },
      },
    },
    adrenaline_shot: {
      item_id: null,
      item_name: "Adrenaline Shot",
      item_stats: {
        item_effect: {
          plus_agility_points: player_stats.agility_points + 5,
          plus_speed_points: +5,
          amount_of_turns: 3,
          amount: null,
        },
      },
    },
    smoke_bomb: {
      item_id: null,
      item_name: "Smoke Bomb",
      item_stats: {
        item_effect: {
          invisibility: player_stats.agility + 300,
          amount_of_turns: 3,
          descriptions: null,
          amount: null,
        },
      },
    },
    new_item_to_be_added: {
      item_id: null,
      item_name: null,
      item_stats: {
        item_effect: {
          plus: {
            plus_defense_points: /*player_stats.defense_points +*/ null,
            plus_max_health_points: /*player_stats.max_health_points +*/ null,
            plus_speed_points: /*player_stats.speed_points +*/ null,
            plus_agility_points: /*player_stats.agility_points +*/ null,
            plus_strength_points: /*player_stats.strength_points +*/ null,
            plus_range_damage_points:
              /*player_stats.range_damage_points +*/ null,
            plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
            plus_intellectual_points:
              /*player_stats.intellectual_points +*/ null,
            plus_max_stamina_points:
              /*player_stats.consumable_points.max_stamina_points +*/ null,
            plus_max_concentration_points:
              /*player_stats.consumable_points.max_concentration_points +*/ null,
            plus_max_anger_points:
              /*player_stats.consumable_points.max_anger_points +*/ null,
          },
          descriptions: null,
          amount_of_turns: null,
          amount: null,
        },
      },
    },
  },
  weapons: {
    weapon: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    shield: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    bow: {
      item_id: null,
      item_name: null,
      item_stats: {
        plus: {
          plus_defense_points: /*player_stats.defense_points +*/ null,
          plus_max_health_points: /*player_stats.max_health_points +*/ null,
          plus_speed_points: /*player_stats.speed_points +*/ null,
          plus_agility_points: /*player_stats.agility_points +*/ null,
          plus_strength_points: /*player_stats.strength_points +*/ null,
          plus_range_damage_points: /*player_stats.range_damage_points +*/ null,
          plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          plus_intellectual_points: /*player_stats.intellectual_points +*/ null,
          plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        reduce: {
          reduce_defense_points: /*player_stats.defense_points -*/ null,
          reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          reduce_speed_points: /*player_stats.speed_points -*/ null,
          reduce_agility_points: /*player_stats.agility_points -*/ null,
          reduce_strength_points: /*player_stats.strength_points -*/ null,
          reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          reduce_hand_damage_points: /*player_stats.hand_damage_points -*/ null,
          reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      effect: {
        good: {
          plus: {},
          descriptions: {},
        },
        bad: {
          plus: {},
          descriptions: {},
        },
      },
    },
    arrows: {
      common: {
        cost: 5,
        damage_points: player_stats.range_damage_points,
      },
      quick: {
        cost: 2.5,
        damage_points: player_stats.range_damage_points,
      },
      heavy: {
        cost: 10,
        damage_points: player_stats.range_damage_points,
      },
      poisoned: {
        cost: 13,
        damage_points: player_stats.range_damage_points,
        poisoned_by: 3,
        damage_point_by_turn: player_stats.range_damage_points / 2,
      },
      fire: {
        cost: 13.5,
        damage_points: player_stats.range_damage_points,
        fire_by: 3,
        damage_point_by_turn: player_stats.range_damage_points / 2,
      },
      explosive: {
        cost: 15,
        damage_points: player_stats.range_damage_points,
        weakness: {
          defense_points: -5,
          damage_points: -5,
        },
        weak_by: 3,
      },
      stunt: {
        amount: 20,
        damage_points: player_stats.range_damage_points,
        turns_stunned: 3,
      },
    },
  },
};
const roles = {
  archer: {
    title: "Imperial Archer",
    stats: {
      plus_defense_points: +0,
      plus_health_points: +0,
      plus_speed_points: +2,
      plus_agility_points: +1,
      plus_strength_points: +0,
      plus_damage_points: +1,
      plus_intellectual_points: +2,
      plus_stamina_points: +0,
    },
    moves: {
      lock_aim: {
        move_name: "Lock Aim",
        damage_points: 0,
        cost: player_stats.consumable_points.current_stamina_points - 2,
        descriptions:
          "You focus with all Your force on the target, making almost impossible to the target to dodge.",
      },
      dry_shot: {
        move_name: "Dry Shot",
        cost: player_stats.consumable_points - player_selected_arrow.arrow_cost,
        damage_points: player_stats.range_damage_points,
        descriptions: "A simple shot, without mercy.",
      },
      switch_arrow: {
        move_name: "Switch Arrow",
        damage_points: 0,
        cost: 0,
        descriptions: "You change te arrow to raise your chances of winning.",
      },
      surprise_punch: {
        move_name: "Surprise Punch",
        damage_points: player_stats.hand_damage_points,
        cost: player_stats.consumable_points.current_anger_points - 2,
        descriptions:
          "You surprise your target by giving a punch very fast in the face... they don't know how to react... They'r attack was cancelled this turn",
      },
      heavy_shot: {
        move_name: "Heavy Shot",
        damage_points: player_stats.range_damage_points * 2,
        cost:
          player_stats.consumable_points.current_concentration_points -
          player_stats.consumable_points.max_concentration_points,
        descriptions:
          "You use all your strength and concentration to push your bow till its limits to double the damage of your attack, but it reduce your chance of damage by half",
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
        no_helmet: {
          item_id: "1-0000",
          item_class: "No Armor",
          item_name: "None",
          descriptions: null,
          effect: null,
        },
        old_scarf: {
          status: {
            item_id: null,
            item_class: "Cloak Type Armor",
            item_name: "Old Scarf",
            descriptions: "Remembers forgotten times... Feels like home.",
            effect: {
              plus_max_concentration_points:
                player_stats.consumable_points.max_concentration_points + 2,
            },
          },
        },
        empire_chain_mail: {
          status: {
            item_id: null,
            item_class: "Chest Type Armor",
            item_name: "Empire Chain Mail",
            descriptions: "You feel heavy, but safe.",
            item_effect: {
              plus_defense_points: player_stats.defense_points + 2,
              reduce_speed_points: player_stats.speed_points - 1,
              plus_hand_damage_points: player_stats.hand_damage_points + 1,
              reduce_agility_points: player_stats.agility_points - 1,
            },
          },
        },
        old_leather_pants: {
          status: {
            item_id: null,
            item_class: "Pants Type Armor",
            item_name: "Old Leather Pants",
            descriptions: "It's old and it was used by other archers... Now it's yours.",
            item_effect: {
              plus_defense_points: player_stats.defense_points + 1,
              plus_speed_points: player_stats.defense_points + 1,
              plus_agility_points: player_stats.agility_points + 1,
            },
          },
        },
        empire_iron_boots: {
          item_id: null,
          item_class: "Boots Type Armor",
          item_name: "Empire Iron Boots",
          descriptions: "Heavy and comfy, the coat of arms is shining, even though these boots are rusted.",
          item_effect: {
            reduce_speed_points: player_stats.speed_points - 1,
            plus_defense_points: player_stats.defense_points + 1,
            plus_hand_damage_points: player_stats.hand_damage_points + 1,
          },
        },
        leather_gloves: {
          concentration_points: player_stats.concentration_points + 2,
          agility_points: player_stats.agility_points + 1,
        },
      },
      consumables: {
        medium_healing_potion: {
          item_id: player_bag.consumables.medium_healing_potion.item_id,
          item_name: player_bag.consumables.medium_healing_potion.item_name,
          item_stats: {
            item_effect: {
              heals:
                player_bag.consumables.medium_healing_potion.item_stats
                  .item_effect.heals,
              amount: 3,
            },
          },
        },
        sandCurtain: {
          item_id: player_bag.consumables.sandCurtain.item_id,
          item_name: player_bag.consumables.sandCurtain.item_name,
          item_stats: {
            item_effect: {
              stunt:
                player_bag.consumables.sandCurtain.item_stats.item_effect.stunt,
              amount: 3,
            },
          },
        },
      },
    },
  },
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
      quick_shot: {
        move_name: "Quick shot",
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
};
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
      check_target: player_target_stats,
      check_object: null,
    },
    treat: treat_target,
    talk: {}, // Unfinished;
    give: {}, // Unfinished;
    lie: {}, // Unfinished;
    surrender_order: {}, // Unfinished;
  },
  spare: {
    forgive: {}, // Unfinished;
    spare_target: {}, // Unfinished;
    flee: {}, // Unfinished;
  },
};
const player_turn = {
  stunned: false,
  proceed: null, // true or false
};
const player_selected_attack = {
  attack_name: null,
  attack_damage_points: null,
  attack_effect: null,
  attack_descriptions: null,
};
const player_has_attacked = {
  /*Did our*/ attack_was_successful: null,
  /*If yes*/ how_much_damage: null,
};
const this_turn_player_was_attacked = {
  /*did player was attacked?*/
  /*if yes...*/
  which_attack: null,
  /*How much*/ damage_received: null,
  /*He din't received damage? So*/ did_he_dodged: null,
};