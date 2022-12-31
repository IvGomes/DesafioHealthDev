import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const PathBread = styled.ul`
  display: flex;
  gap: 18px;
  align-items: center;
  color: ${props => props.theme.colors.textDescription};
`

export const InitPointIcon = styled.li`
  display: flex;
  width: 15px;
  height: 15px;
  align-items: center;
`

export const Path = styled.li`
  display: flex;
  font-size: 14px;
  font-weight: 400;

  :last-of-type {
    color: ${props => props.theme.colors.secondary};
    font-weight: 500;
  }

  :before {
    content: '>';
    display: flex;
    color: ${props => props.theme.colors.textDescription};
    margin-right: 18px;
    text-align: center;
    font-weight: 400;
  }
`
