import { Breadcrumb } from "./Breadcrumb";
import { DateView } from "./DateView";
import { IconButton } from "./IconButton";

import * as Styled from "../styles/components/HeaderStyled";

import { Icons } from "./Icons";
import { DropdownMenu } from "./DropdownMenu";

export function Header() {
    return (
        <header>
            <Styled.Container>
                <Styled.HeaderInfos>
                    <Breadcrumb icon={<Icons.Home />} />
                    <DateView />
                </Styled.HeaderInfos>
                <Styled.Nav>

                    <IconButton icon={
                        <Icons.Settings />
                    } />

                    <IconButton icon={
                        <Icons.Notification />
                    } />

                    <DropdownMenu
                        onViewInfos={{
                            title: "Clinica OdontoLife",
                            subtitle: "Unidade 2 - Consultório"
                        }}
                        contentOptions={[
                            { title: "Clinica OdontoLife", subtitle: "Unidade 2 - Consultório 1" }
                        ]}
                    />

                </Styled.Nav>
            </Styled.Container>
        </header>
    )
}