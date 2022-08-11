export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'eomdh',
    },
    content: '첫 번째 게시글 #해시태그',
    Image: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
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
  content: '두 번째 게시글',
  images: [],
  Comments: [],
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;