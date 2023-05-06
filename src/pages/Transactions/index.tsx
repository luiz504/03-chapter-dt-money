import { Header } from '~/components/Header'
import { Summary } from '~/components/Summary'

import { TransctionsContainer, TransctionTable, PriceHighlight } from './styles'
import { SearchForm } from './components/SearchForm'
import { useEffect, useState } from 'react'

const apiBaseUrl = 'http://localhost:3000'

type Transaction = {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: Date
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    try {
      const response = await fetch(`${apiBaseUrl}/transactions`)
      const data = await response.json()

      setTransactions(data)
    } catch (err) {
      console.error('error', err)//eslint-disable-line
    }
  }

  useEffect(() => {
    loadTransactions()
  }, [])

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
                    ${transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.created_at.toString()}</td>
              </tr>
            ))}
          </tbody>
        </TransctionTable>
      </TransctionsContainer>
    </div>
  )
}
