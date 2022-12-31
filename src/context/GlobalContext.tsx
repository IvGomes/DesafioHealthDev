import { useState, useContext, createContext, ReactNode, SetStateAction } from "react";
import * as api from "./../services/districtsRequest";


interface GlobalContextProps {
    children: ReactNode;
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
    handleUfSelectOnChange: (val: string) => void;
    getUfsAddress: () => void;
    handleMunicipioSelectOnChange: (val: string) => void;
}


export const GlobalContext = createContext<GlobalReturnProps>({} as any);
export const GlobalProvider = ({ children }: GlobalContextProps) => {
    const [valueSelect, setValueSelect] = useState("");
    const [ufs, setUfs] = useState([]);
    const [ufSelected, setUfSelected] = useState("");
    const [municipios, setMunicipios] = useState([]);
    const [municipioSelected, setMunicipioSelected] = useState("");
    const [asideCollapse, setAsideCollapse] = useState(true);


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
                handleUfSelectOnChange,
                getUfsAddress,
                handleMunicipioSelectOnChange
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);