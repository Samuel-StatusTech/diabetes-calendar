import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: ${({theme}) => theme.breakpoints.phone}px) {
    flex-direction: column-reverse;
  }
`

export const Copy = styled.div`
  max-width: 30rem;
`

export const CopyTxt = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.pallete.blue.light};
  white-space: nowrap;
  
  @media (max-width: ${({theme}) => theme.breakpoints.phone}px) {
    font-size: 1.6rem;
  }
`
