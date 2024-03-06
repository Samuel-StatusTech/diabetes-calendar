import React from "react"
import * as S from "./styled"

const formLink = process.env.REACT_APP_BASE_URL as string

type Props = {
  toggleModal: () => void
}

const FormModal = ({ toggleModal }: Props) => {
  const handleLink = () => {
    const a = document.createElement("a")

    a.href = formLink
    a.target = "_blank"
    a.click()

    toggleModal()
  }

  return (
    <S.Bg>
      <S.Box>
        <S.Title>Email enviado com sucesso!</S.Title>
        <S.Invite>Gostaria de nos ajudar com uma breve pesquisa?</S.Invite>
        <S.Buttons>
          <S.SubmitButton onClick={toggleModal} isCancelling={true}>
            <span>Não</span>
          </S.SubmitButton>
          <S.SubmitButton onClick={handleLink}>
            <span>Sim</span>
          </S.SubmitButton>
        </S.Buttons>
      </S.Box>
    </S.Bg>
  )
}

export default FormModal
