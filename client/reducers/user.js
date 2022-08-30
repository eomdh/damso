export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeIntroduceLoading: false,
  changeIntroduceDone: false,
  changeIntroduceError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_INTRODUCE_REQUEST = "CHANGE_INTRODUCE_REQUEST";
export const CHANGE_INTRODUCE_SUCCESS = "CHANGE_INTRODUCE_SUCCESS";
export const CHANGE_INTRODUCE_FAILURE = "CHANGE_INTRODUCE_FAILURE";

export const ADD_POST_OF_ME = "ADD_POST_OF_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  ...data,
  id: '1',
  nickname: 'eomdh',
  introduce: '안녕하세요~ 엄덕현입니다.',
  profileImagePath: '',
  Posts: [],
});

export const logIn = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};

export const logOut = () => {
  return {
    type: LOG_OUT_REQUEST,
  }
};

export const changeIntroduce = (data) => {
  return {
    type: CHANGE_INTRODUCE_REQUEST,
    data,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state, 
        logInLoading: true,
        logInDone: false,
        logInError: null,       
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case CHANGE_INTRODUCE_REQUEST:
      return {
        ...state,
        changeIntroduceLoading: true,
        changeIntroduceDone: false,
        changeIntroduceError: null,
      };
    case CHANGE_INTRODUCE_SUCCESS:
      return {
        ...state,
        changeIntroduceLoading: false,
        changeIntroduceDone: true,
        introduce: action.data,
      };
    case CHANGE_INTRODUCE_FAILURE:
      return {
        ...state,
        changeIntroduceLoading: false,
        changeIntroduceError: action.error,
      };
    case ADD_POST_OF_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],
        }
      }
    case REMOVE_POST_OF_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: state.me.filter((v) => v.id === action.data),
        }
      }
    default:
      return state;
  }
};

export default reducer;