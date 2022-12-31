import { useEffect, useState } from 'react';

import * as Styled from './../styles/components/SelectInput';

import { Icons } from "./../components/Icons";

interface SelectInputProps {
    selectItensValues: string[];
    handles?: any;
}

export function SelectInput({ selectItensValues, handles }: SelectInputProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Selecionar");

    if (handles) {
        useEffect(() => {
            handles(value)
        }, [value])
    }

    return (
        <Styled.SelectRoot
            open={open}
            onOpenChange={setOpen}
            value={value}
            onValueChange={setValue}
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