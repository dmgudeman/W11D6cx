import {useDispatch} from 'react-redux';
import { addItemAC } from '../../store/cart';
import { toggleLikeAC } from '../../store/produce';

function ProduceDetails({ produce }) {
  const cartItem = {};
  
  const dispatch = useDispatch();

  const onClickHandler = e => {
    e.preventDefault();
    dispatch(addItemAC(produce.id))

  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={()=>dispatch(toggleLikeAC(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={onClickHandler}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;