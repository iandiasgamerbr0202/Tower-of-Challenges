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
      talk: {}, // Unfinished;
      give: {}, // Unfinished;
      lie: {}, // Unfinished;
      surrender_order: {}, // Unfinished;
    }, // Unfinished;
    spare: {
      forgive: {}, // Unfinished; Throw Error;
      spare_target:{}, // Unfinished; Throw Error;
      flee:{}, // Unfinished; Throw Error;
    },
  }; //This variable isn't complete and isn't ready;  