import * as C from './styles'
import { Play } from 'phosphor-react'

export function Home() {
  return (
    <C.HomeContainer>
      <form action="">
        <C.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <C.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="opção 1" />
            <option value="opção 2" />
            <option value="opção 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <C.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={1}
            max={60}
          />

          <span>minutos.</span>
        </C.FormContainer>

        <C.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <C.Separator>:</C.Separator>
          <span>0</span>
          <span>0</span>
        </C.CountdownContainer>
        <C.StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </C.StartCountdownButton>
      </form>
    </C.HomeContainer>
  )
}
