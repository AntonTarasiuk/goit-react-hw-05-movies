import { ReviewItem } from "./Review.styled"

export const Review = ({ review }) => {
    return (
        <ReviewItem>
            <h5>{review.author}</h5>
            <p>{review.content}</p>
        </ReviewItem>
    )
}