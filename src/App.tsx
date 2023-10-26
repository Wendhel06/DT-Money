import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Transaction } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  )
}
