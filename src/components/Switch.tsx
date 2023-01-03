import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import * as Styled from './../styles/components/Switch';

interface SwitchProps {
    inputName: string;
    initValue: boolean;
}

export function Switch({inputName, initValue}: SwitchProps) {
    const [checked, setChecked] = useState(false);

    const { professionalFormData, setProfessionalFormData, onViewModeInput } = useGlobalContext();

    useEffect(() => {
        setProfessionalFormData(
            prevState => ({
                ...prevState,
                memed: checked
            }))
    }, [checked])

    useEffect(() => {
        setChecked(initValue)
    }, [professionalFormData])


    return (
        <Styled.Container>
            <Styled.SwitchRoot disabled={onViewModeInput} name={inputName} checked={checked} onCheckedChange={setChecked}>
                <Styled.SwitchThumb checked={checked} />
            </Styled.SwitchRoot>
            <Styled.Label>{checked ? "Ativo" : "Inativo"}</Styled.Label>
        </Styled.Container>
    )
}