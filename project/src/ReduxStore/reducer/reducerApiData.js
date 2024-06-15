export const reducerApiData = (state = {}, action) => {
    switch (action.type) {
        case "up":
            return state = action.payload;
        default:
            return state;
    }
}