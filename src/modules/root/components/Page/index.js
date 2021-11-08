import React from "react";
import { useSelector } from "react-redux";
import { CardList } from "../../../cards/components/CardList/index";
import { AddNewCard } from "../../../cards/components/AddNewCard";
import { Header } from "../Header";
import { TaskModal } from "../../../task/components/TaskModal";
import "./style.css";

export const Page = ({ setUser }) => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <div>
      <Header />
      <div className="flex">
        <button style={{ height: "40px" }} onClick={() => setUser(null)}>
          Exit
        </button>
        <AddNewCard />
        <CardList cards={cards} />
        <TaskModal />
      </div>
    </div>
  );
};
