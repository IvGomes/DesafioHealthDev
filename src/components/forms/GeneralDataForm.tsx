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

export function GeneralDataForm() {
    const { handleDrag, handleDrop, dragActive, previewUrlAvatar } = useDragAndDropContext();

    return (
        <form onDragEnter={handleDrag}>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize sua foto e dados pessoais aqui."
                />
                <EditButton text="Editar"/>
            </StyledForms.Header>
            <StyledForms.RowLabelInputGroup>
                <Label title="Nome / Sobrenome" />
                <StyledForms.InputsGroup templateColumns="1fr">
                    <Input placeholder={"digite o seu nome completo, aqui."} />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Nascimento / Sexo" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <Input type={"date"} placeholder={"Data de nascimento"} />
                    <SelectInput selectItensValues={["Masculino", "Feminino"]} />
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
                        setIcon={<Icons.email />}
                        iconSize={15}
                        placeholder="email@example.com.br"
                    />
                    <Input
                        setIcon={<Icons.phone />}
                        iconSize={15}
                        placeholder="(00) 00000-0000"
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label
                    title="RG / CPF / CNS"
                />
                <StyledForms.InputsGroup templateColumns="1fr 1fr 1fr">
                    <Input placeholder="00000000000" />
                    <Input placeholder="00000000000" />
                    <Input placeholder="00000000000" />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>





        </form>
    )
}