import { IconButton } from './IconButton';

import * as Styled from './../styles/components/TitlePageViewAndBackButton';

import { Icons } from './Icons';


interface TitlePageViewAndBackButtonProps {
    namePage: string;
}

export function TitlePageViewAndBackButton({ namePage }: TitlePageViewAndBackButtonProps) {
    return (
        <Styled.Container>
            <IconButton icon={<Icons.BackArrow />} />
            <span>{namePage}</span>
        </Styled.Container>
    )
}