import React from "react";
import "./scss/index.scss";
import { IButton } from "@/src/types/components";
export default function Button({
  text,
}:IButton) {
  return (
    <button className='button'>
      {
        text
      }
    </button>
  );
}
