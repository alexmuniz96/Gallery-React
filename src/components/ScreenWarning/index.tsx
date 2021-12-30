
import { Container } from "./styles"

type PropsScreenWarning = {
  loading: boolean
}

export function ScreenWarning({ loading }: PropsScreenWarning) {

  let setScreenWarningText = ''
  let emoji = ''

  if (loading) {
    setScreenWarningText = 'Carregando ...'
    emoji = '✋'
  } else if (!loading) {
    emoji = '😭'
    setScreenWarningText = 'Não a fotos para carregar'

  }


  return (
    <Container>

      <div className="emoji"> {emoji}</div>
      <div > {setScreenWarningText} </div>

    </Container>
  )
}

// Fazer a checagem do loading mudando a frase que aparece, passando o loading como props e usando if