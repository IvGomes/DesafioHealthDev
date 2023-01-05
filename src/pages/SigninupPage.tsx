import { SigninForm } from '../components/forms/SigninForm';
import { SignupForm } from '../components/forms/SignupForm';
import * as Styled from './../styles/pages/SigninupPage';

export function SigninunPage() {
    return (
        <Styled.TabsRoot defaultValue="signin">
            <Styled.TabsList>
                <Styled.TabsTrigger value="signin">
                    Entrar
                </Styled.TabsTrigger>
                <Styled.TabsTrigger value="signup">
                    Cadastrar
                </Styled.TabsTrigger>
            </Styled.TabsList>
            <Styled.TabsContent value="signin">
                <SigninForm />
            </Styled.TabsContent>
            <Styled.TabsContent value="signup">
                <SignupForm />
            </Styled.TabsContent>
        </Styled.TabsRoot>
    )
}