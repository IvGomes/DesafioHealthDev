import { Icons } from "./Icons";

import * as Styled from "./../styles/components/DropdownMenu";

interface DropdownMenuProps {
    isCollapsed?: boolean;
    onViewInfos: {
        title: string;
        subtitle: string;
    };
    contentOptions: {
        title: string;
        subtitle: string
    }[]
}

export function DropdownMenu({onViewInfos, contentOptions, isCollapsed}: DropdownMenuProps) {
    return (
        <Styled.DropdownMenuRoot>
            <Styled.DropdownMenuTrigger isCollapsedMenu={isCollapsed}>
                <Styled.Head>
                    <h2>{onViewInfos.title}</h2>
                    <span>{onViewInfos.subtitle}</span>
                </Styled.Head>
                <Styled.IconTrigger>
                    <Icons.ChevronDown />
                </Styled.IconTrigger>
            </Styled.DropdownMenuTrigger>
            <Styled.DropdownMenuPortal>
                <Styled.DropdownMenuContent>
                    <Styled.Head>
                        <h2>{contentOptions[0].title}</h2>
                        <span>{contentOptions[0].subtitle}</span>
                    </Styled.Head>
                </Styled.DropdownMenuContent>
            </Styled.DropdownMenuPortal>
        </Styled.DropdownMenuRoot>
    )
}