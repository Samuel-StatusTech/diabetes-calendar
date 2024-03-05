import React, { useState } from "react"
import * as S from "./styled"
import { MinusIcon, PlusIcon } from "../../assets/icons"

const Form = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")

  const handleAge = (txt: string) => {
    const n = txt.replace(/\D/g, "")
    setAge(+n)
  }

  const decreaseAge = () => {
    if (age > 1) setAge(age - 1)
    else setAge(0)
  }

  const increaseAge = () => {
    setAge(age + 1)
  }

  return (
    <S.Area>
      <S.IArea>
        <S.Label>Nome:</S.Label>
        <S.Input
          placeholder="Informe seu nome"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </S.IArea>
      <S.IArea>
        <S.Label>Idade:</S.Label>
        <S.NIBox>
          <S.ControlBtn onClick={decreaseAge}>
            <MinusIcon />
          </S.ControlBtn>
          <S.Input
            placeholder="00"
            value={String(age).padStart(2, "0")}
            onChange={(ev) => handleAge(ev.target.value)}
          />
          <S.ControlBtn onClick={increaseAge}>
            <PlusIcon />
          </S.ControlBtn>
        </S.NIBox>
      </S.IArea>
      <S.IArea>
        <S.Label>E-mail:</S.Label>
        <S.Input
          placeholder="Informe seu melhor e-mail"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </S.IArea>
      <S.SubmitButton>
        <span>Quero me cadastrar</span>
      </S.SubmitButton>
    </S.Area>
  )
}

export default Form
