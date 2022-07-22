import axios from "axios";

// import useState from './re'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '1691901ed2ae3d246dfa1eabb74d344d';

export const apiMovieSearch = async (searchQuery, page) => {
    const response = await axios(`search/movie/`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            query: searchQuery,
            page, 

        }
    });
    // console.log(response.data);
    return response.data;
}


export const apiTrandingMoves = async () => {
    const response = await axios(`trending/all/day`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    });
    return response.data;
}
