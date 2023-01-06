import styled from "styled-components";


interface StyledInputsGroupProps {
    templateColumns: string
}

export const Header = styled.span`
  display: flex;
  justify-content: space-between;
`

export const RowLabelInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-bottom: 32px;
`

export const InputsGroup = styled.div<StyledInputsGroupProps>`
  display: grid;
  grid-template-columns: ${props => props.templateColumns};
  gap: 24px;
`