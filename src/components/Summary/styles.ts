import styled, { css } from 'styled-components'
import { scrollbarDark } from '~/styles/schrollbars'

export const ContainerSummary = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 2rem;

  margin-top: -5rem;
  overflow: auto;

  ${scrollbarDark}
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;
  margin-bottom: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant, theme }) =>
    variant === 'green' &&
    css`
      background-color: ${theme['green-700']};
    `}
`
