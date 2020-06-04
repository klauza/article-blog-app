import { EXAMPLE_ACTION } from '../actions/types';

const initialState = {
  payload_name: {
    var1: false,
    var2: true
  }
  
}

export default (state = initialState, action) => {
  switch(action.type){
    
    case EXAMPLE_ACTION:
      return{
        ...state,
        payload_name: action.payload
      }

    default:
      return state;
  }
}