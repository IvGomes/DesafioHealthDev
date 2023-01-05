import { Input } from "../Input";
import { Label } from "../Label";

import * as Styled from './../../styles/components/forms/SigninForm';

export function SigninForm() {
    return (
        <Styled.Form>
            <Styled.InputsGroup>
                <Label title="Usuário"/>
                <Input disabled={false} />
            </Styled.InputsGroup>

            <Styled.InputsGroup>
                <Label title="Senha"/>
                <Input disabled={false} type={"password"} />
            </Styled.InputsGroup>

            <Styled.Button>
                Entrar
            </Styled.Button>
        </Styled.Form>
    )
}