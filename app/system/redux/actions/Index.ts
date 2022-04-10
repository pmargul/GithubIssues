import { Languages } from "../../../models/Constants";

export const setLanguage = (lang: Languages) => async (dispatch: (arg0: { type: string; payload: { language: Languages; }; }) => void) => {
    dispatch({
      type: "SET_APP_LANG",
      payload: {
        language: lang,
      },
    });
};

export const setShowOnlyGithubUsers = (showOnlyGithubUsers: boolean) => async (dispatch: (arg0: { type: string; payload: { showOnlyGithubUsers: boolean; }; }) => void) => {
    dispatch({
      type: "SET_SHOW_ONlY_GITHUB_USERS_STATE",
      payload: {
        showOnlyGithubUsers: showOnlyGithubUsers,
      },
    });
};

export const setShowOnlyGithubRepos = (showOnlyGithubRepos: boolean) => async (dispatch: (arg0: { type: string; payload: { showOnlyGithubRepos: boolean; }; }) => void) => {
    dispatch({
      type: "SET_SHOW_ONlY_GITHUB_REPOS_STATE",
      payload: {
        showOnlyGithubRepos: showOnlyGithubRepos,
      },
    });
};