import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    ${props => props.variant === "default" && `
        width: 100%;
        border-color: white;
        border-width: 1px;
        color: #fff;
        height: 50px;
        padding-left: 10px;
        border-radius: 3px;
    `}
    ${props => props.style && props?.style}
`