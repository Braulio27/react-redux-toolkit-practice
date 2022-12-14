import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        <h1>Vite + React</h1>
        <p>count is {counter}</p>
        <div className="card">
          <button onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button onClick={() => dispatch(incrementBy(2))}>
            Increment by 2
          </button>
          <p>
          </p>
        </div>
      </header>
    </div>
  )
}

export default App
