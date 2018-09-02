const equipmentReducer = (
state = [],
action) => {
  switch (action.type) {
    case 'ADD_EQUIPMENT':
      return [
        ...state,
        action.equipment
      ];
    case 'REMOVE_EQUIPMENT':
    case 'UPDATE_EQUIPMENT':
    case 'SET_EQUIPMENT_LIST':
      return action.equipmentList;
    default:
      return state;
  }
};

export default equipmentReducer;
