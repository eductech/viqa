const authReducer = (
  state={
    pendingCredInfo: null
  }, 
  action
) => {
  switch (action.type) {
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