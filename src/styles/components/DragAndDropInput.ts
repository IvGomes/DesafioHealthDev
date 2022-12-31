import styled from 'styled-components'

interface StyledDragAndDropInputsProps {
  isDragActive: boolean
}

export const Container = styled.div<StyledDragAndDropInputsProps>`
  height: 140px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.borderInputs};
  border-radius: 4px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Text = styled.p`
  max-width: 350px;
  margin-top: 16px;
  text-align: center;
  font-size: 14px;

  strong {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
  }
`

export const DropOverlay = styled.div`
  position: fixed;
  background-color: rgba(0,0,0, .2);
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`
