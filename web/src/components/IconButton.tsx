import { ReactNode } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import * as Styled from "../styles/components/IconButton";


interface IconButtonProps {
    icon: ReactNode;
    text?: string;
    isChatButton?: boolean;
}

export function IconButton({ icon, text, isChatButton }: IconButtonProps) {
    const {asideCollapse} = useGlobalContext()

    return (
        isChatButton ? (
            <Styled.ButtonChat href="#">
                <Styled.Icon>
                    {icon}
                </Styled.Icon>
            </Styled.ButtonChat>
        ) : (
            <Styled.Button href="#">
                <Styled.Icon>
                    {icon}
                </Styled.Icon>
                <Styled.Text IsCollapsedMenu={asideCollapse}>
                    {text}
                </Styled.Text>
            </Styled.Button>
        )
    )
}