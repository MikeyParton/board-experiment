import { all, fork } from 'redux-saga/effects'
import loginSagas from 'features/Login/loginSagas'
import boardsSagas from 'features/Boards/boardsSagas'
import cardsSagas from 'features/Cards/cardsSagas'
import boardDetailSagas from 'features/BoardDetail/boardDetailSagas'
import labelSagas from 'features/Labels/labelsSagas'
import newListSagas from 'features/BoardDetail/NewList/newListSagas'
import cardDetailSagas from 'features/CardDetail/cardDetailSagas'
import optionsSagas from 'features/Options/optionsSagas'
import timersSagas from 'features/Timers/timersSagas'


export default function* rootSaga() {
  yield all([
    fork(loginSagas),
    fork(boardsSagas),
    fork(cardsSagas),
    fork(boardDetailSagas),
    fork(labelSagas),
    fork(newListSagas),
    fork(cardDetailSagas),
    fork(optionsSagas),
    fork(timersSagas)
  ])
}
