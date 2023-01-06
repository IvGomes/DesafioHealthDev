import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import styled, {css} from 'styled-components'


export const DropdownMenuRoot = styled(DropdownMenu.Root)``

interface DropdownMenuTriggerStyledProps {
  isCollapsedMenu?: boolean;
}

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)<DropdownMenuTriggerStyledProps>`
  display: flex;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  ${props => props.isCollapsedMenu && css`display: none;`}
`

export const IconTrigger = styled.span`
  display: flex;
  width: auto;
  height: 100%;
  color: ${(props) => props.theme.colors.textSecondary};
  padding: 20px;
  align-items: center;
  border-radius: 4px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.iconsHover};
  }
`

export const DropdownMenuPortal = styled(DropdownMenu.Portal)``

export const Head = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: 400;

  h2 {
    color: ${(props) => props.theme.colors.textTitles};
    font-size: 16px;
    font-weight: 500;
  }

  span {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 14px;
  }
`

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  right: 0;
  background-color: ${(props) => props.theme.colors.iconsHover};
  padding: 5px 10px 10px 10px;
  border-radius: 4px;

  :after {
    content: "";
    position: absolute;
    top: -10px;
    right: 15px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.iconsHover};
    transform: rotate(45deg);
    z-index: -9;
  }

  ${Head} {
    margin-top: 10px;
  }
`
