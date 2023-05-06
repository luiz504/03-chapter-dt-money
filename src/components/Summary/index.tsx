import React, { useContext } from 'react'
import { useTheme } from 'styled-components'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { TransactionsContext } from '~/contexts/TransactionsContext'

import { ContainerSummary, SummaryCard } from './styles'

export const Summary: React.FC = () => {
  const theme = useTheme()

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

  return (
    <ContainerSummary>
      <SummaryCard>
        <header>
          <span>Inputs</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outputs</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>$ {summary.total}</strong>
      </SummaryCard>
    </ContainerSummary>
  )
}
