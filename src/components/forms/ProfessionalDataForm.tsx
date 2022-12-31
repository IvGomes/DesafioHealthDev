import { Input } from "../Input";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { Icons } from "../Icons";

import * as StyledForms from './../../styles/components/forms/FormsCommon';
import { SelectInput } from "../SelectInput";
import { useGlobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";
import { Switch } from "../Switch";
import { EditButton } from "../EditButton";


export function ProfessionalDataForm() {
    const { getUfsAddress, ufs } = useGlobalContext();

    useEffect(() => {
        getUfsAddress()
    }, [])

    return (
        <form>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize seus dados profissionais aqui."
                />
                <EditButton text="Editar" />
            </StyledForms.Header>

            <StyledForms.RowLabelInputGroup>
                <Label title="Conselho / Estado conselho" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <SelectInput selectItensValues={["CRM"]} />
                    <SelectInput selectItensValues={ufs} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Número do conselho" />
                <StyledForms.InputsGroup templateColumns="1fr">
                    <Input type={"number"} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Especialidade / RQE" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <SelectInput selectItensValues={["Cardiologista"]} />
                    <Input type={"number"} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="ID user / Sincronização MEMED" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input type={"number"} />
                    <Switch />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}