import React from "react";

import { Card } from "../Card";

export const CardList = ({ cards }) => {
  return (
    <ul className="flex">
      {cards.map((card) => (
        <div>
          <Card key={card.id} card={card} />
        </div>
      ))}
    </ul>
  );
};
