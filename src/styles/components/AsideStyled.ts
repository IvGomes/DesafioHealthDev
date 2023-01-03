import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100%;
  grid-row: span 2;
  padding-top: 32px;
  padding-bottom: 92px;
  justify-content: start;
  text-align: left;
`

export const AvatarContainer = styled.div`
display: flex;
`

export const Avatar = styled.div`
  position: relative;
  display: flex;
  width: 32px;
  height: 32px;
  margin: 5px 16px 41px 0;
`

interface StatusUserProps {
  isStatus: 'statusOnline' | 'statusOffline' | 'statusAway'
}
export const StatusUser = styled.span<StatusUserProps>`
  position: absolute;
  top: 5px;
  left: auto;
  right: 0;
  width: 6px;
  height: 6px;
  background-color: ${(props) =>
    props.isStatus == 'statusOnline'
      ? props.theme.colors.statusOnline
      : props.isStatus == 'statusOffline'
      ? props.theme.colors.statusOffline
      : props.theme.colors.statusAway};
  border: 1px solid ${(props) => props.theme.colors.backgroundBody};
  border-radius: 100%;
  z-index: 99;
`

export const ImgContainer = styled.span`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 100%;
  overflow: hidden;
`

export const Img = styled.img`
  position: relative;
  display: flex;
  width: 50px;
  height: 50px;
`

export const Divider = styled.span`
  display: block;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.divider};
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  
  > span {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
  }
`

export const TitleMenu = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 23px;

  :first-of-type {
    margin-top: 22px;
  }
`
