import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  width: 100svw;
  height: 100vh;
  height: 100svh;
  background-color: rgba(0, 0, 0, 0.75);

  &[data-submiting='true'] {
    cursor: progress;
  }
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

  &:not(:disabled):hover {
    color: ${({ theme }) => theme['gray-300']};
    transition: color 150ms;
  }

  &[data-submiting='true']:disabled {
    opacity: 0.6;
    cursor: progress;
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
    &:disabled {
      cursor: not-allowed;
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

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-700']};
      transition: background-color 150ms;
    }

    &[data-submiting='true']:disabled {
      opacity: 0.6;
      cursor: progress;
    }
  }
`

export const TransactionTypeRow = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

type TransTypeBtnProps = {
  variant: 'income' | 'outcome'
}
export const TransationTypeBtn = styled(RadioGroup.Item)<TransTypeBtnProps>`
  gap: 0.5rem;
  padding: 1rem;
  cursor: pointer;

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 150ms;
    background-color: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background-color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};

    > svg {
      color: ${({ theme }) => theme.white};
    }
  }

  &[data-submiting='true']:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`
