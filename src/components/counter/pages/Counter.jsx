import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './CounterSlice';

 const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>{counter}

    </div>
  )
}

export default Counter