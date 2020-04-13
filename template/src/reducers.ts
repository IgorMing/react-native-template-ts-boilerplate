import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import auth from './modules/auth/duck';

const rootReducer = combineReducers({
  auth
});

type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
