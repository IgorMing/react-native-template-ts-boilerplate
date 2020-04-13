export const Actions = {
  SIGNIN: 'AUTH/SIGNIN',
  SIGNOUT: 'AUTH/SIGNOUT'
};

export interface AuthModuleState {
  isSignedin: boolean | null;
  isSigningOut: boolean;
}

type ActionTypes = typeof Actions.SIGNIN | typeof Actions.SIGNOUT;

export interface AuthModuleAction {
  type: ActionTypes;
}

export interface ASYNC_STORAGE_KEYS {
  TOKEN: string;
}
