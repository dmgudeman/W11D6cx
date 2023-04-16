import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemAC, updateItemCountAC } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('item in CartITEM useEffect', item.name)
    setCount(item.count);
    
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e)=>{
            setCount(e.target.value)
            dispatch(updateItemCountAC(item.id, Number(count)))
          }}
          onBlur={(e)=>{
          
           
            dispatch(updateItemCountAC(item.id, Number(count)))
          }}

        />
        <button
          className="cart-item-button"
          onClick={()=>dispatch(updateItemCountAC(item.id, item.count+1))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={()=>dispatch(updateItemCountAC(item.id, item.count-1))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={()=> dispatch(removeItemAC(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;