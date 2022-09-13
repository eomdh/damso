import produce from '../utils/produce';  

export const initialState = {
  me: null,
  userInfo: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
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
};

export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

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

export const CHANGE_PROFILE_IMAGE_REQUEST = "CHANGE_PROFILE_IMAGE_REQUEST";
export const CHANGE_PROFILE_IMAGE_SUCCESS = "CHANGE_PROFILE_IMAGE_SUCCESS";
export const CHANGE_PROFILE_IMAGE_FAILURE = "CHANGE_PROFILE_IMAGE_FAILURE";

export const ADD_POST_OF_ME = "ADD_POST_OF_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.me = action.data;
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.userInfo = null;
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.userInfo = action.data;
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        break;
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.me = action.data;
        draft.logInLoading = false;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_INTRODUCE_REQUEST:
        draft.changeIntroduceLoading = true;
        draft.changeIntroduceDone = false;
        draft.changeIntroduceError = null;
        break;
      case CHANGE_INTRODUCE_SUCCESS:
        draft.me.introduce = action.data.introduce;
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceDone = true;
        break;
      case CHANGE_INTRODUCE_FAILURE:
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceError = action.error;
        break;
      case CHANGE_PROFILE_IMAGE_REQUEST:
        draft.changeProfileImageLoading = true;
        draft.changeProfileImageDone = false;
        draft.changeProfileImageError = null;
        break;
      case CHANGE_PROFILE_IMAGE_SUCCESS:
        draft.me.profileImagePath = action.data.filename;
        draft.changeProfileImageLoading = false;
        draft.changeProfileImageDone = true;
        break;
      case CHANGE_PROFILE_IMAGE_FAILURE:
        draft.changeProfileImageLoading = false;
        draft.changeProfileImageError = action.error;
        break;
      case ADD_POST_OF_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id === action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;