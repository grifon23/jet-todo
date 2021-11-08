import * as actionsCards from "./types";

export const addCard = (card) => ({
  type: actionsCards.CARD_ADD,
  payload: card,
});
export const removeCard = (id) => ({
  type: actionsCards.CARD_REMOVE,
  payload: id,
});
export const moveLeftCard = (id) => ({
  type: actionsCards.CARD_MOVE_LEFT,
  payload: id,
});
export const moveRightCard = (order) => ({
  type: actionsCards.CARD_MOVE_RIGHT,
  payload: order,
});
