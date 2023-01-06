import { useState, useContext, createContext, ReactNode, SetStateAction } from "react";

import noImagePreview from './../assets/icons/no-photo-selected.jpg';


interface DragAndDropContextProps {
    children: ReactNode;
}
interface DragAndDropReturnProps {
    files: any;
    setFiles: React.Dispatch<SetStateAction<any>>;
    dragActive: boolean;
    setDragActive: React.Dispatch<SetStateAction<boolean>>;
    previewUrlAvatar: string;
    handleDrag: (e: any) => any;
    handleDrop: (e: any) => any;
    createPreviewUrl: (file: any) => void;
    revokePreviewUrl: (urlPreview: string) => void;
}


export const DragAndDropContext = createContext<DragAndDropReturnProps>({} as any);
export const DragAndDropProvider = ({ children }: DragAndDropContextProps) => {
    const [files, setFiles] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [previewUrlAvatar, setPreviewUrlAvatar] = useState(noImagePreview);

    function handleDrag(e: any) {
        e.preventDefault();
        e.stopPropagation();


        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    function handleDrop(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFiles(e.dataTransfer.files[0]);

            createPreviewUrl(e.dataTransfer.files[0]);
        }
    };

    function createPreviewUrl(file: any) {
        const previewUrlAvatar = URL.createObjectURL(file);
        setPreviewUrlAvatar(previewUrlAvatar);
    }

    function revokePreviewUrl(urlPreview: string) {
        URL.revokeObjectURL(urlPreview);
    }

    return (
        <DragAndDropContext.Provider
            value={{
                files,
                setFiles,
                dragActive,
                setDragActive,
                previewUrlAvatar,
                handleDrag,
                handleDrop,
                createPreviewUrl,
                revokePreviewUrl
            }}
        >
            {children}
        </DragAndDropContext.Provider>
    )
}

export const useDragAndDropContext = () => useContext(DragAndDropContext);