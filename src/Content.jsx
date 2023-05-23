// eslint-disable-next-line no-unused-vars
import ThemeContext from "./Context/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

// eslint-disable-next-line react/prop-types
export default function Content() {
  return (
    <div>
      <h2>This is Content</h2>

      <Counter>
        {(counter, incrementCount) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <HoverCounter
                count={counter}
                incrementCount={incrementCount}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}
