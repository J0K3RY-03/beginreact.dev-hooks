import { useReducer } from 'react';

const REDUCER_ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}

const reducer = (state, {action, value = 1}) => {
  // 🦁 Ici il faut que tu return la valeur incrémenté de 1

  switch (action) {
    case REDUCER_ACTION.INCREMENT:
      return state + value;
    case REDUCER_ACTION.DECREMENT:
      return state - value;
    case REDUCER_ACTION.RESET:
      return 0;
    default:
      throw new Error('Action not posib');
  }
};

const Counter = () => {
  // 🦁 Remplace ceci par un useReducer avec `reducer` en paramètre et `0` en initialState
  const [count, dispatch] = useReducer(reducer, 0, )

  return (
    <div>
      {/* 🦁 Ajoute un `onClick` qui appel la fonction dispatch de notre reducer */}
      <button onClick={() => dispatch({action : REDUCER_ACTION.INCREMENT, value : 5 })}>-5</button>
      <button onClick={() => dispatch({action : REDUCER_ACTION.DECREMENT })}>-</button>
      <button>{count}</button>
      <button onClick={() => dispatch({action : REDUCER_ACTION.INCREMENT })}>+</button>
      <button onClick={() => dispatch({action : REDUCER_ACTION.INCREMENT, value : 5 })}>+5</button>
      <br/>
      <button onClick={() => dispatch({action : REDUCER_ACTION.RESET })}>Reset</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
