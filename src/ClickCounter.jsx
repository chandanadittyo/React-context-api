// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
}
