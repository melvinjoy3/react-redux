import {useSelector,useDispatch} from 'react-redux'
import randomColor from 'randomcolor';
import {change_Color} from '../Redux/Color/colorSlice'
function Aside() {
  const color = useSelector(state=> state.color.value)
  const dispatch = useDispatch()
  const handleColor = () =>{
dispatch(change_Color({
  color:randomColor()
}))
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={handleColor}>Change Color</button>
    </div>
  );
}

export default Aside;
