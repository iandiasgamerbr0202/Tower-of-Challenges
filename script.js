const _treat_target = function treat_target() {
  if (Math.floor(Math.random() * 10) === 0) {
    _yourTreatDintWorked();
  } else {
    _yourTreatWorked();
  }
};
const _yourTreatDintWorked = function _positivePoint() {
  _player_target_stats._consumable_points._current_anger_points += 1;
  return console.log(
    `${_player_target_stats._name} din't payed attention on what you said.`
  );
}; //Player treat the target but the target will get more angry or confident;
const _yourTreatWorked = function _negativePoint() {
  _player_target_stats._consumable_points._current_anger_points -= 1;
  return console.log(
    `${_player_target_stats._name} was slightly shaken about what you said.`
  );
}; //Player treat the target and the target get uncomfortable/sad/anxious/scared
const _player_selected_arrow = {
  _arrow_name: null,
  _arrow_cost: null,
  _arrow_effect: null,
  _arrow_description: null,
};
const _player_stats = {
  _name: null,
  _gender: {
    _male: false,
    _female: false,
  },
  _role: undefined,
  _level: 1,
  _current_exp: 0,
  _max_exp: 50,
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
  _defense_points: 5,
  _current_health_points: 100,
  _max_health_points: 100,
  _speed_points: 5,
  _agility_points: 5,
  _strength_points: 5,
  _range_damage_points: 0,
  _hand_damage_points: 1,
  _intellectual_points: 5,
  _consumable_points: {
    _max_stamina_points: 5,
    _max_concentration_points: 5,
    _max_anger_points: 5,
    _current_stamina_points: 5,
    _current_concentration_points: 5,
    _current_anger_points: 0,
  },
  _negative_effect: {
    _poisoned: {
      _amount_of_turns: null,
      _damage_points_by_turn: null,
    },
    _on_fire: {
      _amount_of_turns: null,
      _damage_points_by_turn: null,
    },
    _stunned: {
      _amount_of_turns: null,
    },
    _weak: {
      _amount_of_turns: null,
      _damage_points_reduced: null,
    },
  },
  _money_bag: {
    _copper_coins: null,
    _silver_coins: null, //1 silver = 1000 copper,
    _gold_coins: null, // 1 gold = 1000 silver and 1.000.000 copper
    _royal_coin: null, // 1 royal = 1000 gold and 1.000.000 silver and 1.000.000.000 copper
  },
};
const _player_target_stats = {
  _name: null,
  _gender: {
    _male: false,
    _female: false,
  },
  _role: undefined,
  _level: null,
  _min_exp_drop: null,
  _max_exp_drop: null,
  _defense_points: 5,
  _current_health_points: null,
  _max_health_points: null,
  _speed_points: null,
  _agility_points: null,
  _strength_points: null,
  _range_damage_points: null,
  _hand_damage_points: null,
  _intellectual_points: null,
  _consumable_points: {
    _max_stamina_points: null,
    _max_concentration_points: null,
    _max_anger_points: null,
    _current_stamina_points: null,
    _current_concentration_points: null,
    _current_anger_points: null,
  },
  _negative_effect: {
    _poisoned: {
      _amount_of_turns: null,
      _damage_points_by_turn: null,
    },
    _on_fire: {
      _amount_of_turns: null,
      _damage_points_by_turn: null,
    },
    _stunned: {
      _amount_of_turns: null,
    },
    _weak: {
      _amount_of_turns: null,
      _damage_points_reduced: null,
    },
  },
};
const _player_bag = {
  _armor: {
    _helmet: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _necklace: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _cloak: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _chestArmor: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _gloves: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _ring1: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _ring2: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _ring3: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _ring4: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _bracelet1: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _bracelet2: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _trinket1: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _trinket2: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _pants: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _pants: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _boots: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
  },
  _consumables: {
    _small_healing_potion: {
      _item_id: null,
      _item_name: "Small Healing Potion",
      _item_stats: {
        _item_effect: {
          _heals: _player_stats._current_health_points + 15,
          _amount: null,
        },
      },
    },
    _medium_healing_potion: {
      _item_id: null,
      _item_name: "Medium Healing Potion",
      _item_stats: {
        _item_effect: {
          _heals: _player_stats._current_health_points + 50,
          _amount: null,
        },
      },
    },
    _big_healing_potion: {
      _item_id: null,
      _item_name: "Big Healing Potion",
      _item_stats: {
        _item_effect: {
          _heals: _player_stats._current_health_points + 100,
          _amount: null,
        },
      },
    },
    _sandCurtain: {
      _item_id: null,
      _item_name: "Sand Curtain",
      _item_stats: {
        _item_effect: {
          _stunt: (_player_target_stats._negative_effect._stunned = 1),
          _amount: null,
        },
      },
    },
    _anti_toxin_syringe: {
      _item_id: null,
      _item_name: " Anti-Toxin Syringe ",
      _item_stats: {
        _item_effect: {
          _poisoned: (_player_stats._negative_effect._poisoned = 0),
          _amount: null,
        },
      },
    },
    _herbal_salve: {
      _item_id: null,
      _item_name: "Herbal Save",
      _item_stats: {
        _item_effect: {
          _heals_by_turn: _player_stats._current_health_points + 5,
          _total_heal: 25,
          _amount_of_turns: 5,
          _turns_left: 0,
          _amount: null,
        },
      },
    },
    _stimulating_tea: {
      _item_id: null,
      _item_name: "Stimulating Tea",
      _item_stats: {
        _item_effect: {
          _plus_agility_points: _player_stats._agility_points + 2,
          _plus_speed_points: _player_stats._speed_points + 2,
          _amount_of_turns: 2,
          _amount: null,
        },
      },
    },
    _toughening_tincture: {
      _item_id: null,
      _item_name: "Toughening Tincture",
      _item_stats: {
        _item_effect: {
          _plus_defense_points: _player_stats._defense_points + 5,
          _amount_of_turns: 3,
          _amount: null,
        },
      },
    },
    _adrenaline_shot: {
      _item_id: null,
      _item_name: "Adrenaline Shot",
      _item_stats: {
        _item_effect: {
          _plus_agility_points: _player_stats._agility_points + 5,
          _plus_speed_points: +5,
          _amount_of_turns: 3,
          _amount: null,
        },
      },
    },
    _smoke_bomb: {
      _item_id: null,
      _item_name: "Smoke Bomb",
      _item_stats: {
        _item_effect: {
          _invisibility: _player_stats._agility_points + 300,
          _amount_of_turns: 3,
          _descriptions: null,
          _amount: null,
        },
      },
    },
    _new_item_to_be_added: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _item_effect: {
          _plus: {
            _plus_defense_points: /*player_stats.defense_points +*/ null,
            _plus_max_health_points: /*player_stats.max_health_points +*/ null,
            _plus_speed_points: /*player_stats.speed_points +*/ null,
            _plus_agility_points: /*player_stats.agility_points +*/ null,
            _plus_strength_points: /*player_stats.strength_points +*/ null,
            _plus_range_damage_points:
              /*player_stats.range_damage_points +*/ null,
            _plus_hand_damage_points:
              /*player_stats.hand_damage_points +*/ null,
            _plus_intellectual_points:
              /*player_stats.intellectual_points +*/ null,
            _plus_max_stamina_points:
              /*player_stats.consumable_points.max_stamina_points +*/ null,
            _plus_max_concentration_points:
              /*player_stats.consumable_points.max_concentration_points +*/ null,
            _plus_max_anger_points:
              /*player_stats.consumable_points.max_anger_points +*/ null,
          },
          _descriptions: null,
          _amount_of_turns: null,
          _amount: null,
        },
      },
    },
  },
  _weapons: {
    _weapon: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _shield: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _bow: {
      _item_id: null,
      _item_name: null,
      _item_stats: {
        _plus: {
          _plus_defense_points: /*player_stats.defense_points +*/ null,
          _plus_max_health_points: /*player_stats.max_health_points +*/ null,
          _plus_speed_points: /*player_stats.speed_points +*/ null,
          _plus_agility_points: /*player_stats.agility_points +*/ null,
          _plus_strength_points: /*player_stats.strength_points +*/ null,
          _plus_range_damage_points:
            /*player_stats.range_damage_points +*/ null,
          _plus_hand_damage_points: /*player_stats.hand_damage_points +*/ null,
          _plus_intellectual_points:
            /*player_stats.intellectual_points +*/ null,
          _plus_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points +*/ null,
          _plus_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points +*/ null,
          _plus_max_anger_points:
            /*player_stats.consumable_points.max_anger_points +*/ null,
        },
        _reduce: {
          _reduce_defense_points: /*player_stats.defense_points -*/ null,
          _reduce_max_health_points: /*player_stats.max_health_points -*/ null,
          _reduce_speed_points: /*player_stats.speed_points -*/ null,
          _reduce_agility_points: /*player_stats.agility_points -*/ null,
          _reduce_strength_points: /*player_stats.strength_points -*/ null,
          _reduce_range_damage_points:
            /*player_stats.range_damage_points -*/ null,
          _reduce_hand_damage_points:
            /*player_stats.hand_damage_points -*/ null,
          _reduce_intellectual_points:
            /*player_stats.intellectual_points -*/ null,
          _reduce_max_stamina_points:
            /*player_stats.consumable_points.max_stamina_points -*/ null,
          _reduce_max_concentration_points:
            /*player_stats.consumable_points.max_concentration_points -*/ null,
          _reduce_max_anger_points:
            /*player_stats.consumable_points.max_anger_points -*/ null,
        },
      },
      _effect: {
        _good: {
          _plus: {},
          _descriptions: {},
        },
        _bad: {
          _plus: {},
          _descriptions: {},
        },
      },
    },
    _arrows: {
      _common: {
        _cost: 5,
        _damage_points: player_stats.range_damage_points,
      },
      _quick: {
        _cost: 2.5,
        _damage_points: player_stats.range_damage_points,
      },
      _heavy: {
        _cost: 10,
        _damage_points: player_stats.range_damage_points,
      },
      _poisoned: {
        _cost: 13,
        _damage_points: player_stats.range_damage_points,
        _poisoned_by: 3,
        _damage_point_by_turn: player_stats.range_damage_points / 2,
      },
      _fire: {
        _cost: 13.5,
        _damage_points: player_stats.range_damage_points,
        _fire_by: 3,
        _damage_point_by_turn: player_stats.range_damage_points / 2,
      },
      _explosive: {
        _cost: 15,
        _damage_points: player_stats.range_damage_points,
        _weakness: {
          _defense_points: -5,
          _damage_points: -5,
        },
        _weak_by: 3,
      },
      _stunt: {
        _amount: 20,
        _damage_points: player_stats.range_damage_points,
        _turns_stunned: 3,
      },
    },
  },
};
const _roles = {
  _imperial_archer: {
    _title: "Imperial Archer",
    _stats: {
      _plus_defense_points: 1,
      _plus_speed_points: 2,
      _plus_agility_points: 1,
      _plus_hand_damage_points: 1,
      _plus_intellectual_points: 2,
      _plus_concentration_points: 1,
    },
    _moves: {
      _lock_aim: {
        _move_name: "Lock Aim",
        _damage_points: 0,
        _cost: _player_stats._consumable_points._current_stamina_points - 2,
        _descriptions:
          "You focus with all Your force on the target, making almost impossible to the target to dodge.",
      },
      _dry_shot: {
        _move_name: "Dry Shot",
        _cost:
          _player_stats._consumable_points - _player_selected_arrow._arrow_cost,
        _damage_points: player_stats.range_damage_points,
        _descriptions: "A simple shot, without mercy.",
      },
      _switch_arrow: {
        _move_name: "Switch Arrow",
        _damage_points: 0,
        _cost: 0,
        _descriptions: "You change te arrow to raise your chances of winning.",
      },
      _surprise_punch: {
        _move_name: "Surprise Punch",
        _damage_points: _player_stats._hand_damage_points,
        _cost: _player_stats._consumable_points._current_anger_points - 2,
        _descriptions:
          "You surprise your target by giving a punch very fast in the face... they don't know how to react... They'r attack was cancelled this turn",
      },
      _heavy_shot: {
        _move_name: "Heavy Shot",
        _damage_points:
          player_stats.range_damage_points +
          (player_stats.hand_damage_points % 2),
        _cost:
          _player_stats._consumable_points._current_concentration_points -
          _player_stats._consumable_points._max_concentration_points,
        _descriptions:
          "You use all your strength and concentration to push your bow till its limits to double the damage of your attack, but it reduce your chance of damage by half",
      },
    },
    _start_bag: {
      _weapon: {
        _common_arrow: _player_bag._weapons._arrows._common,
        _heavy_arrow: _player_bag._weapons._arrows._heavy,
        _imperial_bow: {
          _range_damage_points: _player_stats._range_damage_points + 5,
          _agility_points: _player_stats._agility_points + 2,
          _effect: {
            _effect_name: "Stone Hands",
            _hand_damage_points: _player_stats._hand_damage_points + 2,
            _slowness: _player_stats._agility_points - 1,
          },
        },
      },
      _armor: {
        _no_helmet: {
          _item_id: "1-0000",
          _item_class: "No Armor",
          _item_name: "None",
          _descriptions: null,
          _effect: null,
        },
        _old_scarf: {
          _status: {
            _item_id: null,
            _item_class: "Cloak Type Armor",
            _item_name: "Old Scarf",
            _descriptions: "It's old and dusted.",
            _effect: {
              _plus_max_concentration_points:
                _player_stats._consumable_points._max_concentration_points + 2,
            },
          },
        },
        _empire_chain_mail: {
          _status: {
            _item_id: null,
            _item_class: "Chest Type Armor",
            _item_name: "Empire Chain Mail",
            _descriptions: "You feel heavy, but safe.",
            _item_effect: {
              _plus_defense_points: _player_stats._defense_points + 2,
              _reduce_speed_points: _player_stats._speed_points - 1,
              _plus_hand_damage_points: _player_stats._hand_damage_points + 1,
              _reduce_agility_points: _player_stats._agility_points - 1,
            },
          },
        },
        _old_leather_pants: {
          _status: {
            _item_id: null,
            _item_class: "Pants Type Armor",
            _item_name: "Old Leather Pants",
            _descriptions:
              "It's old and it was used by other archers... Now it's yours.",
            _item_effect: {
              _plus_defense_points: _player_stats._defense_points + 1,
              _plus_speed_points: _player_stats._defense_points + 1,
              _plus_agility_points: _player_stats._agility_points + 1,
            },
          },
        },
        _empire_iron_boots: {
          _item_id: null,
          _item_class: "Boots Type Armor",
          _item_name: "Empire Iron Boots",
          _descriptions:
            "Heavy and comfy, the coat of arms is shining, even though these boots are rusted.",
          _item_effect: {
            _reduce_speed_points: _player_stats._speed_points - 1,
            _plus_defense_points: _player_stats._defense_points + 1,
            _plus_hand_damage_points: _player_stats._hand_damage_points + 1,
          },
        },
        _old_leather_gloves: {
          _item_id: null,
          _item_class: "Gloves Type Armor",
          _item_name: "Old Leather Gloves",
          _descriptions: "Fit perfectly on your hand, feels firm.",
          _item_effect: {
            _plus_concentration_points: _player_stats._concentration_points + 2,
            _plus_agility_points: _player_stats._agility_points + 1,
          },
        },
      },
      _consumables: {
        _medium_healing_potion: {
          _item_id: _player_bag._consumables._medium_healing_potion._item_id,
          _item_name:
            _player_bag._consumables._medium_healing_potion._item_name,
          _item_stats: {
            _item_effect: {
              _heals:
                _player_bag._consumables._medium_healing_potion._item_stats
                  ._item_effect._heals,
              _amount: 3,
            },
          },
        },
        _sandCurtain: {
          _item_id: _player_bag._consumables._sandCurtain._item_id,
          _item_name: _player_bag._consumables._sandCurtain._item_name,
          _item_stats: {
            _item_effect: {
              _stunt:
                _player_bag._consumables._sandCurtain._item_stats._item_effect
                  ._stunt,
              _amount: 3,
            },
          },
        },
      },
    },
  },
  _hunter: {
    _title: "Wild Hunter",
    _stats: {
      _defense_points: +1,
      _health_points: +0,
      _speed_points: +0,
      _agility_points: +2,
      _strength_points: +1,
      _damage_points: +1,
      _intellectual_points: +0,
      _stamina_points: +1,
    },
    _moves: {
      _quick_shot: {
        __move_name: "Quick shot",
        _damage_points: _player_stats._range_damage_points,
        _descriptions:
          "Without thinking or aiming, You shot on the first thing You see moving in Your direction.",
        _consumable_points: {
          _concentration_points: 3,
        },
      },
      _switch_arrow: {
        _move_name: "Switch Arrow",
        _damage_points: 0,
        _descriptions: "You change te arrow to raise your chances of winning.",
      },
      _bear_trap: {
        _move_name: "Bear Trap",
        _damage_points: 20,
        _descriptions:
          "You set a trap on the battle field and the first who attack you will be trapped",
        _trapped_by: 3,
        _cost: _player_stats._consumable_points._current_stamina_points - 2,
      },
    },
    _start_bag: {},
  }, // stats complete, moves half-step, start_bag missing
  _warrior: {
    _title: "Imperial Warrior",
    _stats: {
      _defense_points: +2,
      _health_points: +0,
      _speed_points: +0,
      _agility_points: +0,
      _strength_points: +1,
      _damage_points: +1,
      _intellectual_points: +0,
      _stamina_points: +2,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _swordArtist: {
    _title: "Sword Artist",
    _stats: {
      _defense_points: +0,
      _health_points: +0,
      _speed_points: +1,
      _agility_points: +2,
      _strength_points: +1,
      _damage_points: +2,
      _intellectual_points: +0,
      _stamina_points: +0,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _barbarian: {
    _title: "Barbarian",
    _stats: {
      _defense_points: +2,
      _health_points: +0,
      _speed_points: +0,
      _agility_points: +0,
      _strength_points: +2,
      _damage_points: +2,
      _intellectual_points: +0,
      _stamina_points: +0,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _knight: {
    _title: "Knight",
    _stats: {
      _defense_points: +3,
      _health_points: +0,
      _speed_points: +0,
      _agility_points: +0,
      _strength_points: +1,
      _damage_points: +2,
      _intellectual_points: +0,
      _stamina_points: +0,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _brawler: {
    _title: "Street Brawler",
    _stats: {
      _defense_points: +0,
      _health_points: +0,
      _speed_points: +0,
      _agility_points: +2,
      _strength_points: +2,
      _damage_points: +0,
      _intellectual_points: +0,
      _stamina_points: +2,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _combat_master: {
    _title: "Combat Master",
    _stats: {
      _defense_points: +0,
      _health_points: +0,
      _speed_points: +0,
      _agility_points: +3,
      _strength_points: +0,
      _damage_points: +0,
      _intellectual_points: +3,
      _stamina_points: +0,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _bard: {
    _title: "Bard",
    _stats: {
      _defense_points: +0,
      _health_points: +0,
      _speed_points: +2,
      _agility_points: +2,
      _strength_points: +0,
      _damage_points: +0,
      _intellectual_points: +2,
      _stamina_points: +0,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
  _rogue: {
    _title: "Rogue",
    _stats: {
      _defense_points: +0,
      _health_points: +0,
      _speed_points: +2,
      _agility_points: +3,
      _strength_points: +0,
      _damage_points: +1,
      _intellectual_points: +1,
      _stamina_points: +0,
    },
    _moves: {},
    _start_bag: {},
  }, // isn't complete
};
const _player_moves = {
  _common_move: {
    _a: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // ready to receive a common attack;
    _b: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // ready to receive a common attack;
    _c: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // ready to receive a common attack;
    _d: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // ready to receive a common attack;
    _e: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // ready to receive a common attack;
    _f: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // ready to receive a common attack;
  }, // Ready to Update;
  _special_move: {
    _a: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // Ready to receive a special move;
    _b: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // Ready to receive a special move;
    _c: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // Ready to receive a special move;
    _d: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // Ready to receive a special move;
    _e: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // Ready to receive a special move;
    _f: {
      _move_name: null,
      _damage_points: null,
      _move_description: null,
      _consumable_points: null,
    }, // Ready to receive a special move;
  }, // Ready to Update;
  _interact: {
    _check: {
      _check_target: _player_target_stats,
      _check_object: null,
    },
    _treat: _treat_target,
    _talk: {}, // Unfinished;
    _give: {}, // Unfinished;
    _lie: {}, // Unfinished;
    _surrender_order: {}, // Unfinished;
  },
  _spare: {
    _forgive: {}, // Unfinished;
    _spare_target: {}, // Unfinished;
    _flee: {}, // Unfinished;
  },
};
const _player_turn = {
  _stunned: false,
  _proceed: null, // true or false
};
const _player_selected_attack = {
  _attack_name: null,
  _attack_damage_points: null,
  _attack_effect: null,
  _attack_descriptions: null,
};
const _player_has_attacked = {
  /*Did our*/ _attack_was_successful: null,
  /*If yes*/ _how_much_damage: null,
};
const _this_turn_player_was_attacked = {
  /*did player was attacked?*/
  /*if yes...*/
  _which_attack: null,
  /*How much*/ _damage_received: null,
  /*He din't received damage? So*/ _did_he_dodged: null,
};
