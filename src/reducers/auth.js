const authReducer = (
  state={
    uid: null,
    pendingCredInfo: null
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
    default:
      return state;
  }
}

export default authReducer;