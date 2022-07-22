import { Searchbar } from "components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { SeachedMovies } from "components/SeachedMovies/SeachedMovies";
import { apiMovieSearch } from "services/apiGetMovies/apiGetMovies";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    const [searchParam, setSearchParam] = useState('');

    const handleGetData = (searchValue) => {
        setSearchParam(searchValue);
    }

    useEffect(() => {
        searchParam !== "" &&
        apiMovieSearch(searchParam, 1).then(res => setMovies(res.results));
    }, [searchParam]);

    return (
        <>
            <Searchbar onSubmit={handleGetData} />
            <SeachedMovies moviesList={movies} />
        </>
    );
};