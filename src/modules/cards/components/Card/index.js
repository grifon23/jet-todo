import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  moveRightCard,
  removeCard,
  moveLeftCard,
} from "../../../../store/cards/actions";
import { AddNewTask } from "../../../task/components/AddNewTAsk";
import { TaskList } from "../../../task/components/TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import "./style.css";

export const Card = ({ card }) => {
  const { title, id } = card;
  const state = useSelector((state) => state.tasks);
  const tasks = state.tasks.filter((task) => task.cardId === id);
  const dispatch = useDispatch();

  const onMoveCardLeft = () => {
    dispatch(moveLeftCard(id));
  };

  const onMoveCardRight = () => {
    dispatch(moveRightCard(id));
  };
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          height: "40px",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon
          onClick={onMoveCardLeft}
          className="iconArrow"
          icon={faArrowAltCircleLeft}
          size="2x"
        />

        <h3 style={{ textAlign: "center" }}>{title}</h3>

        <FontAwesomeIcon
          onClick={onMoveCardRight}
          icon={faArrowAltCircleRight}
          className="iconArrow"
          size="2x"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeCard({ id }));
        }}
        className="del"
      >
        X
      </button>

      <TaskList card={card} tasks={tasks} />
      <AddNewTask cardId={card.id} />
    </div>
  );
};
