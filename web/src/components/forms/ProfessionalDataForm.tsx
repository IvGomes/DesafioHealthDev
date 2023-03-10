import { useEffect, useState } from "react";

import { Input } from "../Input";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";

import * as StyledForms from './../../styles/components/forms/FormsCommon';
import { SelectInput } from "../SelectInput";
import { useGlobalContext } from "../../context/GlobalContext";
import { Switch } from "../Switch";
import { EditButton } from "../EditButton";

import * as serverApi from './../../services/ServerApi';


export function ProfessionalDataForm() {
    const { getUfsAddress, ufs, professionalFormData, setProfessionalFormData } = useGlobalContext();


    useEffect(() => {
        getUfsAddress()
    }, [])

    const handlePersistFormData = (name: any, value: any) => {
        setProfessionalFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        const gettedData = sessionStorage.getItem('datalogin');

        if (gettedData) {
            const parseGettedData = JSON.parse(gettedData);
            const formData = serverApi.readUserProfessionalData(parseGettedData.token);

            formData
                .then(response => {
                    const userData = JSON.stringify(response);
                    sessionStorage.setItem('professionalFormData', userData);

                    return response
                }).then(data => {
                    setProfessionalFormData(data);
                })
        }
    }, [])

    return (
        <form>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize seus dados profissionais aqui."
                />
                <EditButton endPoint="/professionaldata" state={professionalFormData} text="Editar" />
            </StyledForms.Header>

            <StyledForms.RowLabelInputGroup>
                <Label title="Conselho / Estado conselho" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <SelectInput
                        inputName="crm"
                        selectItensValues={["CRM"]}
                        initValue={professionalFormData.crm}
                        getValue={handlePersistFormData}
                    />
                    <SelectInput
                        inputName="ufConselho"
                        selectItensValues={ufs}
                        initValue={professionalFormData.ufConselho}
                        getValue={handlePersistFormData}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Número do conselho" />
                <StyledForms.InputsGroup templateColumns="1fr">
                    <Input
                        name="numeroConselho"
                        type={"number"}
                        value={professionalFormData.numeroConselho}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Especialidade / RQE" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <SelectInput
                        inputName="especialidade"
                        selectItensValues={["Cardiologista"]}
                        initValue={professionalFormData.especialidade}
                        getValue={handlePersistFormData}
                    />
                    <Input
                        name="rqe"
                        type={"number"}
                        value={professionalFormData.rqe}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="ID user / Sincronização MEMED" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input
                        name="idUser"
                        type={"number"}
                        value={professionalFormData.idUser}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <Switch
                        inputName="memed"
                        initValue={professionalFormData.memed}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}