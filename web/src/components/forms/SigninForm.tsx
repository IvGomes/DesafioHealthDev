import { ChangeEvent, useState } from "react";

import { Input } from "../Input";
import { Label } from "../Label";

import * as Styled from '../../styles/components/forms/SignForms';
import { useAuthContext } from "../../context/AuthContext";

export function SigninForm() {
    const {handleLoginSubmit} = useAuthContext();

    const [submitData, setSubmitData] = useState({
        username: "",
        password: ""
    })

    function handleSetValue(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        
        setSubmitData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <Styled.Form onSubmit={(e) => handleLoginSubmit(e, submitData.username, submitData.password)}>
            <Styled.InputsGroup>
                <Label title="Usuário" />
                <Input
                    name="username"
                    disabled={false}
                    value={submitData.username}
                    onChange={(e) => handleSetValue(e)}
                />
            </Styled.InputsGroup>

            <Styled.InputsGroup>
                <Label title="Senha" />
                <Input
                    name="password"
                    disabled={false}
                    type={"password"}
                    value={submitData.password}
                    onChange={(e) => handleSetValue(e)}
                />
            </Styled.InputsGroup>

            <Styled.Button>
                Entrar
            </Styled.Button>
        </Styled.Form>
    )
}