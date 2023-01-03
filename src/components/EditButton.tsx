import {ButtonHTMLAttributes} from 'react'
import { useGlobalContext } from '../context/GlobalContext';

import * as Styled  from './../styles/components/EditButton';

interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export function EditButton({ text, onClick, ...props}: EditButtonProps ) {
    const {handleEditInfosOnForm, onViewModeInput} = useGlobalContext();


    return(
        <Styled.Container {...props} onClick={handleEditInfosOnForm}>
            {onViewModeInput ? text : "Salvar alterações"}
        </Styled.Container>
    )
}