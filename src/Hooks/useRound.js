import { useContext } from "react";
import RoundContext from "../Context/RoundContext";

export const useRound = () => {
  return useContext(RoundContext);
};
