export const reducerTrailer = (state = "", action) => {
    switch (action.type) {
        case "getTrailer":
            return state = action.payload;
        default:
            return state;
    }
}