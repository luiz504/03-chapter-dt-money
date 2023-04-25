import React from 'react'
import { Header } from '~/components/Header'
import { Summary } from '~/components/Summary'

import { TransctionsContainer, TransctionTable, PriceHighlight } from './styles'
import { SearchForm } from './components/SearchForm'

export const Transactions: React.FC = () => (
  <div>
    <Header />
    <Summary />

    <TransctionsContainer>
      <SearchForm />

      <TransctionTable>
        <tbody>
          <tr>
            <td width="40%">Site Development</td>

            <td>
              <PriceHighlight variant="income">$12000.00</PriceHighlight>
            </td>
            <td>Sell</td>
            <td>24/04/2023</td>
          </tr>
          <tr>
            <td width="40%">Site Development</td>
            <td>
              <PriceHighlight variant="outcome">- $12000.00</PriceHighlight>
            </td>
            <td>Food</td>
            <td>24/04/2023</td>
          </tr>
        </tbody>
      </TransctionTable>
    </TransctionsContainer>
  </div>
)
