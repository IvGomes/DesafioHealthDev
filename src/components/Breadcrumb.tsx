import { ReactNode } from 'react';
import * as Styled from './../styles/components/Breadcrumb'


export interface BreadcrumbProps {
    icon: ReactNode;
    titlePath?: string[];
}

export function Breadcrumb({ icon, titlePath }: BreadcrumbProps) {
    return (
        <Styled.Container>
            <Styled.PathBread>
                <Styled.InitPointIcon>
                    {icon}
                </Styled.InitPointIcon>
                <Styled.Path>{"Inicio"}</Styled.Path>
                <Styled.Path>{"Perfil"}</Styled.Path>
            </Styled.PathBread>
        </Styled.Container>
    )
}