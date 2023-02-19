import { combineReducers } from "redux";
import scoreReducer from "./ScoreReducer";
import selectReducer from "./SelectReducer";

const allReducer = combineReducers({
  select: selectReducer,
  score: scoreReducer,
});

export default allReducer;
