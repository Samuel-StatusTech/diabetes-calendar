import React from "react"
import * as S from "./styled"
import {
  MinusIcon,
  PlusIcon,
} from '../../assets/icons'

const Form = () => {
  return (
    <S.Area>
      <S.IArea>
        <S.Label>Nome:</S.Label>
        <S.Input placeholder="Informe seu nome" />
      </S.IArea>
      <S.IArea>
        <S.Label>Idade:</S.Label>
        <S.NIBox>
          <S.ControlBtn><MinusIcon /></S.ControlBtn>
          <S.Input placeholder="00" />
          <S.ControlBtn><PlusIcon /></S.ControlBtn>
        </S.NIBox>
      </S.IArea>
      <S.IArea>
        <S.Label>E-mail:</S.Label>
        <S.Input placeholder="Informe seu melhor e-mail" />
      </S.IArea>
      <S.SubmitButton>
        <span>Quero me cadastrar</span>
      </S.SubmitButton>
    </S.Area>
  )
}

export default Form
