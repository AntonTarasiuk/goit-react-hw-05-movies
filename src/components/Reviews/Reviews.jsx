import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ReviewList } from "./Reviews.styled";
import { Review } from "components/Review/Review";

import { apiGetReviewsById } from "services/apiGetMovies/apiGetMovies"

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        apiGetReviewsById(movieId).then(reviews => setReviews(reviews))
    }, [movieId])

    return (
        reviews.length > 0 ?
            <ReviewList>
                {reviews.map(review => 
                    <Review key={review.id} review={review} />
                )}
            </ReviewList>
            : <h3>Reviews not found</h3>
        
    )
}

export default Reviews;