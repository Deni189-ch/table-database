import { SHOW_DATA, SHOW_PERSONS_LIST, IS_DISABLED, FILTER_PERSONS_LIST, ADD_DATA, IS_FORME, ON_SEARCH } from "../data/constants";

import { datasAPI } from "../api/api";

export function showPersonList(data) {
  return (dispatch) => {
    dispatch({ type: SHOW_PERSONS_LIST, data });
  };
}

export function addData(data) {  
  return (dispatch) => {
    dispatch({ type: ADD_DATA, data });
    dispatch(isFormToggle())
  };
}

export function isFormToggle() {    
  return (dispatch) => {
    dispatch({ type: IS_FORME});
  };
}

export function onSearchPerson(value) {
  return (dispatch) => {
    dispatch({ type: FILTER_PERSONS_LIST, value });
  };
}

export function onSearchValue(text) {
  return (dispatch) => {
    dispatch({ type: ON_SEARCH, text });
  };
}

export function showIsDisabled(value) {
  return (dispatch) => {
    dispatch({ type: IS_DISABLED, value });
  };
}

export function hideIsDisabled(value) {
  return (dispatch) => {
    dispatch({ type: IS_DISABLED, value });
  };
}


export const getDatas = (size) => async (dispatch) => {
  dispatch(showIsDisabled(true))  
  try {
    const response = await datasAPI.getDatas(size)
     if (response.status === 200) {
       const data = response.data
        dispatch({type: SHOW_DATA, data })
        dispatch(hideIsDisabled(false))
     }
  } catch (error) {
      alert('Ошибка при отправки запроса, повторите попытку позже.')
      dispatch(hideIsDisabled(false))
  } 
};
