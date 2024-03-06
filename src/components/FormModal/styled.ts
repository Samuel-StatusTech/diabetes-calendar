import styled from "styled-components"

export const Bg = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(2px);
`

export const Box = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.pallete.white.pure};
  padding: 2.4rem;
  border-radius: 2.8rem;
  margin: 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    margin: 0 24px;
  }
`

export const Title = styled.h2`
  width: 100%;
  font-size: 3.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.pallete.blue.dark};
  text-align: left;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 3.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 2.4rem;
  }
`

export const Invite = styled.p`
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.pallete.black.light};
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 1.8rem;
    margin-bottom: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 1.4rem;
    margin-bottom: 24px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  width: 100%;
`

export const SubmitButton = styled.button<{ isCancelling?: boolean }>`
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme, isCancelling }) =>
    isCancelling ? "transparent" : theme.pallete.blue.dark};
  display: grid;
  place-items: center;
  padding: 1.2rem 3.2rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 1rem 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    padding: 1rem 2.2rem;
  }

  span {
    white-space: nowrap;
    color: ${({ theme, isCancelling }) =>
      isCancelling ? theme.pallete.red : theme.pallete.white.pure};
    font-size: 1.8rem;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      font-size: 1.6rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
      font-size: 1.4rem;
    }
  }
`
