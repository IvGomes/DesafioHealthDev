import * as Select from '@radix-ui/react-select'
import styled, { css } from 'styled-components'

interface SelectProps {
  isOpen?: boolean
}

export const SelectRoot = styled(Select.Root)``

export const SelectTrigger = styled(Select.Trigger)<SelectProps>`
  display: flex;
  color: ${(props) => props.theme.colors.textTitles};
  background-color: ${(props) => props.theme.colors.background};
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border: 2px solid
    ${(props) =>
      props.isOpen
        ? props.theme.colors.focusInput
        : props.theme.colors.borderInputs};
  border-radius: 4px;
`

export const SelectValue = styled(Select.Value)`
`

export const SelectIcon = styled(Select.Icon)<SelectProps>`
  path {
    fill: ${(props) =>
      props.isOpen ? props.theme.colors.secondary : props.theme.colors.icons};
    transform: rotate(360deg);
    transform-origin: center;
    transition: 500ms;

    ${(props) =>
      props.isOpen &&
      css`
        fill: ;
        transform: rotate(180deg);
        transform-origin: center;
        transition: 500ms;
      `}
  }
`

export const SelectPortal = styled(Select.Portal)`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.borderInputs};
`

export const SelectContent = styled(Select.Content)`
  margin-top: 50px;
`

export const SelectViewport = styled(Select.Viewport)``

export const SelectItem = styled(Select.Item)`
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.iconsHover};
  }
`

export const SelectItemText = styled(Select.ItemText)`
  color: ${(props) => props.theme.colors.textDescription};
  font-size: 13px;
  font-weight: 400;
`
