import data from "../classroom_data.json";
const classroomReducerDefaultState = data;
const classroomReducer = (state = classroomReducerDefaultState, action) => {
  switch (action.type) {
    case "SHOW_CLASS":
      return [...state, action.classrooms];
    default:
      return state;
  }
};
export default classroomReducer;
