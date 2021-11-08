import * as actionsCards from "./types";

let cardId = 0;
let cardOrder = 0;
const initialState = {
  cards: [
    {
      id: cardId,
      title: "test card",
      order: cardOrder,
    },
  ],
};

export default function cards(state = initialState, action) {
  let newCards = [...state.cards];
  switch (action.type) {
    case actionsCards.CARD_ADD:
      const newCard = {
        id: ++cardId,
        title: action.payload.title,
        order: ++cardOrder,
      };

      return { ...state, cards: [...state.cards, newCard] };

    case actionsCards.CARD_REMOVE:
      return {
        ...state,
        cards: state.cards.filter((card) => action.payload.id !== card.id),
      };
    case actionsCards.CARD_MOVE_LEFT:
      let findIndextCard = state.cards.findIndex(
        (item) => item.id === action.payload
      );

      if (findIndextCard < newCards.length - 1) {
        let rightCard = newCards[findIndextCard];
        let leftCard = newCards[findIndextCard + 1];
        let currentOrder = rightCard.order;
        rightCard.order = leftCard.order;
        leftCard.order = currentOrder;
      }

      return {
        ...state,
        cards: newCards.sort((a, b) => {
          return a.order - b.order;
        }),
      };
    case actionsCards.CARD_MOVE_RIGHT:
      let indextCard = state.cards.findIndex(
        (item) => item.id === action.payload
      );
      console.log("index", indextCard);

      if (indextCard < newCards.length + 1) {
        let rightCard = newCards[indextCard - 1];
        let leftCard = newCards[indextCard];
        let currentOrder = leftCard.order;
        leftCard.order = rightCard.order;
        rightCard.order = currentOrder;
      }
      return {
        ...state,
        cards: newCards.sort((a, b) => {
          return a.order - b.order;
        }),
      };
    default:
      return state;
  }
}
