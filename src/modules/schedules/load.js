import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"


//Seleciona o input da data.
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
  // Obtém a data do input
  const date = selectedDate.value

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })
  
  // Exibe os agendamentos
  schedulesShow({dailySchedules})

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules })


  // Bucar na API os agendamentos para carregar do lado direito da tela

  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}