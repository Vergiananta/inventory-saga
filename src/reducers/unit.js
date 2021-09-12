import {
  FIND_ALL_UNIT, FIND_ALL_UNIT_SUCCESS, FIND_ALL_UNIT_FAILURE,
  FIND_UNIT_BY_ID, FIND_UNIT_BY_ID_SUCCESS, FIND_UNIT_BY_ID_FAILURE,
  REMOVE_UNIT_BY_ID, REMOVE_UNIT_BY_ID_SUCCESS, REMOVE_UNIT_BY_ID_FAILURE,
  SAVE_UNIT, SAVE_UNIT_SUCCESS, SAVE_UNIT_FAILURE
} from "../constants/actions";

const initialState = {
  data: null,
  loading: false,
  error: null
};

export function saveUnit(state = { ...initialState }, action) {
  switch (action.type) {
    case SAVE_UNIT:
      return {
        ...state,
        data: null,
        loading: true
      };
    case SAVE_UNIT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case SAVE_UNIT_FAILURE:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    default:
      return {
        ...state,
        data: null
      };
  }
}

export function removeUnitById(state = { ...initialState, data: false }, action) {
  switch (action.type) {
    case REMOVE_UNIT_BY_ID:
      return {
        ...state,
        data: false,
        loading: true
      };
    case REMOVE_UNIT_BY_ID_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case REMOVE_UNIT_BY_ID_FAILURE:
      return {
        data: false,
        loading: false,
        error: action.error
      };
    default:
      return {
        ...state,
        data: false
      };
  }
}

export function findUnitById(state = initialState, action) {
  switch (action.type) {
    case FIND_UNIT_BY_ID:
      return {
        ...state,
        data: null,
        loading: true
      };
    case FIND_UNIT_BY_ID_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_UNIT_BY_ID_FAILURE:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function findAllUnit(state = initialState, action) {
  console.log("action ", action.type);
  switch (action.type) {
    case FIND_ALL_UNIT:
      return {
        ...state,
        loading: true
      };
    case FIND_ALL_UNIT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_ALL_UNIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
