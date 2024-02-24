import {produce} from "immer";

const initialState = {
    items: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = state.items.find(item => item.id == action.payload.id);
            return product ? state : produce(state, copy => {
                copy.items.push(action.payload);
            })
            
        case 'REMOVE_FROM_CART':
            return produce(state, copy => {
                copy.items = copy.items.filter(item => item.id !== action.payload)
            })
        case 'PLUS-QUANTITY':
          return produce(state, copy => {
            const item = copy.items.find((i)=>i.id === parseInt(action.payload))
            if (item) {
              item.quantity ? item.quantity = item.quantity + 1 : item.quantity = 2
            }
          })
        case 'MINUS-QUANTITY':
          return produce(state, copy => {
            const item = copy.items.find((i)=> i.id === parseInt(action.payload)) 
            if (item) {
              item.quantity && item.quantity > 1 ? item.quantity = item.quantity - 1 : null
            }
          })
        default:
            return state;
    }
};

export default Reducer;