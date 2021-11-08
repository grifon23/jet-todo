import React from "react";
import { Task } from "../Task";

export const TaskList = ({ card, tasks }) => {
  return (
    <ul style={{ padding: "0" }}>
      {tasks.map((task) => (
        <Task key={card.id} task={task} />
      ))}
    </ul>
  );
};
