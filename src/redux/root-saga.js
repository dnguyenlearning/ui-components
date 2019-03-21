import { fork, all } from "redux-saga/effects";
import {sagas as theme} from "./utils/theme";

const allSagas = [
	...theme,
];

// start all sagas in parallel
export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
