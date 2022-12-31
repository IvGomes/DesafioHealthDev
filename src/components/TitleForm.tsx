import * as Styled from './../styles/components/TitleForm';

export interface TitleFormProps {
    principal: string;
    subtitle?: string;
}

export function TitleForm({ principal, subtitle}: TitleFormProps) {
    return (
        <Styled.Head>
            <p>{principal}</p>
            <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        </Styled.Head>
    )
}