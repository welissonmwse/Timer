import * as C from './styles'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Informe um intervalo entre 5 e 60 minutos')
    .max(60, 'Informe um intervalo entre 5 e 60 minutos'),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisaled = !task && !minutesAmount

  return (
    <C.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <C.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <C.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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
        <C.StartCountdownButton type="submit" disabled={isSubmitDisaled}>
          <Play size={24} />
          Começar
        </C.StartCountdownButton>
      </form>
    </C.HomeContainer>
  )
}
