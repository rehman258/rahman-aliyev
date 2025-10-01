export interface IButton {
  text:string,
  mode?: ButtonMode,
}

export type ButtonMode = "light" | "dark" | "default"; 