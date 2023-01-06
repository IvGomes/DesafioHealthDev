import React, { useEffect } from 'react';
import { useDragAndDropContext } from "../../context/DragAndDropContext";
import { DragAndDropInput } from "../DragAndDropInput";
import { Input } from "../Input";
import { Label } from "../Label";
import { SelectInput } from "../SelectInput";
import { TitleForm } from "../TitleForm";
import { Icons } from "../Icons";

import * as StyledForms from './../../styles/components/forms/FormsCommon';
import * as Styled from './../../styles/components/forms/GeneralDataForm';
import { EditButton } from "../EditButton";
import { useGlobalContext } from '../../context/GlobalContext';

export function GeneralDataForm() {
    const { handleDrag, handleDrop, dragActive, previewUrlAvatar } = useDragAndDropContext();
    const { generalFormData, setGeneralFormData, getValuesOnStorage } = useGlobalContext();

    const handlePersistFormData = ( name: any, value: any) => {
        setGeneralFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        getValuesOnStorage()
    }, [])


    return (
        <form onDragEnter={handleDrag}>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize sua foto e dados pessoais aqui."
                />
                <EditButton text="Editar" />
            </StyledForms.Header>
            <StyledForms.RowLabelInputGroup>
                <Label title="Nome / Sobrenome" />
                <StyledForms.InputsGroup templateColumns="1fr">
                    <Input
                        name="fullName"
                        placeholder={"digite o seu nome completo, aqui."}
                        value={generalFormData.fullName}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Nascimento / Sexo" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input
                        name="birth"
                        type={"date"}
                        placeholder={"Data de nascimento"}
                        value={generalFormData.birth}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <SelectInput
                        inputName="gender"
                        getValue={handlePersistFormData}
                        initValue={generalFormData.gender}
                        selectItensValues={["Masculino", "Feminino"]}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label
                    title="Sua foto"
                    subtitle="isso será exibido no seu perfil"
                />
                <StyledForms.InputsGroup templateColumns="1fr 11fr">
                    <Styled.AvatarPreview>
                        <img src={previewUrlAvatar} alt="" />
                    </Styled.AvatarPreview>
                    <DragAndDropInput
                        isDragActive={dragActive}
                        handles={
                            {
                                enter: handleDrag,
                                over: handleDrag,
                                drop: handleDrop,
                                leave: handleDrag
                            }
                        }
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label
                    title="E-mail / Telefone"
                />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input
                        name="email"
                        setIcon={<Icons.email />}
                        iconSize={15}
                        placeholder="email@example.com.br"
                        value={generalFormData.email}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <Input
                        name="phone"
                        setIcon={<Icons.phone />}
                        iconSize={15}
                        placeholder="(00) 00000-0000"
                        value={generalFormData.phone}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label
                    title="RG / CPF / CNS"
                />
                <StyledForms.InputsGroup templateColumns="1fr 1fr 1fr">
                    <Input
                        name="rg"
                        placeholder="00000000000"
                        value={generalFormData.rg}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <Input
                        name="cpf"
                        placeholder="00000000000"
                        value={generalFormData.cpf}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <Input
                        name="cns"
                        placeholder="00000000000"
                        value={generalFormData.cns}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}