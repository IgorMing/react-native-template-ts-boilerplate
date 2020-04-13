import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type Dispatch = ThunkDispatch<{}, {}, AnyAction>;
