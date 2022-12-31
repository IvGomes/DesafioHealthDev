import { InputHTMLAttributes, ReactNode } from "react";

import * as Styled from './../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    setIcon?: ReactNode;
    iconSize?: number;
}

export function Input({ setIcon, iconSize, ...props }: InputProps) {
    return (
        <Styled.InputContainer>
            {setIcon &&
                <Styled.InputIcon iconSize={iconSize}>
                    {setIcon}
                </Styled.InputIcon>
            }
            <Styled.Input widthIcon={iconSize} {...props} />
        </Styled.InputContainer>
    )
}