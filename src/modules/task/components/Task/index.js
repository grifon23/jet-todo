import React from "react";
import { useDispatch } from "react-redux";
import * as actionsTask from "../../../../store/tasks/actions";
import "./style.css";

export const Task = ({ task }) => {
  const { id } = task;
  const dispatch = useDispatch();

  const openModalTask = () => {
    dispatch(actionsTask.showModalTask(id));
    console.log("showModalTask", id);
  };

  const delTask = () => {
    dispatch(actionsTask.removeTask({ id }));
  };
  return (
    <div>
      <div className="task">
        <h4 className="task-item" onClick={openModalTask}>
          {task.title}
        </h4>
        <button className="del" onClick={delTask}>
          del
        </button>
      </div>
    </div>
  );
};
