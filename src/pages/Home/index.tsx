import * as C from './styles'
import * as zod from 'zod'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'Informe um intervalo entre 5 e 60 minutos')
    .max(60, 'Informe um intervalo entre 5 e 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurruentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch } = newCycleForm

  const task = watch('task')
  const isSubmitDisaled = !task

  return (
    <C.HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <C.StopCountdownButton type="button" onClick={interruptCurruentCycle}>
            <HandPalm size={24} />
            Interromper
          </C.StopCountdownButton>
        ) : (
          <C.StartCountdownButton type="submit" disabled={isSubmitDisaled}>
            <Play size={24} />
            Começar
          </C.StartCountdownButton>
        )}
      </form>
    </C.HomeContainer>
  )
}
