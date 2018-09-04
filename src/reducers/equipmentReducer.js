const equipmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EQUIPMENT':
      return [
        ...state,
        action.equipment
      ];
    case 'REMOVE_EQUIPMENT':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_EQUIPMENT':
      return state.map((equipment) => {
        if (equipment.id === action.id) {
          return {
            ...equipment,
            ...action.updates
          };
        } else {
          return equipment;
        };
      });
    case 'SET_EQUIPMENT_LIST':
      return action.equipmentList;
    default:
      return state;
  }
};

export default equipmentReducer;
