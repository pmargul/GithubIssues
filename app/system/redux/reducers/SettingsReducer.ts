import { Languages } from "../../../models/Constants";

const initialState: {language: Languages, showOnlyGithubUsers : boolean, showOnlyGithubRepos: boolean } = {
    language: Languages.polish,
    showOnlyGithubUsers: false,
    showOnlyGithubRepos: false,
};

const SettingsReducer = (state = initialState, action: { type: any; payload: { language: Languages; showOnlyGithubUsers: boolean, showOnlyGithubRepos: boolean; } }) => {
    switch (action.type) {
        case "SET_APP_LANG":
            return {
                ...state,
                language: action.payload.language,
            };
        case "SET_SHOW_ONlY_GITHUB_USERS_STATE":
            return {
                ...state,
                showOnlyGithubUsers: action.payload.showOnlyGithubUsers,
            };
        case "SET_SHOW_ONlY_GITHUB_REPOS_STATE":
            return {
                ...state,
                showOnlyGithubRepos: action.payload.showOnlyGithubRepos,
            };
        default:
            return state;
    }
};

export default SettingsReducer;
