const authReducer = (
  state={
    uid: null,
    pendingCredInfo: null,
    error: null
  }, 
  action
) => {
    switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        uid: action.uid
      };
    case 'SIGN_OUT':
      return {
        ...state,
        uid: null
      };
    case 'ADD_PENDING_CRED_INFO':
      return {
        ...state,
        pendingCredInfo: action.pendingCredInfo
      };
    case 'REMOVE_PENDING_CRED_INFO':
      return {
        ...state,
        pendingCredInfo: null
      }
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default authReducer;