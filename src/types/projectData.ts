import { type LearnMore } from "./learnMore";
export type ProjectData = {
    name: string;
    description: string;
    demo: string | null;
    image: string;
    learnMore: LearnMore | null;
    gitHub: string;
    categories: string[];
}