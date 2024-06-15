import axios from "axios";
import * as Types from '../types/types';
// import { useDispatch } from "react-redux";
/* My API Key */
const API_KEY = "e0669d426c0a455d1f1a29d3ecbb44ee";

/* Snippet API chung */
const BASE_API = "https://api.themoviedb.org/3";

export const getNetflixOriginal = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/trending/all/day?api_key=${API_KEY}`
        )
        dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results })
    }
    catch (err) {
        console.log('Get API error :', err);
    }
}
export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Trending API error', error);
    }
}
export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Top Rated API error', error);
    }
}
export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Action API error', error);
    }
}
export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Comedy API error', error);
    }
}
export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Horror API error', error);
    }
}
export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Romance API error', error);
    }
}
export const getDocumentaryMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({ type: Types.GET_DOCUMENTARY_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('Get Documentary API error', error);
    }
}
export const getTrailerVideo = (props) => async dispatch => {
    try {
        const result = await axios.get(
            `http://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${API_KEY}`
        );
        dispatch({ type: "getTrailer", payload: result.data.results[0].key })
    } catch (error) {
        console.log('error');
    }
}

export const getSearchMovies = (keyword) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_API}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
        )
        dispatch({ type: Types.GET_SEARCH_MOVIE, payload: result.data.results })
    } catch (error) {
        console.log('error Search');
    }
}