import * as S from "./styled"
import { AppStore, GooglePlay } from '../../assets/icons'

const SoonSection = () => {
  return (
    <S.Area>
      <S.TitleBox>
        <S.SectionTitle>
        Não perca a oportunidade de simplificar o gerenciamento da sua saúde. Junte-se a nós e descubra como o controle pode ser fácil e eficaz com o Calendário do Diabético.
        </S.SectionTitle>
      </S.TitleBox>
      <S.DownloadArea>
        <S.DownloadTitle>Em breve!</S.DownloadTitle>
        <S.DownloadBtns>
          <S.DownloadBtn><AppStore /></S.DownloadBtn>
          <S.DownloadBtn><GooglePlay /></S.DownloadBtn>
        </S.DownloadBtns>
      </S.DownloadArea>
    </S.Area>
  )
}

export default SoonSection
