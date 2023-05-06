import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MagnifyingGlass } from 'phosphor-react'

import { SearchFormContainer } from './styles'

import { TransactionsContext } from '~/contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchTransactions } = useContext(TransactionsContext)

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input placeholder="Search for a transaction" {...register('query')} />
      <button
        type="submit"
        disabled={isSubmitting}
        data-submiting={isSubmitting ? 'true' : 'false'}
      >
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}
