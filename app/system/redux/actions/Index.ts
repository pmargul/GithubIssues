import { Languages, SearchSettings } from "../../../models/Constants";

export const setAppLanguage = (lang: Languages) => async (dispatch: (arg0: { type: string; payload: { language: Languages; }; }) => void) => {
    dispatch({
      type: "SET_APP_LANG",
      payload: {
        language: lang,
      },
    });
};

export const setGithubDataSearchSettings = (searchSettings: SearchSettings) => async (dispatch: (arg0: { type: string; payload: { searchSettings: SearchSettings; }; }) => void) => {
    dispatch({
      type: "SET_SEARCH_SETTINGS",
      payload: {
        searchSettings: searchSettings,
      },
    });
};
