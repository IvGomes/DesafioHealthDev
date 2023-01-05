import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Button = styled.button`
  color: ${(props) => props.theme.colors.buttonFormsText};
  background-color: ${(props) => props.theme.colors.buttonFormsBg};
  padding: 0.8rem 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.buttonFormsHover};
  }
`
