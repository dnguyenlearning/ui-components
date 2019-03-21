import * as types from "./types";

export const changeTheme = ({type}) => {
    return {
        type: types.CHANGE_THEME,
        payload: {
            type
        }
    }
};