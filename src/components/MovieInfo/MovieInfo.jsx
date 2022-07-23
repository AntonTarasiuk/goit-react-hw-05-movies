import { 
    MainMovieInfo, 
    MovieDescription, 
    MovieTitle, 
    UserRate, 
    Overview,
    GenreList 
} from "./MovieInfo.styled"

export const MainInfo = ({movie}) => {
    const {poster_path, original_title, release_date, vote_average, overview, genres} = movie;

    const url = movie && `https://image.tmdb.org/t/p/w300${poster_path}`;

    return (
        <MainMovieInfo>
            <img src={url} alt="" />
            <MovieDescription>
                <MovieTitle>{original_title} ({release_date.slice(0, 4)})</MovieTitle>
                <UserRate>User score: {vote_average * 10}%</UserRate>
                <h3>Overview</h3>
                <Overview>{overview}</Overview>
                <h4>Genres</h4>
                <GenreList>{genres.map(genre => genre.name).join(', ')}</GenreList>
            </MovieDescription>
        </MainMovieInfo>
    )
}