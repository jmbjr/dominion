import types from '../../cardTypes'
import React from 'react';


const card = {
  name: "Laboratory",
  back: <img src='http://wiki.dominionstrategy.com/images/c/ca/Card_back.jpg' alt='Deck' />,
  front: <img src='http://wiki.dominionstrategy.com/images/thumb/0/0c/Laboratory.jpg/200px-Laboratory.jpg' alt="Laboratory" />,
  isFaceUp: true,
  canHover: true,
  cost: 5,
  count: 10,
  actions: 1,
  cards: 2,
  type: [types.ACTION],
  className: 'card',
};

export default card;