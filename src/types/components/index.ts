export interface IButton {
  text:string;
  onClick?:()=>void;
  mode?: ButtonMode;
}

export type ButtonMode = "light" | "dark" | "default"; 