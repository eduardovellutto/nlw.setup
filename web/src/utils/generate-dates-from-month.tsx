import dayjs from "dayjs";

export function generateDatesFromMonth(){
    const firstDayOfTheYear = dayjs().startOf('month')
    
    const lastDayOfMonth = dayjs().endOf('month')
    
    const dates = []
    let compareDate = firstDayOfTheYear

    while(compareDate.isBefore(lastDayOfMonth)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}