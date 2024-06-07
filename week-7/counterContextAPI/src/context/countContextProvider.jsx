import { CounterContext } from "./counterContext";
import { useState } from "react";

export default function CounterContextProvider({ children }) {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function decrementCounter() {
        setCounter(counter - 1);
    }

    return (
        <CounterContext.Provider
            value={{ counter, incrementCounter, decrementCounter }}
        >
            {children}
        </CounterContext.Provider>
    );
}

CounterContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
