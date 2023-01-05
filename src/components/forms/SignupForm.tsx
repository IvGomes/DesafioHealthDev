import { Input } from "../Input";
import { Label } from "../Label";

import * as Styled from '../../styles/components/forms/SignForms';

export function SignupForm() {
    return (
        <Styled.Form>
            <Styled.InputsGroup>
                <Label title="Nome de usuário" />
                <Input
                    disabled={false}
                    name="user"
                />
            </Styled.InputsGroup>

            <Styled.InputsGroup>
                <Label title="Senha" />
                <Input
                    disabled={false}
                    name="password"
                    type={"password"}
                />
                <Label title="Repetir senha" />
                <Input
                    disabled={false}
                    name="repeatPassword"
                    type={"password"}
                />
            </Styled.InputsGroup>

            <Styled.Button>
                Cadastrar
            </Styled.Button>
        </Styled.Form>
    )
}