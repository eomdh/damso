import shortId from 'shortid';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'eomdh',
      profileImagePath: '',
    },
    content: '첫 번째 게시글 #해시태그1 #해시태그2',
    Images: [
    {
      id: shortId.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    },
    {
      id: shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, 
    {
      id: shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }
    ],
    Comments: [{
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: 'yeji',
      },
      content: '첫 번째 댓글'
    }, {
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: 'deokhyeon',
      },
      content: '두 번째 댓글'
    }],
    Likers: [{}],
    imagePaths: [],
  }],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const dummyPost = (data) => ({
  id: data.id,
  User: {
    id: 1,
    nickname: 'eomdh',
  },
  content: data.content,
  images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  User: {
    id: 1,
    nickname: 'eomdh',
  },
  content: data,
});

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const removePost = (data) => ({
  type: REMOVE_POST_REQUEST,
  data,
})

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: true,
        mainPosts: state.mainPosts.filter((v) => v.id === action.data),
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      }
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [...post.Comments, dummyComment(action.data.content)];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }
    default:
      return state;
  }
};

export default reducer;