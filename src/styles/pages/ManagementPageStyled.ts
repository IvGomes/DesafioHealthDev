import * as Tabs from '@radix-ui/react-tabs'

import styled from 'styled-components'

interface ContainerStyledProps {
  isCollapsed: boolean;
}

export const Container = styled.div<ContainerStyledProps>`
  display: grid;
  grid-template-columns: ${props => props.isCollapsed ? "4rem 1fr" : "17.5rem 1fr"};
  grid-template-rows: 5.625rem 100%;
  transition: 500ms;
  
  aside {
    position: relative;
    grid-row: span 2;
    border-right: 1px solid ${(props) => props.theme.colors.border};
    padding-left: 16px;
    padding-right: 16px;
  }

  header {
    display: flex;
    padding: 20px 32px;
  }

  main {
    padding: 40px 32px;
  }
`

export const uList = styled.ul`
  display: flex;
  list-style: none;
`

export const ListItem = styled.li``
export const TabsRoot = styled(Tabs.Root)``

export const TabsList = styled(Tabs.List)`
  display: flex;
  gap: 35px;
  margin-bottom: 32px;

  & [data-state='active'] {
    color: ${(props) => props.theme.colors.secondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    font-weight: 500;
  }
`

export const TabsTrigger = styled(Tabs.Trigger).attrs((props) => ({}))`
  color: ${(props) => props.theme.colors.textSecondary};
  background-color: transparent;
  padding-right: 5px;
  padding-bottom: 16px;
  padding-left: 5px;
  border: 2px solid transparent;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
  }
`

export const TabsContent = styled(Tabs.Content)``
