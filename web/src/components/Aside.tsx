import { IconButton } from "./IconButton";
import { DropdownMenu } from "./DropdownMenu";

import { useGlobalContext } from "../context/GlobalContext";

import { Icons } from "./Icons";
import * as Styled from "../styles/components/AsideStyled";
import { OpenMenuButton } from "./OpenMenuButton";


export function Aside() {
    const { asideCollapse, generalFormData, professionalFormData } = useGlobalContext();

    return (
        <aside>
            <OpenMenuButton />
            <Styled.Container>
                <Styled.AvatarContainer>
                    <Styled.Avatar>
                        <Styled.StatusUser isStatus={"statusOnline"} />
                        <Styled.ImgContainer>
                            <Styled.Img src="https://source.unsplash.com/500x500/?users" alt="" />
                        </Styled.ImgContainer>
                    </Styled.Avatar>

                    <DropdownMenu
                        isCollapsed={asideCollapse}
                        onViewInfos={{
                            title: generalFormData.fullName,
                            subtitle: professionalFormData.especialidade
                        }}
                        contentOptions={[
                            { title: "Adicione outra conta", subtitle: "" }
                        ]}
                    />
                </Styled.AvatarContainer>

                <Styled.Divider />

                <Styled.Nav>
                    <span>
                        {!asideCollapse && <Styled.TitleMenu>Ferramentas</Styled.TitleMenu>}
                        <IconButton text="Início" icon={<Icons.Home />} />
                        <IconButton text="Consultório" icon={<Icons.Consultings />} />
                        <IconButton text="Clinicas" icon={<Icons.Clinics />} />
                        <IconButton text="Painel de atendimento" icon={<Icons.Panel />} />
                    </span>
                    <Styled.Divider />
                    <span>
                        {!asideCollapse && <Styled.TitleMenu>Outros</Styled.TitleMenu>}
                        <IconButton text="Notificações" icon={<Icons.Notification />} />
                        <IconButton text="Central de ajuda" icon={<Icons.Help />} />
                        <IconButton text="Configurações" icon={<Icons.Settings />} />
                        <IconButton text="Sair" icon={<Icons.BackArrow />} />
                    </span>
                    <IconButton icon={<Icons.Chat />} isChatButton={true} />
                </Styled.Nav>
            </Styled.Container>
        </aside>
    )
}