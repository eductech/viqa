// equipment reducer default state
const equipmentReducerDefaultState = [];

// equipment reducer function
const equipmentReducer = (
state = equipmentReducerDefaultState,
action) => {
  switch (action.type) {
    case 'ADD_EQUIPMENT':
      return [
        ...state,
        action.equipment
      ];
    case 'REMOVE_EQUIPMENT':
    case 'UPDATE_EQUIPMENT':
    default:
      return state;
  }
};

export default equipmentReducer;
