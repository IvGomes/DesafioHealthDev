import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    gap: 4px;
    color: ${props => props.theme.colors.textTitles};
    font-size: 13px;
    font-weight: 400;
`

export const WeekDayNameView = styled.span`
    text-transform: capitalize;
`

export const DayNumberView = styled.span``

export const MonthNameView = styled.span`
    text-transform: capitalize;
`

export const YearNumberView = styled.span``