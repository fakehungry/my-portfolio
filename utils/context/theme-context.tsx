import { createContext } from "react";

type ThemeContext = {
  theme: string;
};

const defaultContext: ThemeContext = {
  theme: "ligth",
};

export const ThemeContext = createContext<ThemeContext>(defaultContext);
