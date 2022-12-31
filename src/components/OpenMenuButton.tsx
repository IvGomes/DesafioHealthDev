import { Icons } from './Icons';

import * as Styled from './../styles/components/OpenMenuButton';
import { useGlobalContext } from '../context/GlobalContext';


export function OpenMenuButton() {
    const {asideCollapse, setAsideCollapse} = useGlobalContext();

    return (
        <Styled.Button isCollapsedMenu={asideCollapse} onClick={() => setAsideCollapse(!asideCollapse)}>
            <Icons.ChevronDown />
        </Styled.Button>
    )
}