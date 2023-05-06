import React, { ReactNode, useEffect, useState } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'
import { api } from '~/lib/axios'

export type Transaction = {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: Date
}

type CreateTransactionDTO = {
  description: string
  category: string
  type: 'income' | 'outcome'
  price: number
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionDTO) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export const TransactionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(data: CreateTransactionDTO) {
    const { description, price, category, type } = data

    const response = await api.post<Transaction>('/transactions', {
      description,
      price,
      category,
      type,
      created_at: new Date().toISOString(),
    })
    setTransactions((old) => [response.data, ...old])
  }

  async function fetchTransactions(query?: string) {
    try {
      const response = await api.get('/transactions', {
        params: { _sort: 'created_at', _order: 'desc', q: query },
      })

      setTransactions(response.data)
    } catch (err) {
      console.error('error 😢', err)//eslint-disable-line
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactionsContext<Selected>(
  selector: (contenxt: TransactionsContextType) => Selected,
) {
  return useContextSelector(TransactionsContext, selector)
}
