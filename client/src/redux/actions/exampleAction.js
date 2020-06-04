import { EXAMPLE_ACTION } from './types';

// action functions

export const example_function = (data) => async dispatch => {
  dispatch({
    type: EXAMPLE_ACTION,
    payload: data
  })
}