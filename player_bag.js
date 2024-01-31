let player_bag = {
    armor: {
      helmet: null,
      necklace: null,
      cloak: null,
      chestArmor: null,
      gloves: null,
      ring1: null,
      ring2: null,                              //all of these will receive an object;
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
          stunt: player_target_stats.turns_stunned = 1,
        },
        amount: null,
      },
      anti_toxin_syringe: {
        item_name: " Anti-Toxin Syringe ",
        effect: {
          poisoned: player_stats.negative_effect.poisoned = 0,
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
        item_name: "Thoughening Tincture",
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
          amount_of_turns: 3
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
  };//This variable is completely ready to receive new data and update itself;
  