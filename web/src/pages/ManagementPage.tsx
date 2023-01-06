import { Aside } from './../components/Aside';
import { AddressDataForm } from './../components/forms/AddressDataForm';
import { GeneralDataForm } from './../components/forms/GeneralDataForm';
import { PasswordDataForm } from './../components/forms/PasswordDataForm';
import { ProfessionalDataForm } from './../components/forms/ProfessionalDataForm';
import { Header } from './../components/Header';
import { TitlePageViewAndBackButton } from './../components/TitlePageViewAndBackButton';

import { DragAndDropProvider } from './../context/DragAndDropContext';
import { useGlobalContext } from './../context/GlobalContext';

import * as Styled from '../styles/pages/ManagementPageStyled';


export function ManagementPage() {
  const { asideCollapse } = useGlobalContext();

  return (
    <Styled.Container isCollapsed={asideCollapse}>
      <Aside />
      <Header />
      <main>
        <TitlePageViewAndBackButton namePage={"Configurações de perfil"} />
        <Styled.TabsRoot defaultValue='generals-data'>
          <Styled.TabsList>
            <Styled.TabsTrigger value='generals-data'>Dados Gerais</Styled.TabsTrigger>
            <Styled.TabsTrigger value='address'>Endereço</Styled.TabsTrigger>
            <Styled.TabsTrigger value='password'>Senha</Styled.TabsTrigger>
            <Styled.TabsTrigger value='professional-data'>Dados Profissionais</Styled.TabsTrigger>
          </Styled.TabsList>
          <Styled.TabsContent value='generals-data'>
            {/* provider */}
            <DragAndDropProvider>
              <GeneralDataForm />
            </DragAndDropProvider>
          </Styled.TabsContent>
          
          <Styled.TabsContent value='address'>
            <AddressDataForm />
          </Styled.TabsContent>
          
          <Styled.TabsContent value='password'>
            <PasswordDataForm />
          </Styled.TabsContent>

          <Styled.TabsContent value='professional-data'>
            <ProfessionalDataForm />
          </Styled.TabsContent>
        </Styled.TabsRoot>
      </main>
    </Styled.Container>
  )
}
