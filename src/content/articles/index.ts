import type { ComponentType } from "react";

import { WhyIWrotePocketWinners } from "./WhyIWrotePocketWinners";
import { RyanairAppProfitEngine } from "./RyanairAppProfitEngine";
import { BoostingConversionByRemovingOneWord } from "./BoostingConversionByRemovingOneWord";

export const articleBodyBySlug: Record<string, ComponentType> = {
  "why-i-wrote-pocket-winners": WhyIWrotePocketWinners,
  "ryanair-app-profit-engine": RyanairAppProfitEngine,
  "boosting-conversion-by-removing-one-word": BoostingConversionByRemovingOneWord,
};
