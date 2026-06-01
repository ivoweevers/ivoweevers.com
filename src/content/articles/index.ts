import type { ComponentType } from "react";

import { WhyIWrotePocketWinners } from "./WhyIWrotePocketWinners";
import { RyanairAppProfitEngine } from "./RyanairAppProfitEngine";
import { BoostingConversionByRemovingOneWord } from "./BoostingConversionByRemovingOneWord";
import { WhySpotifyNeverLetsTheMusicStop } from "./WhySpotifyNeverLetsTheMusicStop";

export const articleBodyBySlug: Record<string, ComponentType> = {
  "why-i-wrote-pocket-winners": WhyIWrotePocketWinners,
  "ryanair-app-profit-engine": RyanairAppProfitEngine,
  "boosting-conversion-by-removing-one-word": BoostingConversionByRemovingOneWord,
  "why-spotify-never-lets-the-music-stop": WhySpotifyNeverLetsTheMusicStop,
};
