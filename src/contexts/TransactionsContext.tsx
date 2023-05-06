import React, { ReactNode, createContext, useEffect, useState } from 'react'

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
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    try {
      const response = await fetch(url)
      const data = await response.json()

      setTransactions(data)
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
