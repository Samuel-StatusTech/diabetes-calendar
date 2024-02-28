import styled from "styled-components"
import bgImage from '../../assets/images/background.png'

export const Bg = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 50px;
`

export const Title = styled.h1`
  max-width: 61rem;
  text-align: center;
  margin: 121px auto;
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.pallete.white.pure};

  span.blue {
    color: ${({ theme }) => theme.pallete.blue.light};
  }
`