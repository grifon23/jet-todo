import * as actionsTask from "./types";

let taskId = 0;

const initialState = {
  tasks: [],
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case actionsTask.TASK_ADD:
      const newTask = {
        id: ++taskId,
        title: action.payload.title,
        description: action.payload.description,
        cardId: action.payload.cardId,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case actionsTask.TASK_REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => action.payload.id !== task.id),
      };
    case actionsTask.TASK_SHOW_MODAL:
      return {
        ...state,
        editTaskId: action.payload,
      };

    case actionsTask.TASK_EDIT_MODAL:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              id: action.payload.id,
              title: action.payload.title,
              description: action.payload.description,
            };
          }

          return { ...task };
        }),
      };
    default:
      return state;
  }
}
