import { SigninForm } from '../components/forms/SigninForm';
import { SignupForm } from '../components/forms/SignupForm';
import * as Styled from './../styles/pages/SigninupPage';

export function SigninunPage() {
    return (
        <Styled.Container>
            <Styled.Header>
                <img src='https://healthdev.io/wp-content/uploads/2021/11/cropped-logoHD-c.png' />
            </Styled.Header>
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
        </Styled.Container>
    )
}