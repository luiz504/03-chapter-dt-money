import { useContext } from 'react'
import { TransactionsContext } from '~/contexts/TransactionsContext'

export const useSummaryController = () => {
  const { transactions } = useContext(TransactionsContext)

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
