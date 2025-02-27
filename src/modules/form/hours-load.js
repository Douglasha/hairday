import dayjs from "dayjs"

import { openingHours } from "../../utils/openning-hours.js"
export function hoursLoad({date}) {
  const opening = openingHours.map((hour) => {
    //Recupera somente a hora
    const [scheduleHour] = hour.split(":")
    console.log(scheduleHour)

    // Adicionar a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    //console.log(isHourPast)
    return {
      hour,
      available: !isHourPast,
    }
  })
}