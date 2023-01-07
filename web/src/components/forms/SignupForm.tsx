import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {toast} from 'react-toastify'

import { Input } from "../Input";
import { Label } from "../Label";

import * as Styled from '../../styles/components/forms/SignForms';

import * as validationForm from './../../schemas/validations/RegisterUserSchema';
import * as serverApi from './../../services/ServerApi';


export function SignupForm() {
    const [submitData, setSubmitData] = useState({
        username: "",
        password: ""
    })
    const [confirmPass, setConfirmPass] = useState({
        password: "",
        repeatPassword: ""
    })

    function handleSetValue(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;

        setSubmitData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleCheckPass(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;

        setConfirmPass(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        
        const isValid = validationForm.passwordSchema.parse(confirmPass)

        if(isValid.password) {
            const retorno = await serverApi.registerUser(submitData.username, submitData.password);

            retorno.username === submitData.username 
                ? (
                    toast.success("Conta criada com sucesso!"), 
                    setSubmitData({ username:"", password: ""}),
                    setConfirmPass({password: "", repeatPassword: ""})
                )
                : toast.error(retorno) 
            console.log('api', retorno)
        } else {
            toast.error('As senhas não são iguais...')
            console.log('validation', isValid)
        }

    }

    useEffect(() => {
        console.log(confirmPass)
    }, [confirmPass])


    return (
        <Styled.Form onSubmit={handleSubmitForm}>
            <Styled.InputsGroup>
                <Label title="Nome de usuário" />
                <Input
                    disabled={false}
                    name="username"
                    value={submitData.username}
                    onChange={(e) => handleSetValue(e)}
                />
            </Styled.InputsGroup>

            <Styled.InputsGroup>
                <Label title="Senha" />
                <Input
                    disabled={false}
                    name="password"
                    type={"password"}
                    value={submitData.password}
                    onChange={(e) => {
                        handleSetValue(e)
                        handleCheckPass(e)
                        // handleValidatePass(validationForm.passwordSchema, confirmPass)
                    }}
                />
                <Label title="Repetir senha" />
                <Input
                    disabled={false}
                    name="repeatPassword"
                    type={"password"}
                    value={confirmPass.repeatPassword}
                    onChange={(e) => {
                        handleCheckPass(e)
                        // handleValidatePass(validationForm.passwordSchema, confirmPass)
                    }}
                />
            </Styled.InputsGroup>

            <Styled.Button>
                Cadastrar
            </Styled.Button>
        </Styled.Form>
    )
}