import AsyncStorage from "@react-native-community/async-storage";

import {
  Actions,
  AuthModuleState,
  AuthModuleAction,
  ASYNC_STORAGE_KEYS,
} from "./types";
import { Dispatch } from "~/commons/types";

const AUTH_KEYS: ASYNC_STORAGE_KEYS = {
  TOKEN: "@TOKEN",
};

const INITIAL_STATE: AuthModuleState = {
  isSignedin: null,
  isSigningOut: false,
};

// Reducer
export default function reducer(
  state = INITIAL_STATE,
  action: AuthModuleAction
) {
  switch (action.type) {
    case Actions.SIGNIN:
      return {
        ...state,
        isSignedin: true,
        isSigningOut: false,
      };
    case Actions.SIGNOUT:
      return {
        ...state,
        isSignedin: false,
        isSigningOut: true,
      };
    default:
      return state;
  }
}

// Action Creators
export function signin() {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.setItem(AUTH_KEYS.TOKEN, "__MOCKED_TOKEN__");
    dispatch({
      type: Actions.SIGNIN,
    });
  };
}

export function signout() {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: Actions.SIGNOUT,
    });
  };
}

export function checkAuth() {
  return async (dispatch: Dispatch) => {
    const token = await AsyncStorage.getItem(AUTH_KEYS.TOKEN);
    setTimeout(() => {
      dispatch(token ? signin() : signout());
    }, 1500);
  };
}
