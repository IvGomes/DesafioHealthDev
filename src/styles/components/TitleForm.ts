import styled from 'styled-components'

export const Head = styled.h2`
  grid-column: span 2;
  color: ${(props) => props.theme.colors.textTitles};
  margin-bottom: 65px;
  font-size: 18px;
  font-weight: 500;
`

export const Subtitle = styled.span`
  color: ${(props) => props.theme.colors.textDescription};
  font-size: 14px;
  font-weight: 400;
`
