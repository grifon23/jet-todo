import * as actionsTask from "./types";

export const addTask = (title, cardId, description) => ({
  type: actionsTask.TASK_ADD,
  payload: { title, cardId, description },
});
export const removeTask = (id) => ({
  type: actionsTask.TASK_REMOVE,
  payload: id,
});
export const showModalTask = (id) => ({
  type: actionsTask.TASK_SHOW_MODAL,
  payload: id,
});

export const editModalTask = (id, title, description) => ({
  type: actionsTask.TASK_EDIT_MODAL,
  payload: { id, title, description },
});
