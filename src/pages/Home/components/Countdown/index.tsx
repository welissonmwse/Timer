import * as C from './styles'

export function Countdown() {
  return (
    <C.CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <C.Separator>:</C.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </C.CountdownContainer>
  )
}
