import styled, { css } from 'styled-components'

export const Button = styled.a`
  display: flex;
  background-color: transparent;
  margin-bottom: 12px;
  text-decoration: none;
  align-items: center;

  :hover svg > path {
    fill: ${(props) => props.theme.colors.secondary};
  }

  :hover span {
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const Icon = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 6px;
  justify-content: center;
  align-items: center;
`

interface TextStyledProps {
  IsCollapsedMenu: boolean
}

export const Text = styled.span<TextStyledProps>`
  position: absolute;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-left: 48px;
  font-size: 13px;
  font-weight: 400;
  transition: 500ms;

  ${(props) =>
    props.IsCollapsedMenu &&
    css`
      display: none
    `}
`

export const ButtonChat = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.secondary};
`
