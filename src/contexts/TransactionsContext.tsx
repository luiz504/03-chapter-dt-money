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
}

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)
const apiBaseUrl = 'http://localhost:3000'

export const TransactionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
