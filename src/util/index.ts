import { GPType } from "../../tm-game-shared/enum";
import { Circumstance } from "../../tm-game-shared/types";

export const minConstraintGP = (c: Circumstance, gp: GPType, standard: number) => {
  let now: number = -Infinity;
  if (gp == GPType.Temperature)
    now = c.globalParameter.temperature;
  else if (gp == GPType.Oxygen)
    now = c.globalParameter.oxygen;
  else if (gp == GPType.Ocean)
    now = c.globalParameter.ocean;
  
  // if (c.player[c.turn].passives.find(CardPool.Special_Design))
  //   standard -= 2;
  // if (c.player[c.turn].passives.find(CardPool.Adaptation_Technology))
  //   standard -= 2;
  
  return now >= standard;
};

export const maxConstraintGP = (c: Circumstance, gp: GPType, standard: number) => {
  let now: number = Infinity;
  if (gp == GPType.Temperature)
    now = c.globalParameter.temperature;
  else if (gp == GPType.Oxygen)
    now = c.globalParameter.oxygen;
  else if (gp == GPType.Ocean)
    now = c.globalParameter.ocean;
  
  // if (c.player[c.turn].passives.find(CardPool.Special_Design))
  //   standard += 2;
  // if (c.player[c.turn].passives.find(CardPool.Adaptation_Technology))
  //   standard += 2;
  
  return now <= standard;
};
