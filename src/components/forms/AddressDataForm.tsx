import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { EditButton } from "../EditButton";
import { Input } from "../Input";
import { Label } from "../Label";
import { SelectInput } from "../SelectInput";
import { TitleForm } from "../TitleForm";

import * as api from './../../services/districtsRequest'

import * as StyledForms from './../../styles/components/forms/FormsCommon';


export function AddressDataForm() {
    const {
        getUfsAddress,
        ufs,
        handleUfSelectOnChange,
        municipios,
        handleMunicipioSelectOnChange
    } = useGlobalContext();


    useEffect(() => {
        getUfsAddress()
    }, [])


    return (
        <form>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize seu endereço aqui."
                />
                <EditButton text="Editar" />
            </StyledForms.Header>

            <StyledForms.RowLabelInputGroup>
                <Label title="UF / Municipio de residência" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <SelectInput selectItensValues={ufs} handles={handleUfSelectOnChange} />
                    <SelectInput selectItensValues={municipios} handles={handleMunicipioSelectOnChange} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Logradouro / Número / Bairro" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr 1fr">
                    <Input placeholder={"Rua padre alfredo nesi"} />
                    <Input placeholder={"Numero ou S/N"} />
                    <Input placeholder={"Bairro"} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label
                    title="Complemento"
                />
                <StyledForms.InputsGroup templateColumns="1fr">
                    <Input placeholder="Apt 4" />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}