let player_stats = {
    name: null,
    gender: null,
    role: null,
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
  };