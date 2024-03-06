import React, { useEffect, useState } from "react"
import Container from "../../components/_container"
import Header from "../../components/header"
import * as S from "./styled"
import SubscribeSection from "../../components/SubscribeSection"
import WhatCanDoSection from "../../components/WhatCanDoSection"
import SoonSection from "../../components/SoonSection"
import Footer from "../../components/Footer"
import FormModal from "../../components/FormModal"

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    window.document.body.style.overflowY = showModal ? "hidden" : "auto"
  }, [showModal])

  return (
    <>
      {showModal && <FormModal toggleModal={toggleModal} />}

      <S.Bg>
        <Container>
          <Header />
          <S.Title>
            <span>Você está pronto para </span>
            <span className="blue">assumir o controle </span>
            <span>da sua saúde?</span>
          </S.Title>
          <SubscribeSection toggleModal={toggleModal} />
          <WhatCanDoSection />
          <SoonSection />
          <Footer />
        </Container>
      </S.Bg>
    </>
  )
}

export default LandingPage
