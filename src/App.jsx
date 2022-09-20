import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispath = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispath(increment())}>
          count is {counter}
        </button>
        <p>
        </p>
      </div>
    </div>
  )
}

export default App
