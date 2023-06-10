import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { numberFormmater } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{numberFormmater.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{numberFormmater.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{numberFormmater.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
