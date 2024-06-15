

export const reducerEnable = (state = false, action) => {
    switch (action.type) {
        case 'show':
            return state = true;
        case 'hide':
            return state = false;
        default:
            return state;
    }
}