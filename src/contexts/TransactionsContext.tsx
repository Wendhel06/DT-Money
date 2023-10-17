import { createContext, ReactNode, useState, useEffect } from "react";

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
}

export const TransactionContext = createContext({} as TransactionsContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<TransactionType[]>([]);

  async function loadTransaction() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransaction(data);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
