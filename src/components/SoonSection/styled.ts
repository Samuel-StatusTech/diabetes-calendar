import styled from "styled-components"

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 12rem;
  margin-bottom: 11rem;
`

export const TitleBox = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 2.4rem;
  position: relative;
  max-width: 77rem;
  margin: auto;

  &::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 0.8rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.pallete.red};
  }

  &::after {
    bottom: 0;
  }
`

export const SectionTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 800;
  text-align: center;
`

export const DownloadArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const DownloadTitle = SectionTitle

export const DownloadBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`

export const DownloadBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.pallete.white.pure};
  border-radius: 1.6rem;
`
