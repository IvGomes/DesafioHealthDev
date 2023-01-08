import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { EditButton } from "../EditButton";
import { Input } from "../Input";
import { Label } from "../Label";
import { SelectInput } from "../SelectInput";
import { TitleForm } from "../TitleForm";

import * as StyledForms from './../../styles/components/forms/FormsCommon';


export function AddressDataForm() {
    const { setAddressFormData, addressFormData, getValuesOnStorage } = useGlobalContext();

    const [pageLoaded, setPageLoaded] = useState(false);

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


    const handlePersistFormData = (name: any, value: any) => {
        setAddressFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        setPageLoaded(true);
    }, [])
    
    useEffect(() => {
        getValuesOnStorage()
    }, [pageLoaded])

    return (
        <form>
            <StyledForms.Header>
                <TitleForm
                    principal="Informações Pessoais"
                    subtitle="Atualize seu endereço aqui."
                />
                <EditButton endPoint="/addressdata" state={addressFormData} text="Editar" />
            </StyledForms.Header>

            <StyledForms.RowLabelInputGroup>
                <Label title="UF / Municipio de residência" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr">
                    <SelectInput
                        inputName="uf"
                        selectItensValues={ufs}
                        handles={handleUfSelectOnChange}
                        initValue={addressFormData.uf}
                        getValue={handlePersistFormData}
                    />
                    <SelectInput
                        inputName="municipio"
                        selectItensValues={municipios}
                        handles={handleMunicipioSelectOnChange}
                        initValue={addressFormData.municipio}
                        getValue={handlePersistFormData}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label title="Logradouro / Número / Bairro" />
                <StyledForms.InputsGroup templateColumns="1fr 1fr 1fr">
                    <Input
                        name="logradouro"
                        placeholder={"Rua padre alfredo nesi"}
                        value={addressFormData.logradouro}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <Input
                        name="numero"
                        placeholder={"Numero ou S/N"}
                        value={addressFormData.numero}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                    <Input
                        name="bairro"
                        placeholder={"Bairro"}
                        value={addressFormData.bairro}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>

            <StyledForms.RowLabelInputGroup>
                <Label
                    title="Complemento"
                />
                <StyledForms.InputsGroup templateColumns="1fr">
                    <Input
                        name="complemento"
                        placeholder="Apt 4"
                        value={addressFormData.complemento}
                        onChange={(e) => handlePersistFormData(e.target.name, e.target.value)}
                    />
                </StyledForms.InputsGroup>
            </StyledForms.RowLabelInputGroup>
        </form>
    )
}