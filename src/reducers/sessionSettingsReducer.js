const sessionSettingsReducer = (
  state = {
    lastOpenedList: 'equipment',
    showAuthorizationModal: false
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_LAST_OPENED_LIST':
      return {
        ...state,
        lastOpenedList: action.lastOpenedList
      };
    case 'SHOW_AUTHORIZATION_MODAL':
      return {
        ...state,
        showAuthorizationModal: action.modalVisibility
      }
    default:
      return state;
  }
};

export default sessionSettingsReducer;