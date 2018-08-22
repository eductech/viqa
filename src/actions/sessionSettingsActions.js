// CHANGE_LAST_OPENED_LIST
export const changeLastOpenedList = (lastOpenedList) => {
  return {
    type: 'CHANGE_LAST_OPENED_LIST',
    lastOpenedList
  }
}

// SHOW_AUTHORIZATION_MODAL
export const showAuthorizationModal = (modalVisibility) => {
  return {
    type: 'SHOW_AUTHORIZATION_MODAL',
    modalVisibility
  }
}
