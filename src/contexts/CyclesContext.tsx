import { createContext, ReactNode, useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  addNewCycleAction,
  interruptCurruentCycleAction,
  markCurrentCycleAsFineshedAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
interface CreateCycleData {
  task: string
  minutesAmount: number
}
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFineshed: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurruentCycle: () => void
}
interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CycleContextProvaider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFineshed() {
    dispatch(markCurrentCycleAsFineshedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const id = uuidv4()
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function interruptCurruentCycle() {
    dispatch(interruptCurruentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFineshed,
        setSecondsPassed,
        createNewCycle,
        interruptCurruentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
