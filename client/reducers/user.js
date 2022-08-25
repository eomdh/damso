export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = {
  id: 1,
  nickname: 'eomdh',
  introduce: '안녕하세요~ 엄덕현입니다.',
  profileImagePath: [],
  Posts: [],
  Followings: [],
  Followers: [],
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: dummyUser,
        loginData: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;