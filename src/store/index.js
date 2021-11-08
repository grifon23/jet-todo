import { combineReducers } from "redux";
import { createStore } from "redux";
import cards from "./cards/reducer";
import tasks from "./tasks/reducer";
const rootReducer = combineReducers({
  cards,
  tasks,
});
export const store = createStore(rootReducer);
