import React from 'react'

import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export const SearchForm: React.FC = () => (
  <SearchFormContainer>
    <input placeholder="Search for a transaction" />
    <button type="button">
      <MagnifyingGlass size={20} />
      Search
    </button>
  </SearchFormContainer>
)
