import data from "../classroom_data.json";
import { createStore } from "redux";
const store = createStore((state = { data: null },action) => {
  return state;
});

console.log(store.getState());
console.log(data);
