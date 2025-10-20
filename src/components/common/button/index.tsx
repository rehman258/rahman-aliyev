import React from "react";
import "./scss/index.scss";
import { IButton } from "@/src/types/components";
export default function Button({
  text,
  onClick
}:IButton) {
  return (
    <button
      className='button'
      onClick={onClick}>
      {
        text
      }
    </button>
  );
}
