import { all } from 'redux-saga/effects';
import { watchFindAllUnit, watchFindUnitById, watchRemoveUnitById, watchSaveUnit } from "./unit";

export default function* rootSaga() {
  yield all([
    watchFindAllUnit(), watchFindUnitById(), watchRemoveUnitById(), watchSaveUnit()
  ])
}
