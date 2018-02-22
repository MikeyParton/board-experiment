import { call, all, takeEvery } from 'redux-saga/effects'
import history from 'app/Routes/history'
import {
  getCardDetailRequest,
  updateCardRequest,
  createChecklistRequest,
  updateChecklistRequest,
  createChecklistItemRequest
} from './cardDetailRequests'

export function* syncUrl({ payload }) {
  const { url } = payload.card
  yield call(history.push, url)
}

export default function* rootSaga() {
  yield all([
    getCardDetailRequest.saga(),
    updateCardRequest.saga(),
    createChecklistRequest.saga(),
    updateChecklistRequest.saga(),
    createChecklistItemRequest.saga(),
    takeEvery(updateCardRequest.constants.success, syncUrl)
  ])
}
