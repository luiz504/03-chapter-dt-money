import { Header } from '~/components/Header'
import { Summary } from '~/components/Summary'
import { SearchForm } from './components/SearchForm'

import { TransctionsContainer, TransctionTable, PriceHighlight } from './styles'

import { dateFormatter, priceFormatter } from '~/utils/formatters'

import { useTransactionsContext } from '~/contexts/TransactionsContext'

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
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && `- `}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>
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
