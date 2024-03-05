import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    gap: 5.2rem;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 5.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }
`

export const SubscribeCall = styled.h3`
  font-size: 2.6rem;
  font-weight: 800;

  span.blue {
    color: ${({ theme }) => theme.pallete.blue.light};
  }
`
