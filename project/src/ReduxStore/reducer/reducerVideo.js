var initState = false;
export const reducerVideo = (state = initState, action) => {
    switch (action.type) {
        case 'open':
            return state = true;
        case 'close':
            return state = false;
        default:
            return state;
    }
}