import { createContext } from "react";
import { type LearnMore } from "../types/learnMore";
/**
 * the context to globally manage the popup component.
 */
export type PopupContextValue = {
    popup: LearnMore | null;
    setPopup: React.Dispatch<React.SetStateAction<LearnMore | null>>;
};

export const PopupContext = createContext<PopupContextValue | null>(null);