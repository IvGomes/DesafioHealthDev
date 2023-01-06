import styled, { css } from 'styled-components'

interface isCollapsedMenuStyledProps {
  isCollapsedMenu: boolean
}

export const Button = styled.button<isCollapsedMenuStyledProps>`
  position: absolute;
  top: 85px;
  right: -10px;
  left: auto;
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  cursor: pointer;
  
  svg {
      transform: rotate(90deg);
      transform-origin: center;
      
      ${(props) =>
      props.isCollapsedMenu &&
      css`
        transform: rotate(-90deg);
        transition: 500ms;
      `}

    path {
      fill: ${(props) => props.theme.colors.buttonFormsText};
    }
  }
`
