import { useEffect } from "react";
import { Input } from "../Input";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { Icons } from "../Icons";

import * as StyledForms from '../../styles/components/forms/FormsCommon';
import { EditButton } from "../EditButton";
import { useGlobalContext } from "../../context/GlobalContext";


export function PasswordDataForm() {
    const {getValuesOnStorage, passwordFormData, setPasswordFormData} = useGlobalContext();

    const handlePersistFormData = (name: any, value: any) => {
        setPasswordFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        getValuesOnStorage()
    }, [])

    return (
        <form>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize sua senha aqui."
                />
                <EditButton text="Mudar senha" />
            </StyledForms.Header>

            <StyledForms.RowLabelInputGroup>
                <Label title="Usuário / Senha" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input
                        name="password"
                        type={"password"}
                        value={passwordFormData.password}
                        onChange={(e) => {handlePersistFormData(e.target.name, e.target.value)}}
                        />
                    <Input
                        name="repeatPassword"
                        type={"password"}
                        setIcon={<Icons.locker />}
                        iconSize={15}
                        value={passwordFormData.repeatPassword}
                        onChange={(e) => {handlePersistFormData(e.target.name, e.target.value)}}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}