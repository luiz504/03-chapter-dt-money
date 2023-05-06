import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '~/lib/axios'

export type Transaction = {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: Date
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export const TransactionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    try {
      const response = await api.get('/transactions', { params: { q: query } })

      setTransactions(response.data)
    } catch (err) {
      console.error('error 😢', err)//eslint-disable-line
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
