import styled from 'styled-components'

export const Container = styled.button`
  position: relative;
  display: flex;
  height: 100%;
  color: ${props => props.theme.colors.buttonFormsText};
  background-color: ${props => props.theme.colors.buttonFormsBg};
  padding: 10px 32px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
