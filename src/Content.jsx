// eslint-disable-next-line no-unused-vars
import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

const Content = () => {
  return (
    <div>
      <h2>This is Content</h2>

      <Counter>
        {(counter, incrementCount) => {
          return (
            <HoverCounter count={counter} incrementCount={incrementCount} />
          );
        }}
      </Counter>
    </div>
  );
};

export default Content;
