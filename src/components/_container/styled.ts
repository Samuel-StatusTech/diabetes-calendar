import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
  margin: auto;
  
  @media (max-width: ${({theme}) => theme.breakpoints.note}px) {
    margin: 0 48px;
    width: unset;
    max-width: unset;
  }
  
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    margin: 0 36px;
  }
  
  @media (max-width: ${({theme}) => theme.breakpoints.phone}px) {
    margin: 0 24px;
  }
`