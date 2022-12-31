import {ButtonHTMLAttributes} from 'react'

import * as Styled  from './../styles/components/EditButton';

interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function EditButton({ text, ...props}: EditButtonProps ) {
    return(
        <Styled.Container {...props}>
            {text}
        </Styled.Container>
    )
}