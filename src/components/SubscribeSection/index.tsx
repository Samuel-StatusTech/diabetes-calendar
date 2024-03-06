import * as S from "./styled"
import Form from "../Form"

type Props = {
  toggleModal: () => void
}

const SubscribeSection = ({ toggleModal }: Props) => {
  return (
    <S.Area>
      <S.Texts>
        <S.Block>
          <p>
            Imagine ter uma <b>poderosa ferramenta</b> na palma da mão, sempre
            pronta para ajudá-lo a acompanhar seus testes, resultados e evolução
            da doença.
          </p>
          <p>
            Seja você é recém-diagnosticado ou um veterano no enfrentamento do
            diabetes, o <b>Calendário do Diabético</b> foi projetado para
            atender às suas necessidades.
          </p>
        </S.Block>
        <S.Block>
          <S.SubscribeCall>
            <span className="blue">Inscreva-se </span>
            <span>agora para começar sua jornada e estilo de </span>
            <span className="blue">vida mais saudável </span>
            <span>e controlado.</span>
          </S.SubscribeCall>
          <p>
            Seja você é recém-diagnosticado ou um veterano no enfrentamento do
            diabetes, o <b>Calendário do Diabético</b> foi projetado para
            atender às suas necessidades.
          </p>
        </S.Block>
      </S.Texts>
      <Form toggleModal={toggleModal} />
    </S.Area>
  )
}

export default SubscribeSection
