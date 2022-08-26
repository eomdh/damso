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
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    },
    {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, 
    {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }
    ],
    Comments: [{
      User: {
        nickname: 'yeji',
      },
      content: '첫 번째 댓글'
    }, {
      User: {
        nickname: 'deokhyeon',
      },
      content: '두 번째 댓글'
    }],
    Likers: [{}],
    imagePaths: [],
    postAdded: false,
  }],
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: 'eomdh',
  },
  content: '더미데이터입니다.',
  images: [],
  Comments: [],
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_FAILURE:
      return {
      };
    default:
      return state;
  }
};

export default reducer;