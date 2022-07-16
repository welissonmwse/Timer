import * as C from './styles'
export function NewCycleForm() {
  return (
    <C.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <C.TaskInput
        type="text"
        id="task"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </C.FormContainer>
  )
}
