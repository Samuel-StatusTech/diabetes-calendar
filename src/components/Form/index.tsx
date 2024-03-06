import React, { useState } from "react"
import * as S from "./styled"
import { MinusIcon, PlusIcon } from "../../assets/icons"
import { Api } from "../../api"

type Props = {
  toggleModal: () => void
}

const Form = ({ toggleModal }: Props) => {
  const [submitting, setSubmitting] = useState(false)
  const [failedSend, setFailedSend] = useState(false)

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

  const verifyErrors = () => {
    let matchEmail = new RegExp(/^[\w.-]+@[\w.-]+\.\w{2,}$/).test(email)

    if (!name.trim()) return "name"
    if (!age || age < 0) return "age"
    if (!email.trim() || !matchEmail) return "email"

    return false
  }

  const handleSubmit = async () => {
    const errors = verifyErrors()
    if (!errors) {
      setSubmitting(true)

      // sendEmail
      await Api.sendEmail({ name, age, email })
        .then((res) => {
          if (res) toggleModal()
          else setFailedSend(true)
        })
        .catch(() => {
          setFailedSend(true)
        })

      setSubmitting(false)
    } else {
      console.log(errors)
    }
  }

  const handleField = (field: "name" | "age" | "email", value: string) => {
    if (failedSend) setFailedSend(false)

    switch (field) {
      case "name":
        setName(value)
        break
      case "age":
        handleAge(value)
        break
      case "email":
        setEmail(value)
        break
    }
  }

  return (
    <S.Area>
      <S.IArea>
        <S.Label>Nome:</S.Label>
        <S.Input
          placeholder="Informe seu nome"
          value={name}
          onChange={(ev) => handleField("name", ev.target.value)}
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
            onChange={(ev) => handleField("age", ev.target.value)}
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
          onChange={(ev) => handleField("email", ev.target.value)}
        />
      </S.IArea>
      <S.Error visible={failedSend}>
        Verifique os campos e tente novamente
      </S.Error>
      <S.SubmitButton onClick={handleSubmit} disabled={submitting}>
        <span>{submitting ? "Enviando..." : "Quero me cadastrar"}</span>
      </S.SubmitButton>
    </S.Area>
  )
}

export default Form
