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
      anti_toxin_syringe: {
        item_name: " Anti-Toxin Syringe ",
        effect: player_stats.negative_effect.poisoned = 0,
        amount:0,
      },
      herbal_salve: {
        item_name: "Herbal Save",
        effect: {
          heals_by_turn: 5,
          amount_of_turns: 5,
          use: function useHerbalSalve() {
            // Check if it's the player's turn and the item is in hand
            if (player_turn === true && player_bag.consumables.herbal_salve.amount > 0) {
              player_stats.current_health_points += player_bag.consumables.herbal_salve.effect.heals_by_turn;
              console.log(`${player_stats.name} healed ${player_bag.consumables.herbal_salve.effect.heals_by_turn}. Now they have ${player_stats.current_health_points} HP.`);
          
              // Reduce the item amount
              player_bag.consumables.herbal_salve.amount--;
          
              // Reset turns if the item is used
              player_bag.consumables.herbal_salve.current_turn = 0;
            } else {
              console.log(`It must be your turn, and you should have the ${player_bag.consumables.herbal_salve.item_name} in hand to use it.`);
            }
          } // still on test        
        }
      },
      stimulating_tea: null,
      toughening_tincture: null,
      adrenaline_shot: null,
      smoke_bomb: null,
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
  