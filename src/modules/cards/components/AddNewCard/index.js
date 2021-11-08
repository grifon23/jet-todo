import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionsCards from "../../../../store/cards/actions";

import "./style.css";

export const AddNewCard = () => {
  const [cardTitle, setCardTitle] = useState("");
  const [isVible, setIsVible] = useState(true);

  const dispatch = useDispatch();

  const onCardTitle = (e) => {
    setCardTitle(e.target.value);
  };

  const onSubmitCard = (e) => {
    e.preventDefault();
    if (cardTitle !== "") {
      dispatch(
        actionsCards.addCard({
          title: cardTitle,
        })
      );
    } else {
      alert("Введите назву карточки");
    }
    setCardTitle("");
  };

  return (
    <div>
      {isVible ? (
        <button
          className="btn-add"
          onClick={(e) => {
            setIsVible(false);
            e.preventDefault();
          }}
        >
          {" "}
          + Добавить карточку
        </button>
      ) : (
        <form
          onSubmit={(e) => {
            setIsVible(false);
            e.preventDefault();
          }}
          className="form-addCard"
        >
          <input
            value={cardTitle}
            onChange={onCardTitle}
            className="form-addCard__input"
            type="text"
            placeholder="Ввести заголовок карточки"
          />
          <div className="form-addCard__group-btn">
            <button onClick={onSubmitCard} className="form-addCard__add-btn">
              Добавить карточку
            </button>
            <button
              className="form-addCard__close-btn"
              onClick={() => setIsVible(true)}
            >
              X
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
