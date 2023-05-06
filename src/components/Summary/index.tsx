import { useTheme } from 'styled-components'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { priceFormatter } from '~/utils/formatters'

import { ContainerSummary, SummaryCard } from './styles'

import { useSummaryController } from './controller'

export const Summary = () => {
  const theme = useTheme()
  const { summary } = useSummaryController()

  return (
    <ContainerSummary>
      <SummaryCard>
        <header>
          <span>Inputs</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outputs</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </ContainerSummary>
  )
}
