import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '1691901ed2ae3d246dfa1eabb74d344d';

export const apiMovieSearch = async (searchQuery, page) => {
    const response = await axios(`search/movie`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            query: searchQuery,
            page, 
        }
    });
    return response.data;
}


export const apiTrandingMovies = async () => {
    const response = await axios(`trending/all/day`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    });
    return response.data;
}

export const apiGetMovieById = async (id) => {
    const response = await axios(`movie/${id}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    });
    return response.data;
}

export const apiGetMovieCast = async (id) => {
    const response = await axios(`movie/${id}/credits`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    });
    return response.data.cast;
}

export const apiGetActorPic = async (id) => {
    const response = await axios(`person/${id}/images`, {
        params: {
            api_key: API_KEY,
        }
    });
    return response.data.profiles[0];
}

export const apiGetReviewsById = async (id) => {
    const response = await axios(`movie/${id}/reviews`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    });
    return response.data.results;
}