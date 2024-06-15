import { configureStore } from "@reduxjs/toolkit";
import { reducerEnable } from "./reducer/reducerEnable";
import { reducerVideo } from "./reducer/reducerVideo";
import { reducerMovies } from "./reducer/reducerMovies";
import { reducerApiData } from "./reducer/reducerApiData";
import { reducerTrailer } from "./reducer/reducerTrailer";
export const store = configureStore({
    reducer: {
        enable: reducerEnable,
        video: reducerVideo,
        movies: reducerMovies,
        data: reducerApiData,
        trailer: reducerTrailer
    }
})