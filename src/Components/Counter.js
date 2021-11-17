import {useSelector,useDispatch} from 'react-redux'
import { increase_count, decrement_count } from '../Redux/counter/counterSlice'

function Counter() {
  const count = useSelector(state=> state.count.value)
  const dispatch = useDispatch()

 const increment =()=>{
   dispatch(increase_count())
 }
  const decrement = () =>{
    dispatch(decrement_count()) 
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={{increment}}>Increase</button>
      <button onClick={{decrement}}>Decrease</button>
    </div>
  );
}

export default Counter;
