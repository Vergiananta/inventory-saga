import { put, takeLatest } from 'redux-saga/effects';
import {
  FIND_ALL_UNIT, FIND_ALL_UNIT_SUCCESS, FIND_ALL_UNIT_FAILURE,
  FIND_UNIT_BY_ID, FIND_UNIT_BY_ID_SUCCESS, FIND_UNIT_BY_ID_FAILURE,
  REMOVE_UNIT_BY_ID, REMOVE_UNIT_BY_ID_SUCCESS, REMOVE_UNIT_BY_ID_FAILURE,
  SAVE_UNIT, SAVE_UNIT_SUCCESS, SAVE_UNIT_FAILURE
} from "../constants/actions";
import axios from '../configs/api';

function* saveUnit(action) {
  let model = action.model;
  let method = 'POST', url = '/units';
  if (model.id) {
    method = 'PUT';
    url += `/${model.id}`;
  }

  let result = yield axios({
    url: url,
    method: method,
    data: model
  })
    .then(data => {
      return {
        type: SAVE_UNIT_SUCCESS,
        data: data
      };
    })
    .catch(e => {
      return {
        type: SAVE_UNIT_FAILURE,
        error: e
      };
    });

  yield put(result);
}
function* removeUnitById(action) {
  let result = yield axios.delete(`/units/${action.id}`)
    .then(data => {
      return {
        type: REMOVE_UNIT_BY_ID_SUCCESS,
        data: data
      };
    })
    .catch(e => {
      return {
        type: REMOVE_UNIT_BY_ID_FAILURE,
        error: e
      };
    });

  yield put(result);
}

function* findUnitById(action) {
  let result = yield axios.get(`/units/${action.id}`)
    .then(data => {
      return {
        type: FIND_UNIT_BY_ID_SUCCESS,
        data: data
      };
    })
    .catch(e => {
      return {
        type: FIND_UNIT_BY_ID_FAILURE,
        error: e
      };
    });

  yield put(result);
}

function* findAllUnit() {
  let result = yield axios.get('/units')
    .then(data => {
      return {
        type: FIND_ALL_UNIT_SUCCESS,
        data: data.list
      };
    })
    .catch(e => {
      return {
        type: FIND_ALL_UNIT_FAILURE,
        error: e
      };
    });

  yield put(result);
}

export function* watchSaveUnit() {
  yield takeLatest(SAVE_UNIT, saveUnit);
}

export function* watchRemoveUnitById() {
  yield takeLatest(REMOVE_UNIT_BY_ID, removeUnitById);
}

export function* watchFindUnitById() {
  yield takeLatest(FIND_UNIT_BY_ID, findUnitById);
}

export function* watchFindAllUnit() {
  yield takeLatest(FIND_ALL_UNIT, findAllUnit);
}
