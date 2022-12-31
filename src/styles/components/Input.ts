import {ReactNode} from 'react'
import styled from "styled-components";

export const InputContainer = styled.span`
    position: relative;
    display: flex;
    max-width: 840px;
    align-items: center;
`

interface InputIconStyledProps {
    children: ReactNode;
    iconSize?: number;
}

export const InputIcon = styled.span<InputIconStyledProps>`
    position: absolute;
    width: ${props => props.iconSize}px;
    height: auto;
    margin: auto;
    line-height: 0;
    margin-left: 16px;
    
    svg {
        width: 100%;
        height: auto;
    }
`

interface InputStyledProps {
    widthIcon?: number;
}

export const Input = styled.input<InputStyledProps>`
    display: flex;
    width: 100%;
    color: ${props => props.theme.colors.textDescription};
    padding: ${props => props.widthIcon 
    ? `14px calc((2*16px) + ${props.widthIcon}px)`
    : `14px 16px`};
    border: 1px solid ${props => props.theme.colors.borderInputs};
    border-radius: 4px;
    font-size: 13px;
    
    :focus, :focus-visible {
        color: ${props => props.theme.colors.textTitles};
        border: 1px solid ${props => props.theme.colors.focusInput};
        outline-color: ${props => props.theme.colors.focusInput};
    }
`