import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    color: black;

    &:not(:last-child) {
        margin-right: 20px;
    }

    &.active {
    color: orange;
    }
`


