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
    default:
      return state;
  }
};

export default sessionSettingsReducer;