import * as S from "./styled"
import { LogoWhite } from '../../assets/icons'

const Footer = () => {
  return (
    <S.Area>
      <S.Copy>
        <S.CopyTxt>Calendádio do Diabético © 2024</S.CopyTxt>
        <S.CopyTxt>Todos os direitos reservados</S.CopyTxt>
      </S.Copy>
      <LogoWhite />
    </S.Area>
  )
}

export default Footer
