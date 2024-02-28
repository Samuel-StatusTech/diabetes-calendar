import * as S from "./styled"

type TPoint = {
  title: string
  text: string
}

const points: TPoint[] = [
  {
    title: "Organização Simplificada:",
    text: "Nosso aplicativo oferece um calendário intuitivo onde você pode registrar todos os seus testes de glicemia, refeições, exercícios e medicamentos.",
  },
  {
    title: "Lembrete Inteligente:",
    text: "Nunca mais se esqueça de fazer um teste de glicemia ou tomar sua medicação. Lembretes personalizados para ajudá-lo a manter sua rotina de cuidados em dia.",
  },
  {
    title: "Acompanhamento Personalizado:",
    text: "Visualize facilmente seus resultados ao longo do tempo com gráficos e detalhados. Identifique padrões, ajuste sua rotina e tome decisões informadas com base nos seus dados e relatórios.",
  },
  {
    title: "Compartilhamento com o Médico:",
    text: "Facilite o diálogo com seu médico compartilhando seus registros de forma rápida e segura. Isso pode ajudar na elaboração de um plano de tratamento mais eficaz e personalizado para você.",
  },
]

const WhatCanDoSection = () => {
  return (
    <S.Area>
      <S.TitleBox>
        <S.SectionTitle>
          O que o Calendário do Diabético pode fazer por você?
        </S.SectionTitle>
      </S.TitleBox>
      <S.GridPoints>
        {points.map((p, k) => (
          <S.GridPoint key={k}>
            <S.GPTitle>{p.title}</S.GPTitle>
            <S.GPText>{p.text}</S.GPText>
          </S.GridPoint>
        ))}
      </S.GridPoints>
    </S.Area>
  )
}

export default WhatCanDoSection
