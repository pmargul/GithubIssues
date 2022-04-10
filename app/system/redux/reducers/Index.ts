import { combineReducers } from "redux";
import SettingsReducer from "./SettingsReducer";

export const rootReduccer = combineReducers({
  settings: SettingsReducer,
});

export type RootState = ReturnType<typeof rootReduccer>;
