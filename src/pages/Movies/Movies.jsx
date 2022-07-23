import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Searchbar } from "components/SearchBar/SearchBar";
import { SeachedMovies } from "components/SearchedMovies/SearchedMovies";
import { apiMovieSearch } from "services/apiGetMovies/apiGetMovies";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || '';    

    const handleGetData = (searchValue) => {
        setSearchParams({query: searchValue})
    }

    useEffect(() => {
        query !== "" &&
        apiMovieSearch(query, 1).then(res => setMovies(res.results));
    }, [query]);

    return (
        <>
            <Searchbar onSubmit={handleGetData} />
            <SeachedMovies moviesList={movies} />
        </>
    );
};

export default Movies;