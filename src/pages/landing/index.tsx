import React from 'react'
import Container from '../../components/_container'
import Header from '../../components/header'
import * as S from './styled'
import SubscribeSection from '../../components/SubscribeSection'
import WhatCanDoSection from '../../components/WhatCanDoSection'
import SoonSection from '../../components/SoonSection'
import Footer from '../../components/Footer'

const LandingPage = () => {
  
  return (
    <S.Bg>
      <Container>
        <Header />
        <S.Title>
          <span>Você está pronto para </span>
          <span className='blue'>assumir o controle </span>
          <span>da sua saúde?</span>
        </S.Title>
        <SubscribeSection />
        <WhatCanDoSection />
        <SoonSection />
        <Footer />
      </Container>
    </S.Bg>
  )
}

export default LandingPage
