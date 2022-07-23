import { useState, useEffect } from "react";
import { apiGetActorPic } from "services/apiGetMovies/apiGetMovies";
import { ActorItem } from "./Actor.styled";
import noPoster from "../../poster-holder.jpg";

export const ActorInfo = ({ actor }) => {
    const [actorPic, setActorPic] = useState('');
    
    useEffect(() => {
        apiGetActorPic(actor.id).then(picture => picture ? setActorPic(picture.file_path) : setActorPic(''))
    }, [actor.id])
    
    const url = actorPic !=='' ? `https://image.tmdb.org/t/p/w200${actorPic}` : noPoster;
    
    return (
        <ActorItem>
            <img src={url} alt="" width={200}/>
            <p>{actor.name}</p>
            <p>{actor.character}</p>
        </ActorItem>
    )
}