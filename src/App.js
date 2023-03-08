import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/actions/CounterAction';

function App() {
  const count = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counterReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: "INCREMENT"}),
//     decrement: () => dispatch({type: "DECREMENT"})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps )(App); //

export default App; //
