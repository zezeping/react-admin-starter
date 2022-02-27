const initData = {
  authInfo: null,
  userInfo: null
}

export default (state = {...initData}, action) => {
  switch (action.type) {
    case 'SET_USER_AUTH_INFO':
      return {
        ...state,
        authInfo: action.payload,
      }
    case 'SET_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      }
    case 'SET_USER_LOGOUT':
      return {...initData}
    default:
      return state
  }
}