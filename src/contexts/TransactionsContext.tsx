import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../lib/axios";

interface TransactionType {
  id: number;
  description: string;
  createdAt: string;
  category: string;
  type: "income" | "outcome";
  price: number;
}

interface TransactionsContextType {
  transactions: TransactionType[];
  fetchTransactions: (query?: string) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionsContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query,
      },
    });

    setTransaction(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
