import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRUENT_CYCLE = 'INTERRUPT_CURRUENT_CYCLE',
  MARK_CURRUENT_CYCLE_AS_FINISHED = 'MARK_CURRUENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFineshedAction() {
  return {
    type: ActionTypes.MARK_CURRUENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurruentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRUENT_CYCLE,
  }
}
