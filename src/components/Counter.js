import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store//index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandlerBy5 = () => {
    dispatch(counterActions.incrementBy5(5))
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decrementHandlerBy5 = () => {
    dispatch(counterActions.decrementBy5(5)) // {type: SOME_UNIQUE_IDENTIFIRE, payload: value(5)}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.togglehandler());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerBy5}>IncrementBy_5</button>
        <button onClick={decrementHandlerBy5}>DecrementBy_5</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
