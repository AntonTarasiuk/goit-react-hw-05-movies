import { Link } from "react-router-dom";
import { AditionalInfoWraper } from "./AditionalInfo.styled";

export const AditionalInfo = () => {
    return (
        <AditionalInfoWraper>
            <h4>Iditional information</h4>
            <ul>
                <li>
                    <Link to='cast' >Cast</Link>
                </li>
                <li>
                    <Link to="reviews" >Reviews</Link>
                </li>
            </ul>
        </AditionalInfoWraper>
    )
}