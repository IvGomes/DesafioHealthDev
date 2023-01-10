import { useState, useContext, createContext, ReactNode, SetStateAction, FormEvent } from "react";
import * as api from "./../services/districtsRequest";


interface GlobalContextProps {
    children: ReactNode;
}

interface GeneralFormDataProps {
    birth: string;
    cns: string;
    cpf: string;
    email: string;
    fullName: string;
    gender: string;
    phone: string;
    rg: string;
}

interface AddressFormDataProps {
    bairro: string;
    complemento: string;
    logradouro: string;
    municipio: string;
    numero: string;
    uf: string;
}

interface PasswordFormDataProps {
    password: string;
    repeatPassword: string;
}

interface ProfessionalFormDataProps {
    crm: string;
    especialidade: string;
    idUser: string;
    numeroConselho: string;
    rqe: string;
    ufConselho: string;
    memed: boolean
}

interface GlobalReturnProps {
    valueSelect: string;
    setValueSelect: React.Dispatch<SetStateAction<string>>;
    municipios: string[];
    setMunicipios: React.Dispatch<SetStateAction<never[]>>;
    ufs: string[];
    ufSelected: string;
    municipioSelected: string;
    asideCollapse: boolean;
    setAsideCollapse: React.Dispatch<SetStateAction<boolean>>;
    onViewModeInput: boolean;
    setOnViewModeInput: React.Dispatch<SetStateAction<boolean>>;
    generalFormData: GeneralFormDataProps;
    setGeneralFormData: React.Dispatch<SetStateAction<GeneralFormDataProps>>;
    addressFormData: AddressFormDataProps;
    setAddressFormData: React.Dispatch<SetStateAction<AddressFormDataProps>>;
    passwordFormData: PasswordFormDataProps;
    setPasswordFormData: React.Dispatch<SetStateAction<PasswordFormDataProps>>;
    professionalFormData: ProfessionalFormDataProps;
    setProfessionalFormData: React.Dispatch<SetStateAction<ProfessionalFormDataProps>>;
    handleUfSelectOnChange: (val: string) => void;
    getUfsAddress: () => void;
    handleMunicipioSelectOnChange: (val: string) => void;
    handleEditInfosOnForm: (e: FormEvent) => void;
    // getValuesOnStorage: () => void;
}


export const GlobalContext = createContext<GlobalReturnProps>({} as any);
export const GlobalProvider = ({ children }: GlobalContextProps) => {
    const [valueSelect, setValueSelect] = useState("");
    const [ufs, setUfs] = useState([]);
    const [ufSelected, setUfSelected] = useState("");
    const [municipios, setMunicipios] = useState([]);
    const [municipioSelected, setMunicipioSelected] = useState("");
    const [asideCollapse, setAsideCollapse] = useState(true);
    const [onViewModeInput, setOnViewModeInput] = useState(true);
    const [generalFormData, setGeneralFormData] = useState({
        birth: "",
        cns: "",
        cpf: "",
        email: "",
        fullName: "",
        gender: "",
        phone: "",
        rg: ""
    })
    const [addressFormData, setAddressFormData] = useState({
        bairro: "",
        complemento: "",
        logradouro: "",
        municipio: "",
        numero: "",
        uf: ""
    })
    const [passwordFormData, setPasswordFormData] = useState({
        password: "",
        repeatPassword: ""
    })
    const [professionalFormData, setProfessionalFormData] = useState({
        crm: "",
        especialidade: "",
        idUser: "",
        numeroConselho: "",
        rqe: "",
        ufConselho: "",
        memed: false
    })


    function getUfsAddress() {
        const ufs = api.getUfs();

        ufs.then((response) => {
            setUfs(response)
        })
    }

    function handleUfSelectOnChange(val: string) {
        setUfSelected(val);

        const dataMunicipios = api.getDistricts(val);

        dataMunicipios
            .then(response => setMunicipios(response))
            .catch(error => console.error(error))
    }

    function handleMunicipioSelectOnChange(val: string) {
        setMunicipioSelected(val);
    }

    function handleEditInfosOnForm(e: FormEvent) {
        e.preventDefault();
        setOnViewModeInput(!onViewModeInput);

        if (onViewModeInput === false) {
            const dataStorageGeneral = JSON.stringify(generalFormData);
            sessionStorage.setItem("generalFormData", dataStorageGeneral);

            const dataStorageAddress = JSON.stringify(addressFormData);
            sessionStorage.setItem("addressFormData", dataStorageAddress);

            const dataStoragePass = JSON.stringify(passwordFormData);
            sessionStorage.setItem("passwordFormData", dataStoragePass);

            const dataStorageProfessional = JSON.stringify(professionalFormData);
            sessionStorage.setItem("professionalFormData", dataStorageProfessional);
        }
    }

    // async function getValuesOnStorage() {
    //     const dataGeneralData = sessionStorage.getItem("generalFormData");
    //     if (dataGeneralData) {
    //         const data = JSON.parse(dataGeneralData)
    //         setGeneralFormData(data);
    //     };

    //     const dataAddressData = sessionStorage.getItem("addressFormData");
    //     if (dataAddressData) {
    //         const data = JSON.parse(dataAddressData)
    //         setAddressFormData(data);
    //     };

    //     const dataPasswordData = sessionStorage.getItem("passwordFormData");
    //     if (dataPasswordData) {
    //         const data = JSON.parse(dataPasswordData)
    //         setPasswordFormData(data);
    //     };

    //     const dataProfessionalData = sessionStorage.getItem("professionalFormData");
    //     if (dataProfessionalData) {
    //         const data = JSON.parse(dataProfessionalData)
    //         setProfessionalFormData(data);
    //     };

    // }


    return (
        <GlobalContext.Provider
            value={{
                valueSelect,
                setValueSelect,
                ufs,
                ufSelected,
                municipios,
                municipioSelected,
                asideCollapse,
                setAsideCollapse,
                setMunicipios,
                onViewModeInput,
                setOnViewModeInput,
                generalFormData,
                setGeneralFormData,
                addressFormData,
                setAddressFormData,
                passwordFormData,
                setPasswordFormData,
                professionalFormData,
                setProfessionalFormData,
                handleUfSelectOnChange,
                getUfsAddress,
                handleMunicipioSelectOnChange,
                handleEditInfosOnForm,
                // getValuesOnStorage
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);