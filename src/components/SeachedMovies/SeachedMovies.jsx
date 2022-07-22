import { Link } from "react-router-dom";

export const SeachedMovies = ({ moviesList }) => {

    return (
        <>
        { moviesList.length > 0 && (
            <ul>   
                {moviesList.map(movie => (
                    <li key={movie.id}>
                        <Link to='movies/movie'>
                            {movie.title ?? movie.original_title}
                        </Link>
                    </li>
                ))}
            </ul>       
        )}
        </>

    )
    
}


