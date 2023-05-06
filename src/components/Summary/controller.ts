import { useMemo } from 'react'

import { useTransactionsContext } from '~/contexts/TransactionsContext'

export const useSummaryController = () => {
  const transactions = useTransactionsContext((c) => c.transactions)

  const summary = useMemo(
    () =>
      transactions.reduce(
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
      ),
    [transactions],
  )

  return { summary }
}
