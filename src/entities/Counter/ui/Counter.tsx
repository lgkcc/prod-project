import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from 'entities/Counter';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());
  return (
    <>
      <h1 data-testid="value">
        {value}
      </h1>
      <div>
        <Button onClick={increment} data-testid="increment">INCREMENT</Button>
        <Button onClick={decrement} data-testid="decrement">DECREMENT</Button>
      </div>
    </>
  );
};

export default Counter;
