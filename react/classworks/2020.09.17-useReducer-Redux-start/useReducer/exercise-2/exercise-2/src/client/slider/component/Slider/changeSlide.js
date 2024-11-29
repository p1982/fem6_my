import {MOVE_LEFT, MOVE_RIGHT} from "./actionNames";

export const changeSlide = (state, action) => {
    const idx = state.findIndex(el => el.active)
    const newState = [...state]
    newState[activeIdx].active = false;
    const end = idx === (newState.length-1) || idx === 0;
    switch (action.type) {
        case MOVE_LEFT:
            const newIdx = end ? 0 : idx + 1;
            newState[newIdx].active = true;
            return newState;
        case MOVE_RIGHT:
            const newIdx = end ? newState.length : idx -1
            newState[newIdx].active = true;
            return newState;
        default:
            return new Error('хватит клацать')
    }
}