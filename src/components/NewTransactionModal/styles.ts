import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  width: 100svw;
  height: 100vh;
  height: 100svh;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme['gray-800']};
`

export const CloseBtn = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 2px;

  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-500']};
  &:hover {
    color: ${({ theme }) => theme['gray-300']};
    transition: color 150ms;
  }
`

export const Form = styled.form`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  gap: 1rem;

  > input {
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 58px;
    margin-top: 1.5rem;

    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme['green-700']};
      transition: background-color 150ms;
    }
  }
`
