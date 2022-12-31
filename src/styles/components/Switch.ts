import * as Switch from '@radix-ui/react-switch'
import { SwitchProps } from '@radix-ui/react-switch'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 12px;
  align-self: center;
`

export const Label = styled.label``

export const SwitchRoot = styled(Switch.Root)<SwitchProps>`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.switchInativeBg};
  border: 1px solid ${(props) => props.theme.colors.switchInativeBorder};
  border-radius: 9999px;

  ${(props) =>
    props.checked &&
    css`
      background-color: ${(props) => props.theme.colors.switchActiveBg};
      border: 1px solid ${(props) => props.theme.colors.switchActiveBorder};
    `}
`

export const SwitchThumb = styled(Switch.Thumb)<SwitchProps>`
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  ${(props) =>
    props.checked &&
    css`
      transform: translateX(24px);
    `}
`
