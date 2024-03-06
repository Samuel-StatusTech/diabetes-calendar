import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
  max-width: 380px;
  height: fit-content;
  background-color: #fff;
  border-radius: 4rem 4rem 8rem 8rem;
  padding: 2.5rem 5rem 7rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    border-radius: 2rem 2rem 4rem 4rem;
    padding: 2.5rem 2.5rem 6rem;
  }
`

export const IArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.label`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.pallete.blue.dark};
  font-weight: 700;
`

export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.pallete.grey.light};
  padding: 1.2rem;
  border-radius: 2px;

  &::placeholder {
    color: ${({ theme }) => theme.pallete.grey.dark};
  }

  &:focus {
    border-color: ${({ theme }) => theme.pallete.blue.lighter};
  }
`

export const NIBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.pallete.grey.light};
  padding: 0 1.2rem;

  input {
    border: none;
    text-align: center;
    flex: 1;
  }

  &:has(input:focus),
  &:has(button:focus) {
    border-color: ${({ theme }) => theme.pallete.blue.lighter};
  }
`

export const ControlBtn = styled.button`
  background: none;
  outline: none;
  display: grid;
  place-items: center;
  border: none;
  cursor: pointer;
`

export const Error = styled.span<{ visible: boolean }>`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.pallete.red};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  margin: -1.2rem 0;
`

export const SubmitButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.redLight : theme.pallete.red};
  display: grid;
  place-items: center;
  padding: 2.1rem 4.9rem;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.4s;
  cursor: ${({ disabled }) => (disabled ? "normal" : "pointer")};

  span {
    white-space: nowrap;
    color: ${({ theme }) => theme.pallete.white.pure};
    font-size: 1.8rem;
    font-weight: 700;
  }
`
