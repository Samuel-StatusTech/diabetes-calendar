import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
  max-width: 380px;
  background-color: #fff;
  border-radius: 40px 40px 80px 80px;
  padding: 25px 50px 70px;
  position: relative;
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

export const SubmitButton = styled.button`
  position: absolute;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.pallete.red};
  display: grid;
  place-items: center;
  padding: 2.1rem 4.9rem;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  span {
    white-space: nowrap;
    color: ${({ theme }) => theme.pallete.white.pure};
    font-size: 1.8rem;
    font-weight: 700;
  }
`
