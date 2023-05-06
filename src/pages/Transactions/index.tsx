import { Header } from '~/components/Header'
import { Summary } from '~/components/Summary'
import { SearchForm } from './components/SearchForm'

import { TransctionsContainer, TransctionTable, PriceHighlight } from './styles'

import { dateFormatter, priceFormatter } from '~/utils/formatters'

import { useTransactionsContext } from '~/contexts/TransactionsContext'
import { CalendarBlank, TagSimple } from 'phosphor-react'

export const Transactions = () => {
  const transactions = useTransactionsContext((c) => c.transactions)

  return (
    <div>
      <Header />
      <Summary />

      <TransctionsContainer>
        <SearchForm />

        <TransctionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td
                  className="td-description"
                  width="40%"
                  style={{ gridArea: 'desc' }}
                >
                  {transaction.description}
                </td>
                <td className="td-price" style={{ gridArea: 'price' }}>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && `- `}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td className="td-category" style={{ gridArea: 'cat' }}>
                  <TagSimple />
                  {transaction.category}
                </td>
                <td className="td-date" style={{ gridArea: 'date' }}>
                  <CalendarBlank />
                  {dateFormatter.format(new Date(transaction.created_at))}
                </td>
              </tr>
            ))}
          </tbody>
        </TransctionTable>
      </TransctionsContainer>
    </div>
  )
}
