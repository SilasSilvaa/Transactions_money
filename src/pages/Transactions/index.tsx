import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { dateFomatter, numberFormmater } from "../../utils/formatter";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLigth variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {numberFormmater.format(transaction.price)}
                  </PriceHighLigth>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFomatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
