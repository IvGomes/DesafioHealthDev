import { useState } from 'react';
import * as Styled from './../styles/components/Switch';


export function Switch() {
    const [checked, setChecked] = useState(false);


    return (
        <Styled.Container>
            <Styled.SwitchRoot checked={checked} onCheckedChange={setChecked}>
                <Styled.SwitchThumb checked={checked} />
            </Styled.SwitchRoot>
            <Styled.Label>{checked ? "Ativo" : "Inativo"}</Styled.Label>
        </Styled.Container>
    )
}