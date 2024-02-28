import styled from "styled-components"


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.pallete.white.light};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 52px 0 60px;
  box-shadow: 0 66px 47px -42px rgba(0, 0, 0, 0.25);
`