import { Input } from "../Input";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { Icons } from "../Icons";

import * as StyledForms from '../../styles/components/forms/FormsCommon';
import { EditButton } from "../EditButton";


export function PasswordDataForm() {

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
                    <Input />
                    <Input type={"password"} setIcon={<Icons.locker />} iconSize={15} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}