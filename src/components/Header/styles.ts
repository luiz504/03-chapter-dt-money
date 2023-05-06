import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransationButton = styled.button`
  cursor: pointer;
  height: 50px;
  border: 0;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0.25rem 1.125rem;
  border-radius: 6px;
  > svg {
    display: none;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 150ms;
  }

  @media (max-width: 768px) {
    padding: 0.25rem 1rem;
    > svg {
      display: initial;
    }
    > span {
      display: none;
    }
  }
`
