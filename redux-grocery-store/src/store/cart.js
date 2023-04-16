const ADD_ITEM = "cart/ADDITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const UPDATE_ITEM_COUNT = "cart/UPDATE_ITEM_COUNT";
const EMPTY_CART = 'cart/EMPTY_CART';

// action creator
export const addItemAC = (id) => ({
    type: ADD_ITEM,
    id,
});
// action creator
export const removeItemAC = (id) => ({ type: REMOVE_ITEM, id });

// action creator
export const updateItemCountAC = (itemId, count) => {
  if (count < 1) return removeItemAC(itemId);
   return { type: UPDATE_ITEM_COUNT,
    itemId,
    count
   }
};
//action creator
export const emptyCartAC = () => {
  // console.log('emptyCartAC fired')
  return {type: EMPTY_CART}
}

// selector 

export const getAllItemsSEL = (state) => {
  const arr = Object.values(state.cart).map( item => {
   return {[item.id] : {id:item.id, name:state.produce[item.id].name, count: item.count}}
    // console.log('IN getALLItems', {[item.id]: {id:item.id, name: state.produce[item.id].name, count: item.count}})
    
  })
   return arr
}


const cartReducer = (state = {}, action) => {
    const newCart = { ...state };
    // console.log('newCart in cart reducer', newCart)
    // console.log('action in cartreducer', action)
 
    switch (action.type) {
        case ADD_ITEM:
            let x = { [action.id]: { id: action.id, count: 1 } };
            return { ...newCart, ...x };
        case UPDATE_ITEM_COUNT:
           let y = {[action.itemId]:{id:action.itemId, count:action.count}}
           return {...newCart,...y }
        case REMOVE_ITEM:
            delete newCart[action.id];
            return newCart;
        case EMPTY_CART:
    
          return {};
        default:
            return state;
    }
};

export default cartReducer;
