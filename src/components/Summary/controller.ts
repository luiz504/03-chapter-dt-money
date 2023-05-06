import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '~/contexts/TransactionsContext'

export const useSummaryController = () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (c) => c.transactions,
  )

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
      }
      if (transaction.type === 'outcome') {
        acc.outcome += transaction.price
      }
      acc.total = acc.income - acc.outcome
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return { summary }
}
