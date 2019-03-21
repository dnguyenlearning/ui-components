import * as types from "./types";
import {themes} from "../../../themes";

const initState = {
    themes,
    selectedTheme: themes["purple"]
}

export default function (
    state = initState, action) {
    switch (action.type) {
        case types.CHANGE_THEME: {
            const {type} = action.payload;
            const {themes} = state;
            return {...state, selectedTheme: themes[type]}
        }

        default:
            return state;
    }
}