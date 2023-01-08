import { ButtonHTMLAttributes } from 'react'

import { useGlobalContext } from '../context/GlobalContext';

import * as Styled from './../styles/components/EditButton';

import * as serverApi from './../services/ServerApi';


interface EditButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    endPoint: "/generaldata" | "/addressdata" | "/passworddata" | "/professionaldata";
    state: any;
}

export function EditButton({ text, onClick, endPoint, state, ...props }: EditButtonProps) {
    const { handleEditInfosOnForm, onViewModeInput } = useGlobalContext();


    return (
        <Styled.Container {...props} onClick={async (e) => {
            handleEditInfosOnForm(e);
            if (!onViewModeInput) {
                const dataLogin = sessionStorage.getItem('datalogin');
                if (dataLogin) {
                    const parsedDataLogin = await JSON.parse(dataLogin);
                    await serverApi.updateUserData(parsedDataLogin.token, endPoint, state)
                }
            }
        }}>
            {onViewModeInput ? text : "Salvar alterações"}
        </Styled.Container>
    )
}