import { IconButton } from './IconButton';

import * as Styled from './../styles/components/TitlePageViewAndBackButton';

import backIcon from './../assets/icons/backCoolicon.svg';


interface TitlePageViewAndBackButtonProps {
    namePage: string;
}

export function TitlePageViewAndBackButton({ namePage }: TitlePageViewAndBackButtonProps) {
    return (
        <Styled.Container>
            <IconButton iconImg={backIcon} />
            <span>{namePage}</span>
        </Styled.Container>
    )
}