import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { useContext } from "react";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transaction() {
  const { transactions } = useContext(TransactionContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transacao) => {
              return (
                <tr key={transacao.id}>
                  <td width="50%">{transacao.description}</td>
                  <td>
                    <PriceHighLight variant={transacao.type}>
                      {transacao.type === "outcome" && "- "}
                      {priceFormatter.format(transacao.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transacao.category}</td>
                  <td>{dateFormatter.format(new Date(transacao.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
