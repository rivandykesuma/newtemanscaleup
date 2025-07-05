import React from "react";

interface Props {
  text: string;
  className?: string;
  onClick?(): void;
}

function ButtonComponent(prop: Props) {
  return (
    <>
      <button
        className={`rounded-full shadow-lg border-2 ${prop.className}`}
        onClick={prop.onClick}
      >
        {prop.text}
      </button>
    </>
  );
}

export default ButtonComponent;
