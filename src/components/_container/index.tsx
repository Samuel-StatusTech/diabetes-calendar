import React from 'react'
import * as S from './styled'

type Props = {
  children: any
}

const Container = ({children}: Props) => {

  return (
    <S.Wrapper>{children}</S.Wrapper>

  )
}

export default Container
