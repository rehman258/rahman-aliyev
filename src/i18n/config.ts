export type Locale = "az" | "en" | "de" ;

export const locales = ["az", "en", "de"] as const;
export const defaultLocale: Locale = "az";