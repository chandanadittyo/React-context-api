// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function HoverCounter({ count, incrementCount, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#FFFFFF" } : null;
  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>
    </div>
  );
}
