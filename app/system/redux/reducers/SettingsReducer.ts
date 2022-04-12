import { Languages, SearchSettings } from "../../../models/Constants";

const initialState: {language: Languages, searchSettings: SearchSettings } = {
    language: Languages.polish,
    searchSettings: SearchSettings.all,
};

const SettingsReducer = (state = initialState, action: { type: any; payload: { language: Languages; searchSettings: SearchSettings} }) => {
    switch (action.type) {
        case "SET_APP_LANG":
            return {
                ...state,
                language: action.payload.language,
            };
        case "SET_SEARCH_SETTINGS":
            return {
                ...state,
                searchSettings: action.payload.searchSettings,
            };
        default:
            return state;
    }
};

export default SettingsReducer;
