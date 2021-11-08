import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { useDispatch } from "react-redux";
import * as actionsTask from "../../../../store/tasks/actions";
import moment from "moment";

export const AddNewTask = ({ cardId }) => {
  const [titleTask, setTitleTask] = useState("");
  const [discriptionTask, setDiscriptionTask] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [value, onChange] = useState("");
  const dispatch = useDispatch();

  const handleTitleTask = (e) => {
    setTitleTask(e.target.value);
  };
  let currDate = new Date();
  useEffect(() => {
    if (value && currDate > value) {
      alert("Введена неправильная дата ");
      onChange("");
    }
  }, [value]);

  const onNewTask = (e) => {
    e.preventDefault();
    if (titleTask !== "") {
      dispatch(actionsTask.addTask(titleTask, cardId, discriptionTask));
    } else {
      alert("Введите задачу");
    }
    setTitleTask("");
    setDiscriptionTask("");
  };

  return (
    <div>
      {isOpen ? (
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="btn-add"
        >
          Добавить задачу
        </button>
      ) : (
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            setIsOpen(true);
            e.preventDefault();
          }}
          className="form-addCard"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{moment().format("DD/MM/yyy")}</p>
            <DatePicker format="dd/MM/yyy" onChange={onChange} value={value} />
          </div>
          <input
            value={titleTask}
            onChange={handleTitleTask}
            className="form-addCard__input"
            type="text"
            placeholder="Введите задачу"
          />

          <textarea
            value={discriptionTask}
            onChange={(e) => setDiscriptionTask(e.target.value)}
            className="form-addCard__input"
            placeholder="Описание задачи"
          />

          <div className="form-addCard__group-btn">
            <button onClick={onNewTask} className="form-addCard__add-btn">
              Добавить задачу
            </button>
            <button
              className="form-addCard__close-btn"
              onClick={() => setIsOpen(true)}
            >
              X
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
