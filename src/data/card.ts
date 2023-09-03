import { Card } from '../../tm-game-shared/types';
import { GPType, Tag } from '../../tm-game-shared/enum';
import { minConstraintGP } from '../util';

const colonizer_training_camp: Card = {
  id: "001",
  name: "개척단 훈련소",
  cost: 8,
  tags: [Tag.Jovian, Tag.Building],
  constraint: (c) => minConstraintGP(c, GPType.Oxygen, 5),
  vp: () => 2,
};

const cardData = [
  colonizer_training_camp,
];

export default cardData;