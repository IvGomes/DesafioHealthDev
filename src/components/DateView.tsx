import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Container, DayNumberView, MonthNameView, WeekDayNameView, YearNumberView } from "../styles/components/DateView"


export function DateView() {
    const nowDate = new Date();
    const weekDayName = format(nowDate, "EEEE", {locale: ptBR});
    const dayDate = format(nowDate, "d", {locale: ptBR});
    const monthDate = format(nowDate, "LLLL", {locale: ptBR});
    const yearDate = format(nowDate, "yyyy", {locale: ptBR});

    return (
        <Container>
            <WeekDayNameView>{`${weekDayName},`}</WeekDayNameView>
            <DayNumberView>{dayDate}</DayNumberView>{"de"}
            <MonthNameView>{monthDate}</MonthNameView>{"de"}
            <YearNumberView>{yearDate}</YearNumberView>
        </Container>
    )
}