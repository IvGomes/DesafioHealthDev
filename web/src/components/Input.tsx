import { InputHTMLAttributes, ReactNode } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import * as Styled from './../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    setIcon?: ReactNode;
    iconSize?: number;
}

export function Input({ setIcon, iconSize, ...props }: InputProps) {
    const {onViewModeInput} = useGlobalContext()


    return (
        <Styled.InputContainer>
            {setIcon &&
                <Styled.InputIcon iconSize={iconSize}>
                    {setIcon}
                </Styled.InputIcon>
            }
            <Styled.Input disabled={onViewModeInput} widthIcon={iconSize} {...props} />
        </Styled.InputContainer>
    )
}