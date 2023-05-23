// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function HoverCounter({
  // eslint-disable-next-line react/prop-types
  count,
  // eslint-disable-next-line react/prop-types
  incrementCount,
  // eslint-disable-next-line react/prop-types
  theme,
  // eslint-disable-next-line react/prop-types
  switchTheme,
}) {
  const style =
    theme === "dark" ? { backgroundColor: "#000000", color: "#FFFFFF" } : null;
  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>

      <button onClick={switchTheme}>Change Theme</button>
    </div>
  );
}
