import dayjs from "dayjs"
import { generateDatesFromMonth } from "../utils/generate-dates-from-month"
import { generateDatesFromYearBeggining } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const weekDaysNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thuy",
    "Fri",
    "Sat"
  ]

const sumaryDates = generateDatesFromMonth()

const startDayMonthName = dayjs().startOf('month').toDate().toString().split(' ')[0]

const daysBefore = weekDaysNames.indexOf(startDayMonthName)

const amountOfDaysToFill = 35 - dayjs().daysInMonth()

export function SumaryTable(){
    return(
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-7 gap-3">
                {weekDays.map((weekDay, i) => {
                    return (
                        <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl font-bold h-10 flex items-center justify-center">
                            {weekDay}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-7 gap-3">
                
                {daysBefore > 0 && Array.from({length: daysBefore}).map((_,i)=>{
                    return <HabitDay key={i} dayFuture={true}/>
                })}


                {sumaryDates.map(date => {
                    return <HabitDay key={date.toString()} dayFuture={false}/>
                })}

                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_,i)=>{
                    return <HabitDay key={i} dayFuture={true}/>
                })}
            </div>
        </div>
    )
}