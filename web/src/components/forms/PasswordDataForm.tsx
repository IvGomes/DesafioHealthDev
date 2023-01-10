import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { Icons } from "../Icons";

import * as StyledForms from '../../styles/components/forms/FormsCommon';
import { EditButton } from "../EditButton";
import { useGlobalContext } from "../../context/GlobalContext";


export function PasswordDataForm() {
    const {passwordFormData, setPasswordFormData} = useGlobalContext();
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    
    const handlePersistFormData = (name: any, value: any) => {
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <form>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize sua senha aqui."
                />
                <EditButton endPoint="/users" state={userData} text="Mudar senha" />
            </StyledForms.Header>

            <StyledForms.RowLabelInputGroup>
                <Label title="Usuário / Senha" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input
                        name="username"
                        value={userData.username}
                        onChange={(e) => {handlePersistFormData(e.target.name, e.target.value)}}
                        />
                    <Input
                        name="password"
                        type={"password"}
                        setIcon={<Icons.locker />}
                        iconSize={15}
                        value={userData.password}
                        onChange={(e) => {handlePersistFormData(e.target.name, e.target.value)}}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}