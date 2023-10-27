export type AuthenticatedStackParams = {
  Home: undefined;
  Details: undefined;
};

type PublicStackParams = {
  Signin: undefined;
  Signup: undefined;
};

export type RootStackParams = AuthenticatedStackParams & PublicStackParams;

export type RootTabParams = {
  HomeStack: undefined;
  Profile: undefined;
};
