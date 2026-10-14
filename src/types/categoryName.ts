import { categoryNames } from "../consts/categoryNames"
//create a type based on the array of categoryNames.
export type CategoryName = typeof categoryNames[number];
