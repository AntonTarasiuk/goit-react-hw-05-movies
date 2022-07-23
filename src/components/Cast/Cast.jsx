import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ActorInfo } from "components/Actor/Actor";
import { CastList } from "./Cast.styled";

import { apiGetMovieCast } from "services/apiGetMovies/apiGetMovies"

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        apiGetMovieCast(movieId).then(castMovieById => setCast(castMovieById))
    }, [movieId])

    return <CastList>
        {cast.map(actor => 
            <ActorInfo key={actor.id} actor={actor} />
        )}
    </CastList>
}

export default Cast;