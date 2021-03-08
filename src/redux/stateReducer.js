import {SHOW_DATA, ADD_DATA, SHOW_PERSONS_LIST, IS_DISABLED, IS_FORME, FILTER_PERSONS_LIST, ON_SEARCH, } from "../data/constants";

const initialState = {
  data: [],
  detailData: [],
  isDisabled: false,
  isForm: false,
  onSearchText: ""
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SHOW_DATA:
      return { ...state, data: [...action.data] };

    case ADD_DATA:
      return {...state, data: [action.data, ...state.data]}

    case SHOW_PERSONS_LIST:
      return { ...state, detailData: action.data };

    case FILTER_PERSONS_LIST:
      const searchData = [...state.data].filter(item => {
          return item.firstName.toLowerCase().includes(action.value.toLowerCase())
          || item.lastName.toLowerCase().includes(action.value.toLowerCase())
          || item.email.toLowerCase().includes(action.value.toLowerCase())
          || item.phone.includes(action.value.toLowerCase())
      })
      return {...state, data: [...searchData]}

    case IS_DISABLED:
      return { ...state, isDisabled: action.value };

    case IS_FORME:
      return { ...state, isForm: !state.isForm };

    case ON_SEARCH:
      return { ...state, onSearchText: action.text };

    default:
      return state;
  }
};
