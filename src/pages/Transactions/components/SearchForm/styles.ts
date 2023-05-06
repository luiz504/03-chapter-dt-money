import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  > input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    background-color: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};

    font-weight: bold;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-300']};
      color: ${({ theme }) => theme.white};

      transition: background-color 150ms, border-color 150ms, color 150ms;
    }
    &[data-submiting='true']:disabled {
      opacity: 0.6;
      cursor: progress;
    }

    @media (max-width: 526px) {
      > span {
        display: none;
      }
    }
  }
`
