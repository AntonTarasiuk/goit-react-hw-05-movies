import { GoBackButton } from "./GoBackButton.styled";

export const GoBackBtn = ({onClick}) => {
    return (
        <GoBackButton type="button" onClick={onClick}>
            Go back
        </GoBackButton>
    )
}