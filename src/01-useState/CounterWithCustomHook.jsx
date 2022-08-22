import { useCounter } from '../hooks/useCounter';


const value = 1;    /** Value to increment or decrement in each call */

export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter();
  return (
    <>
        <h1> Counter with Hook: {counter}</h1>

        <br />

        <button className="btn btn-primary" onClick={() => increment(value)}>+{value}</button>
        <button className="btn btn-primary" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement(value)}>-{value}</button>

    </>
  )
}
