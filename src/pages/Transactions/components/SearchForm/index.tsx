import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MagnifyingGlass } from 'phosphor-react'

import { SearchFormContainer } from './styles'

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

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('data', data) //eslint-disable-line 
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
