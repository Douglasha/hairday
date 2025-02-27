import {hoursLoad} from "../form/hours-load.js"

//Seleciona o input da data.
const selectedDate = document.getElementById("date")
export function schedulesDay(){
  // Obtém a data do input
  const date = selectedDate.value

  // Renderiza as horas disponíveis.
  hoursLoad({date})


  // Bucar na API os agendamentos para carregar do lado direito da tela

  // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}