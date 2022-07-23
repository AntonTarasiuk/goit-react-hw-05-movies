import styled from "@emotion/styled";

export const ReviewItem = styled.li`
    display: block;
    font-size: 15px;
    width: 99%;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;

    :not(:last-child) {
        margin-bottom: 5px;
        margin-right: 5px;
    }
`