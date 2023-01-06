import * as Tabs from '@radix-ui/react-tabs'

import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.shadow};
`

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  [data-state='active'] {
    color: ${(props) => props.theme.colors.secondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    font-weight: 500;
  }

  :focus-visible {
    border: none;
  }
`

export const TabsTrigger = styled(Tabs.Trigger)`
  display: flex;
  flex: 1;
  height: 45px;
  color: ${(props) => props.theme.colors.textTitles};
  background-color: white;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  border: none;
  line-height: 1;
  font-size: 15px;
  user-select: none;
  cursor: pointer;

  :first-child {
    border-top-left-radius: 6px;
  }

  :last-child {
    border-top-right-radius: 6px;
  }

  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  :focus {
    position: relative;
    box-shadow: none;
  }
`

export const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  outline: none;
`
