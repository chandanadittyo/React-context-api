// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

// eslint-disable-next-line react/prop-types
export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  return (
    <div>
      <h2>This is Content</h2>

      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
