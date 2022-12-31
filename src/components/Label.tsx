import { LabelHTMLAttributes } from "react";
import * as Styled from "../styles/components/Label";


interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    title: string;
    subtitle?: string;
}

export function Label({ title, subtitle, ...props }: LabelProps) {
    return (
        <Styled.LabelHead {...props}>
            <Styled.LabelTitle>{title}</Styled.LabelTitle>
            <Styled.LabelSubtitle>{subtitle}</Styled.LabelSubtitle>
        </Styled.LabelHead>
    )
}