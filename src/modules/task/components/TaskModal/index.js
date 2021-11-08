import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editModalTask, showModalTask } from "../../../../store/tasks/actions";
import "./style.css";

export const TaskModal = () => {
  const state = useSelector((state) => state.tasks);
  const [task] = state.tasks.filter((_task) => _task.id === state.editTaskId);
  const [form, setForm] = useState({ title: "", description: "" });

  const setFormField = (field, value) => {
    setForm((oldState) => {
      return { ...oldState, [field]: value };
    });
  };

  useEffect(() => {
    if (task) {
      setForm({ title: task.title, description: task.description });
    }
  }, [task]);

  const isShowModal = Boolean(task);

  const dispatch = useDispatch();
  const saveChangeTask = () => {
    dispatch(editModalTask(task.id, form.title, form.description));
    closeModal();
  };
  const closeModal = () => {
    dispatch(showModalTask(null));
    setForm({ title: "", description: "" });
  };
  return (
    <div className={isShowModal ? "modal active" : "modal"}>
      <div className="modal__container">
        <div>
          <h2>Редактирование задачи</h2>
          <h3>123</h3>
          <input
            onChange={(e) => setFormField("title", e.target.value)}
            value={form.title}
            className="form-addCard__input"
            type="text"
          />
          <h4>Описание задачи</h4>
          <textarea
            onChange={(e) => setFormField("description", e.target.value)}
            value={form.description}
            className="form-addCard__input"
          />
          <div>
            <button onClick={saveChangeTask} className="modal_button">
              Ok
            </button>
            <button onClick={closeModal} className="modal_button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
