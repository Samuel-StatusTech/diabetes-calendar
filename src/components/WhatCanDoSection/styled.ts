import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 12rem;
`

export const TitleBox = styled.div`
  display: grid;
  place-items: center;
  padding: 3rem 0 3.5rem;
  position: relative;
  max-width: 70rem;
  margin: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.8rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.pallete.blue.light};
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`

export const SectionTitle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
`

export const GridPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 13rem;
  row-gap: 4.3rem;
`

export const GridPoint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const GPTitle = styled.span`
  font-size: 2.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.pallete.white.pure};
`

export const GPText = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.pallete.white.pure};
`
