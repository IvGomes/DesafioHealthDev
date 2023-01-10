import { useEffect, useState } from 'react';

import * as Styled from './../styles/components/SelectInput';

import { Icons } from "./../components/Icons";
import { useGlobalContext } from '../context/GlobalContext';

interface SelectInputProps {
    inputName: string;
    selectItensValues: string[];
    handles?: any;
    getValue: (name: any, value: any) => void;
    initValue?: string;
}

export function SelectInput({ inputName, selectItensValues, handles, getValue, initValue }: SelectInputProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(initValue);

    const { onViewModeInput, generalFormData, addressFormData, professionalFormData } = useGlobalContext();

    if (handles) {
        useEffect(() => {
            handles(value)
        }, [value])
    }

    useEffect(() => {
        getValue(inputName, value);
    }, [value])

    useEffect(() => {
        setValue(initValue)
    }, [generalFormData, addressFormData, professionalFormData])

    return (
        <Styled.SelectRoot
            name={inputName}
            open={open}
            onOpenChange={setOpen}
            value={value}
            onValueChange={setValue}
            disabled={onViewModeInput}
        >
            <Styled.SelectTrigger isOpen={open}>
                <Styled.SelectValue>
                    {value}
                </Styled.SelectValue>
                <Styled.SelectIcon isOpen={open}>
                    <Icons.ChevronDown />
                </Styled.SelectIcon>
            </Styled.SelectTrigger>
            <Styled.SelectPortal>
                <Styled.SelectContent>
                    <Styled.SelectViewport>
                        {selectItensValues.map((s: any) => {
                            return (
                                <Styled.SelectItem value={s}>
                                    <Styled.SelectItemText>{s}</Styled.SelectItemText>
                                </Styled.SelectItem>
                            )
                        })}
                    </Styled.SelectViewport>
                </Styled.SelectContent>
            </Styled.SelectPortal>
        </Styled.SelectRoot>
    )
}