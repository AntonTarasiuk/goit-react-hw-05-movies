import { useParams, Link, Outlet } from "react-router-dom"
import { MainContentWrapper } from "pages/Home/Home.styled"
import { MovieDetailsWrapper } from "./MovieDetails.styled"
import { apiGetMovieById } from "services/apiGetMovies/apiGetMovies"
import { useState, useEffect } from "react";
import { MainInfo } from "components/MovieInfo/MovieInfo";
import { GoBackBtn } from "components/GoBackButton/GoBackButton";
import { AditionalInfo } from "components/AditionalInfo/AditionalInfo";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        apiGetMovieById(movieId).then(movieById => setMovie(movieById))
    }, [movieId])

    return (
        <MainContentWrapper>
            <MovieDetailsWrapper>
                <Link to={'/'} style={{textDecoration: 'none'}} >
                    <GoBackBtn/>
                </Link>
                {movie ? <MainInfo movie={movie} /> : <h2>Movie not found</h2>}
                {movie && <AditionalInfo />}
                <Outlet />
            </MovieDetailsWrapper>

        </MainContentWrapper>
    )
}

export default MovieDetails;