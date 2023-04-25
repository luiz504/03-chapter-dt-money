import React from 'react'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { ContainerSummary, SummaryCard } from './styles'
import { useTheme } from 'styled-components'

export const Summary: React.FC = () => {
  const theme = useTheme()
  return (
    <ContainerSummary>
      <SummaryCard>
        <header>
          <span>Inputs</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outputs</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
    </ContainerSummary>
  )
}
