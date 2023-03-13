import React, { useEffect, createContext } from "react";
import useRetrieveFromLocalStorage from "../hooks/useRetrieveFromLocalStorage";
import { type PriceRules, type PriceRule } from "../types";

interface PricingRulesProviderProps {
  children: JSX.Element;
}

interface PricingRulesContextProps {
  pricingRules: PriceRules;
  setPricingRules: (item: PriceRule) => void;
}

export const PricingRulesContext = createContext<PricingRulesContextProps>({
  pricingRules: [],
  setPricingRules: () => {},
});

const PricingRulesProvider = ({
  children,
}: PricingRulesProviderProps): JSX.Element => {
  const [pricingRules, setPricingRules] = useRetrieveFromLocalStorage("pricingRules");

  useEffect(() => {
    if (pricingRules.length > 0)
      localStorage.setItem("pricingRules", JSON.stringify(pricingRules));
  }, [pricingRules]);

  return (
    <PricingRulesContext.Provider value={{ pricingRules, setPricingRules }}>
      {children}
    </PricingRulesContext.Provider>
  );
};

export default PricingRulesProvider;
