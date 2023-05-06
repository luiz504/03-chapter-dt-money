import styled from 'styled-components'

export const TransctionsContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransctionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-700']};
    color: ${({ theme }) => theme['gray-300']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  .td-category,
  .td-date {
    svg {
      display: none;
    }
  }

  @media (max-width: 768px) {
    tr {
      background: ${({ theme }) => theme['gray-700']};

      padding: 1rem;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 0.5rem;

      .td-description {
        width: auto;
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }

      td {
        padding: 0;
        line-height: 1.6;
      }

      .td-price {
        font-weight: 700;
        font-size: 1.425rem;
        margin-bottom: 0.5rem;
      }

      .td-category,
      .td-date {
        color: ${({ theme }) => theme['gray-500']};

        > svg {
          display: initial;
        }
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .td-date {
        justify-content: flex-end;
      }

      display: grid;
      grid-template-areas:
        'desc desc'
        'price price'
        'cat date';
    }
  }
`
type PriceHighlightProps = {
  variant: 'income' | 'outcome'
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`
