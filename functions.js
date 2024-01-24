const oneAgainstTenProbability = function oneAgainstTenProbability() {
    if (Math.floor(Math.random() * 10) === 0) {
        positivePoint(); // call positive function;
    } else {
        negativePoint(); // call negative function;
    }
  };
  function positivePoint() {
    player_target_stats.pride_points += 1;
    return console.log(`${player_target_stats.name} din't payed attention on what you said.`)
  }; //Player treat the target but the target will get mored angry or conficonfident;
  function negativePoint() {
    player_target_stats.pride_points -= 1;
    return console.log(`${player_target_stats.name} was slightly shaken about what you said.`)
  }; 
/*
  Player treat the target and the target get a litle scared about what you said;
*/