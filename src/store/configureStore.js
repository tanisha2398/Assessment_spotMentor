import { createStore, combineReducers } from "redux";
import classroomReducer from "../reducers/classroom";
export default () => {
  const store = createStore(
    combineReducers({
      classrooms: classroomReducer
    })
  );
  return store;
};
