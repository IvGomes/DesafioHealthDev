import styled from 'styled-components'

export const AvatarPreview = styled.span`
  display: flex;
  width: 80px;
  height: 80px;
  border: 1px solid ${(props) => props.theme.colors.avatarPreviewBorder};
  border-radius: 100%;
  overflow: hidden;
`
